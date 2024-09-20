const express = require("express");
const { likePost, createPost } = require("../controllers/creator");
const routes = express.Router();

routes.post("/post", createPost);
routes.post("/likes", likePost);

module.exports = routes;
