const taskActivity = require("../models/taskactivity");
const taskModel = require("../models/taskuser");
const cron = require("node-cron");
const nodemailer = require("nodemailer");

const createTask = async (req, res) => {
  const { creatorId, ...others } = req.body;
  const { id } = req.user;
  try {
    const newTask = new taskActivity({ creatorId: id, ...others });
    await newTask.save();
    res.status(201).json({ message: "task successfully created", newTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getallTask = async (req, res) => {
  const { id } = req.user;
  try {
    const getAll = await taskActivity
      .find({ creatorId: id })
      .populate({ path: "creatorId", select: "username email gender" });
    if (!getAll) {
      return res.status(404).json({ message: "No such task" });
    }
    res.status(200).json({ getAll });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getoneTask = async (req, res) => {
  const { id } = req.user;
  const { taskId } = req.params;
  try {
    const getOne = await taskActivity.findById(taskId);
    if (!getOne) {
      return res.status(404).json({ message: "No such task" });
    }
    if (getOne.creatorId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authourized to do this" });
    }
    res.status(200).json(getOne);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { taskId, ...others } = req.body;
  const { id } = req.user;
  try {
    const getTask = await taskActivity.findById(taskId);
    if (!getTask) {
      return res.status(404).json({ message: "Task doesn't exist" });
    }
    if (getTask.creatorId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authenticated to do this" });
    }
    const updatetask = await taskActivity.findByIdAndUpdate(
      taskId,
      { ...others },
      { new: true },
    );
    res
      .status(200)
      .json({ message: "Task was updated successfully", updatetask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const { id } = req.user;
  try {
    const getoneTask = await taskActivity.findById(taskId);
    if (!getoneTask) {
      return res.status(404).json({ message: "Task doesn't exist" });
    }
    if (getoneTask.creatorId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authorized to do this" });
    }
    await taskActivity.findByIdAndDelete(taskId);
    res.status(200).json({ message: "Task was deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

cron.schedule("0 * * * *", async (req, res) => {
  const { taskId } = req.body;
  const { id } = req.user;
  try {
    const task = await taskActivity.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }
    const user = await taskModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "No such user" });
    }
    if (user.creatorId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authenticated to do this" });
    }
    const currentDate = new Date();
    console.log(currentDate);
    const oneHourLater = new Date(currentDate.getTime() + 60 * 60 * 1000);
    console.log(oneHourLater);
    const tasksRemainders = await taskActivity.findById(taskId, {
      deadline: { $gte: currentDate, $lte: oneHourLater },
      completed: false,
      remainderSent: false,
    });
    for (const task of tasksRemainders) {
      const mailOptions = {
        from: process.env.MAIL_USER,
        to: "femfag305@gmail.com",
        subject: `Reminder: Task "${task.title}" project Remainder"`,
        text: `Hi remainder about your task activity: ${task.title}. Deadline:${task.deadline}`,
      };
      transporter.sendMail(mailOptions, async function (err, data) {
        if (err) {
          res.status(404).json({ message: "Error sending remainder", err });
        } else {
          task.remainderSent = true;
          await task.save();
          res.status(200).json({ message: "Email sent successfully", data });
          // res.status(200).json({ message: `Task remainder sent: task.title` });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error in setting cron remainder", error });
  }
});

module.exports = { createTask, getallTask, getoneTask, updateTask, deleteTask };
