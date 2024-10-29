const taskActivity = require("./models/taskactivity");
const cron = require("node-cron");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();
    // const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
    const tasksRemainders = await taskActivity.find({
      remainder: { $lte: now },
      completed: false,
      notified: false,
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
          console.log("Error sending remainder", err);
        } else {
          console.log("Email sent successfully", data.response);
          task.notified = true;
          await task.save();
        }
      });
    }
  } catch (error) {
    console.log("Error in setting cron remainder", error.message);
  }
});

// const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);
