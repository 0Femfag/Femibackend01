const express = require("express");
const { verify } = require("../middlewares/verify");
const {
  signUp,
  OauthRegister,
  loginUser,
  logoutUser,
} = require("../controllers/taskuser");
const routes = express.Router();

routes.post("/taskrole", signUp);
routes.post("/oauthrole", OauthRegister);
routes.post("/loginrole", loginUser);
routes.post("/logoutrole", verify, logoutUser);

module.exports = routes;
