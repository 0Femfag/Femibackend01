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
    quantity: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered"],
      default: "Pending",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    shippingCost: {
      type: Number,
      default: 0,
    },
    tax: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    finalPrice: {
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
