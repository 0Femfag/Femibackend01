const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    inventoryCount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    creatorId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "USER",
    },
    imageUrl: {
      type: String,
      required: true,
    },
    cartproducts: {
      type: [mongoose.Types.ObjectId],
      default: [],
      ref: "CARTPRODUCT",
    },
  },
  { timestamps: true },
);

const productModel = mongoose.model("PRODUCT", productSchema);
module.exports = productModel;
