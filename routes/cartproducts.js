const express = require("express");
const {
  addCart,
  getCart,
  getcartProduct,
  updateCart,
  deleteCart,
  clearCart,
} = require("../controllers/cartproducts");
const { verify } = require("../middlewares/verify");
const routes = express.Router();

routes.post("/postcart", verify, addCart);
routes.get("/getallcart", getCart);
routes.get("/getcart/:productId", verify, getcartProduct);
routes.put("/updatecart", verify, updateCart);
routes.delete("/deletecart", verify, deleteCart);
routes.delete("/clear", verify, clearCart);

module.exports = routes;
