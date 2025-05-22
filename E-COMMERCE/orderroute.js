const express = require("express");
const {
  createOrder,
  getOrders,
  admingetOrders,
  updateorderStatus,
} = require("./ordercontroller");
const { verify } = require("../middlewares/verify");
const routes = express.Router();

routes.post("/neworder", verify, createOrder);
routes.get("/getuser", verify, getOrders);
routes.get("/getadmin", verify, admingetOrders);
routes.put("/updatestatus", verify, updateorderStatus);

module.exports = routes;
