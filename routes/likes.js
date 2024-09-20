const express = require("express");
const routes = express.Router();
const { likePost, createPost } = require("../controllers/likes");

routes.post("/likes", likePost);
routes.post("/post", createPost);

module.exports = routes;
