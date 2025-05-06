const express = require("express");
const routes = express.Router();
const {
  makeComment,
  getallComment,
  deleteoneComment,
  updateoneComment,
  getComment,
} = require("./blogpostcommentcontroller");
const { verify } = require("../middlewares/verify");

routes.post("/comment", verify, makeComment);
routes.get("/getcomment/:postId", verify, getallComment);
routes.get("/getcomment/:commentId", verify, getComment);
routes.delete("/deletecomment", verify, deleteoneComment);
routes.put("/putcomment", verify, updateoneComment);

module.exports = routes;
