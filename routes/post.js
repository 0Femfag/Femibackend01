const express = require("express");
const { makePost, getallPost, getonePost } = require("../controllers/post");
const { verify } = require("../middlewares/verify");
const routes = express.Router();

routes.post("/new", verify, makePost);
routes.get("/get", verify, getallPost);
// routes.delete("/delete", deletePost);
// routes.put("/update", updatePost);
routes.get("/getone/:id", verify, getonePost);

module.exports = routes;
