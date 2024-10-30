const taskActivity = require("./models/taskactivity");
const nodemailer = require("nodemailer");
const taskModel = require("./models/taskuser");

const taskReminder = async (req, res) => {
  const { taskId } = req.body;
  const { id } = req.user;
  try {
    const task = await taskActivity.findById(taskId);
    const user = await taskModel.findById(id);
    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }
    const currentDate = new Date();
    const taskdeadline = new Date(task.deadline);
    const timeDifference = taskdeadline.getTime() - currentDate.getTime();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const token = jwt.sign({ id: task.creatorId.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    const mailOptions = {
      from: "Femimane1@gmail.com",
      to: "femfag305@gmail.com",
      subject: "Task project Remainder",
      text: `Hi remainder about your task activity: ${task.title}. Deadline:${task.deadline}`,
    };
    if (timeDifference <= 8640000) {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return res.status(500).json({ message: error.message });
        }
        res
          .status(200)
          .json({ message: `Email sent to ${user.username} successfully` });
      });
    } else {
      return res.status(400).json({ message: "Task isn't due in 24 hrs" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { taskReminder };
