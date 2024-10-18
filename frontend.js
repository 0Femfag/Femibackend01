// async function postIt(){
//     const response = await fetch("http://localhost:3000/post", {
//         method: "POST",
//         body: JSON.stringify({ name: "Femi", married: false, age: 77 }),
//     });
//     const result = await response.json();
//     console.log(result);
// }
// postIt();

// const newUser = {
//     id: "66c7761ff1bac1112505ffc3",
//     name: "Oluwafemi",
//     email: "Femimane1@gmail.com",
//   };

//   const mySecret = "Iconic651310@$%";

//   app.post("/login", (req, res) => {
//     const { email } = req.body;
//     const myToken = jwt.sign(newUser, mySecret, { expiresIn: "3h" });
//     console.log(myToken);
//     res.json({ message: myToken });
//   });

//   app.put("/update", (req, res) => {
//     const { token } = req.body;
//     jwt.verify(token, mySecret, (err, info) => {
//       if (err) {
//         console.log(err.message);
//         res.json({ message: err.message });
//       } else {
//         console.log(info);
//         res.json(info);
//       }
//     });
//   });

//   app.post("/loginuser", (req, res) => {
//     const { email } = req.body;
//     const myToken = jwt.sign(newUser, mySecret, { expiresIn: "5h" });
//     res.cookie("my_user_info", myToken);
//     res.json({ message: "login successfully" });
//   });

//   app.put("/updateuser", (req, res) => {
//     const { my_user_info } = req.cookies;
//     jwt.verify(my_user_info, mySecret, (err, info) => {
//       if (err) {
//         console.log(err.message);
//         res.json({ message: err.message });
//       } else {
//         console.log(info);
//         res.json(info);
//       }
//     });
//   });

//   const dislikePost = async (req, res) => {
//     const { id, userId } = req.body;
//     try {
//       const getPost = await likeModel.findById(id);
//       const checkuserinArray = getPost.likes.includes(userId);
//       if (checkuserinArray) {
//         const index = getPost.likes.indexOf(userId);
//         getPost.likes.splice(index, 1);
//       }
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   };

//   var http = require("http");
//   const express = require("express");
//   const https = express();
//   // http.use(express.json());
//   // app.use(express.json());
//   http.request(express.json());

//   http.get("/get", function (req, res) {
//     const body = req.body;
//     console.log(body);
//     // res.writeHead(200, { "Content-Type": "text/plain" });
//     res.send("Hello World!");
//   });

//   const PORT = process.env.PORT || 8000;
//   http.listen(PORT, () => {
//     console.log(`app is running at ${PORT}`);
//   });
