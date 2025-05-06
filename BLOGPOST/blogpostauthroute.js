const express = require("express");
const routes = express.Router();
const {
  signUp,
  OuathRegister,
  loginUser,
  logoutUser,
  deleteUser,
} = require("./blogpostauthcontroller");
const { verify } = require("../middlewares/verify");

routes.post("/bloguser", signUp);
routes.post("/oauthuser", OuathRegister);
routes.post("/loginuser", loginUser);
routes.post("/logoutuser", verify, logoutUser);
routes.post("/deleteuser", verify, deleteUser);
module.exports = routes;
