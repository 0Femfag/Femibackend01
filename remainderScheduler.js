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

cron.schedule("0 * * * *", async () => {
  try {
    const now = new Date();
    const tasksWithRemainders = await taskActivity.find({
      remainder: { $lte: now },
      completed: false,
    });
    tasksWithRemainders.forEach(async (task) => {
      const user = await taskActivity;
      const mailOptions = {
        from: "Femimane1@gmail.com",
        to: "Floydmartin001@gmail.com",
        subject: "Task project Remainder",
        text: `Hi remainder about your task activity: ${task.title}. Deadline:${task.deadline}`,
      };
      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log("Error sending remainder", err);
        } else {
          console.log("Email sent successfully", data);
        }
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// res.status(404).json({ message: "Error sending remainder", err });

// res.status(200).json({ message: "Email sent successfully", data });
