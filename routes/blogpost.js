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
routes.get("/getpost", getallPost);
routes.get("/getone/:id", getonePost);
routes.put("/updatepost", verify, updatePost);
routes.delete("/deletepost/:id", verify, deletePost);

module.exports = routes;
