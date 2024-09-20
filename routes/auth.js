const express = require("express");
const routes = express.Router();
const { register, loginUser } = require("../controllers/auth");

routes.post("/createuser", register);
routes.post("/login", loginUser);

module.exports = routes;
