const express = require("express");
const routes = express.Router();
const {
  signUp,
  OuathRegister,
  loginUser,
  logoutUser,
} = require("../controllers/blogpostauth");
const { verify } = require("../middlewares/verify");

routes.post("/bloguser", signUp);
routes.post("/oauthuser", OuathRegister);
routes.post("/loginuser", loginUser);
routes.post("/logoutuser", verify, logoutUser);

module.exports = routes;
