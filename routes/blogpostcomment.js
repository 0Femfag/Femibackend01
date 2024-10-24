const express = require("express");
const routes = express.Router();
const {
  makeComment,
  getallComment,
  deleteoneComment,
  updatoneComment,
  getComment,
} = require("../controllers/blogpostcomment");
const { verify } = require("../middlewares/verify");

routes.post("/comment", verify, makeComment);
routes.get("/getcomment", getallComment);
routes.get("/getcomment/:commentId", getComment);
routes.delete("/deletecomment/:id", verify, deleteoneComment);
routes.put("/putcomment", verify, updatoneComment);

module.exports = routes;
