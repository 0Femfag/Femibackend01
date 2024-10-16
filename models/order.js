const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
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
    orderId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "CARTPRODUCT",
    },
    quantity: {
      type: Number,
    },
    orderStatus: {
      type: String,
      required: true,
      enum: ["Pending", "Shipped", "Delivered"],
      default: "Pending",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      type: {
        street: String,
        city: String,
        state: String,
        country: String,
        postcode: Number,
      },
      required: true,
    },
  },
  { timestamps: true },
);

const orderModel = mongoose.model("ORDER", orderSchema);
module.exports = orderModel;
