const mongoose = require("mongoose");
const orderitemSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    purchasePrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const orderitemModel = mongoose.model("ORDERITEM", orderitemSchema);
module.exports = orderitemModel;
