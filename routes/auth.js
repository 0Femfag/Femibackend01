const express = require("express");
const routes = express.Router();
const {
  register,
  loginUser,
  logoutUser,
  OuathRegister,
} = require("../controllers/auth");
const { verify } = require("../middlewares/verify");

routes.post("/createuser", register);
routes.post("/oauth", OuathRegister);
routes.post("/login", loginUser);
routes.post("/logout", verify, logoutUser);

module.exports = routes;
