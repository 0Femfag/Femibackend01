const express = require("express");
const {
  updateUser,
  newPassword,
  updateRole,
  deleteUser,
} = require("../controllers/newuser");
const { verify } = require("../middlewares/verify");
const routes = express.Router();

routes.put("/put1", verify, updateUser);
routes.put("/put", verify, newPassword);
routes.delete("delete", verify, deleteUser);
routes.put("/change-role", verify, updateRole);

module.exports = routes;
