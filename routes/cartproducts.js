const express = require("express");
const {
  addCart,
  getcartProduct,
  updateCart,
  deletecartItem,
  clearCart,
} = require("../controllers/cartproducts");
const { verify } = require("../middlewares/verify");
const routes = express.Router();

routes.post("/postcart", verify, addCart);
routes.get("/getcart", verify, getcartProduct);
routes.put("/updatecart", verify, updateCart);
routes.delete("/deletecart", verify, deletecartItem);
routes.delete("/clear", verify, clearCart);

module.exports = routes;
