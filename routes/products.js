const express = require("express");
const routes = express.Router();
const {
  createProduct,
  deleteProduct,
  updateProduct,
  getallProduct,
  getoneProduct,
} = require("../controllers/products");
const { verify } = require("../middlewares/verify");

routes.post("/create", verify, createProduct);
routes.get("/getproduct", getallProduct);
routes.get("/getproduct/:id", getoneProduct);
routes.delete("/deleteproduct/:id", verify, deleteProduct);
routes.put("/updateproduct", verify, updateProduct);

module.exports = routes;
