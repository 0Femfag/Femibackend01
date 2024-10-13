const mongoose = require("mongoose");

const cartproductSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "USER",
    },
    productId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "PRODUCT",
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    totalPrice: {
      type: Number,
    },
  },
  { timestamps: true },
);

const cartproductModel = mongoose.model("CARTPRODUCT", cartproductSchema);
module.exports = cartproductModel;
