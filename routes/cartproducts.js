const express = require("express");
const { addCart, deleteCart, getCart } = require("../controllers/cartproducts");
const { verify } = require("../middlewares/verify");
const routes = express.Router();

routes.post("/postcart", verify, addCart);
routes.get("/getallcart", getCart);
routes.delete("/deletecart", verify, deleteCart);

module.exports = routes;
