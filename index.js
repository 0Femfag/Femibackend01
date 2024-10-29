const express = require("express");
const dotenv = require("dotenv").config();
// const router = require("./routes/newuser");
const blopPostroute = require("./routes/blogpostauth");
const PostRoute = require("./routes/blogpost");
const CommentRoute = require("./routes/blogpostcomment");
const routes = require("./routes/auth");
const productRoute = require("./routes/products");
const cartRoute = require("./routes/cartproducts");
const orderRoute = require("./routes/order");
const taskRoute = require("./routes/taskuser");
const activityRoute = require("./routes/taskactivity");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose");
require("./remainderScheduler");
const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(routes);
app.use(blopPostroute);
app.use(PostRoute);
// app.use(router);
app.use(CommentRoute);
app.use(productRoute);
app.use(cartRoute);
app.use(orderRoute);
app.use(taskRoute);
app.use(activityRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
