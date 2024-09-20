const express = require("express");
const dotenv = require("dotenv").config();
// console.log(process.env);
// console.log(dotenv);
const router = require("./routes/newuser");
const routes = require("./routes/auth");
const Postroutes = require("./routes/post");
const Commentrouter = require("./routes/comment");

// const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
// dotenv.config();
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(routes);
app.use(Postroutes);
app.use(router);
app.use(Commentrouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`app is running at ${7000}`);
});

// const newUser = {
//   id: "66c7761ff1bac1112505ffc3",
//   name: "Oluwafemi",
//   email: "Femimane1@gmail.com",
// };

// const mySecret = "Iconic651310@$%";

// app.post("/login", (req, res) => {
//   const { email } = req.body;
//   const myToken = jwt.sign(newUser, mySecret, { expiresIn: "3h" });
//   console.log(myToken);
//   res.json({ message: myToken });
// });

// app.put("/update", (req, res) => {
//   const { token } = req.body;
//   jwt.verify(token, mySecret, (err, info) => {
//     if (err) {
//       console.log(err.message);
//       res.json({ message: err.message });
//     } else {
//       console.log(info);
//       res.json(info);
//     }
//   });
// });

// app.post("/loginuser", (req, res) => {
//   const { email } = req.body;
//   const myToken = jwt.sign(newUser, mySecret, { expiresIn: "5h" });
//   res.cookie("my_user_info", myToken);
//   res.json({ message: "login successfully" });
// });

// app.put("/updateuser", (req, res) => {
//   const { my_user_info } = req.cookies;
//   jwt.verify(my_user_info, mySecret, (err, info) => {
//     if (err) {
//       console.log(err.message);
//       res.json({ message: err.message });
//     } else {
//       console.log(info);
//       res.json(info);
//     }
//   });
// });

// const dislikePost = async (req, res) => {
//   const { id, userId } = req.body;
//   try {
//     const getPost = await likeModel.findById(id);
//     const checkuserinArray = getPost.likes.includes(userId);
//     if (checkuserinArray) {
//       const index = getPost.likes.indexOf(userId);
//       getPost.likes.splice(index, 1);
//     }
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };
