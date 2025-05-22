const express = require("express");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/userRouter");
const blopPostroute = require("./BLOGPOST/blogpostauthroute");
const PostRoute = require("./BLOGPOST/blogpostroute");
const CommentRoute = require("./BLOGPOST/blogpostcomment");
const routes = require("./E-COMMERCE/authroutes");
const productRoute = require("./E-COMMERCE/productsroute");
const cartRoute = require("./E-COMMERCE/cartproductroutes");
const orderRoute = require("./E-COMMERCE/orderroute");
const taskRoute = require("./routes/taskuser");
const activityRoute = require("./routes/taskactivity");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(routes);
app.use(blopPostroute);
app.use(PostRoute);
app.use(userRouter);
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
