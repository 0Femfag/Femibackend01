const mongoose = require("mongoose");

const cartproductSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "USER",
    },
    products: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "PRODUCT",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
    },
  },
  { timestamps: true },
);

const cartproductModel = mongoose.model("CARTPRODUCT", cartproductSchema);
module.exports = cartproductModel;
