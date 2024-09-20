const express = require("express");
const routes = express.Router();
const {
  makeComment,
  getallComment,
  // getoneComment,
  deleteoneComment,
  updatoneComment,
  getComment,
} = require("../controllers/comment");
const { verify } = require("../middlewares/verify");

routes.post("/comments", verify, makeComment);
routes.get("/get", getallComment);
// routes.get("/get/:id", getoneComment);
routes.get("/comment", verify, getComment);
routes.delete("/delete/:id", deleteoneComment);
routes.put("/put", updatoneComment);

module.exports = routes;
