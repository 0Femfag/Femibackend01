const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
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
          required: true,
          ref: "PRODUCT",
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    orderStatus: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered"],
      default: "Pending",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    shipCost: {
      type: Number,
      enum: [15, 5],
      default: 5,
    },
    taxPrice: {
      type: Number,
      default: 0,
    },
    discountPrice: {
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
