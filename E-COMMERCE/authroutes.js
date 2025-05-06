const express = require("express");
const routes = express.Router();
const {
  signUp,
  OuathRegister,
  loginUser,
  logoutUser,
} = require("./authcontroller");
const { verify } = require("../middlewares/verify");

routes.post("/createuser", signUp);
routes.post("/oauth", OuathRegister);
routes.post("/login", loginUser);
routes.post("/logout", verify, logoutUser);

module.exports = routes;
