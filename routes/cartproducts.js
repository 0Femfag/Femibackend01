const express = require("express");
const {
  addCart,
  deleteCart,
  getoneCart,
  getCart,
} = require("../controllers/cartproducts");
const { verify } = require("../middlewares/verify");
const routes = express.Router();

routes.post("/postcart", verify, addCart);
routes.get("/getallcart", verify, getCart);
routes.get("/getcart/:productId", verify, getoneCart);
routes.delete("/deletecart", verify, deleteCart);

module.exports = routes;
