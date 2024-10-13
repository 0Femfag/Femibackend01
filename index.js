const express = require("express");
const dotenv = require("dotenv").config();
// console.log(process.env);
// console.log(dotenv);
const router = require("./routes/newuser");
const routes = require("./routes/auth");
const blopPostroute = require("./routes/blogpostauthroute");
const Postroutes = require("./routes/blogpost");
const Commentrouter = require("./routes/blogpostcomment");
const productRoute = require("./routes/products");
const cartRoute = require("./routes/cartproducts");
const orderRoute = require("./routes/order");

const cookieparser = require("cookie-parser");
// dotenv.config();
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(routes);
app.use(blopPostroute);
app.use(Postroutes);
app.use(router);
app.use(Commentrouter);
app.use(productRoute);
app.use(cartRoute);
app.use(orderRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`);
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

// var http = require("http");
// const express = require("express");
// const https = express();
// // http.use(express.json());
// // app.use(express.json());
// http.request(express.json());

// http.get("/get", function (req, res) {
//   const body = req.body;
//   console.log(body);
//   // res.writeHead(200, { "Content-Type": "text/plain" });
//   res.send("Hello World!");
// });

// const PORT = process.env.PORT || 8000;
// http.listen(PORT, () => {
//   console.log(`app is running at ${PORT}`);
// });
