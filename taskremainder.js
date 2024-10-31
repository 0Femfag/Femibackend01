const taskActivity = require("./models/taskactivity");
const cron = require("node-cron");
const nodemailer = require("nodemailer");

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

cron.schedule("0 * * * *", async () => {
  try {
    const currentDate = new Date();
    const oneHourLater = new Date(currentDate.getTime() + 60 * 60 * 1000);
    const tasksRemainders = await taskActivity.find({
      deadline: { $gte: currentDate, $lte: oneHourLater },
      completed: false,
      remainderSent: false,
    });
    for (const task of tasksRemainders) {
      const mailOptions = {
        from: "Femimane1@gmail.com",
        to: "femfag305@gmail.com",
        subject: "Task project Remainder",
        text: `Hi remainder about your task activity: ${task.title}. Deadline:${task.deadline}`,
      };
      transporter.sendMail(mailOptions, async function (err, data) {
        if (err) {
          res.status(404).json({ message: "Error sending remainder", err });
        } else {
          res.status(200).json({ message: "Email sent successfully", data });
          task.remainderSent = true;
          await task.save();
          res.status(200).json({ message: `Task remainder sent: task.title` });
        }
      });
    }
  } catch (error) {
    console.log("Error in setting cron remainder", error.message);
  }
});
