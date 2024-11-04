const express = require("express");
const {
  makePost,
  getallPost,
  getonePost,
  updatePost,
  deletePost,
} = require("../controllers/blogpost");
const { verify } = require("../middlewares/verify");
const routes = express.Router();

routes.post("/newpost", verify, makePost);
routes.get("/getpost", verify, getallPost);
routes.get("/getone/:postId", verify, getonePost);
routes.put("/updatepost", verify, updatePost);
routes.delete("/deletepost/:postId", verify, deletePost);

module.exports = routes;
