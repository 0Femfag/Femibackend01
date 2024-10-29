const taskActivity = require("./models/taskactivity");
const nodemailer = require("nodemailer");

const taskReminder = async (id) => {
  const task = await taskActivity.findById(id);
  if (!task) {
    return res.status(404).json({ message: "task not found" });
  }
  const currentDate = new Date();
  const taskdeadline = new Date(task.deadline);

  if (timeDifference > 86) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }
  const token = jwt.sign({ id: task.creatorId.id }, process.env.JWT_SECRET);
  const mailOptions = {
    from: "Femimane1@gmail.com",
    to: "femfag305@gmail.com",
    subject: "Task project Remainder",
  };
};
