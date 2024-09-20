const mongoose = require("mongoose");
const likeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    previewPix: {
      type: String,
      required: true,
    },
    detailPix: {
      type: String,
      required: true,
    },
    creatorId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    likes: {
      type: [mongoose.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true }
);

const likeModel = mongoose.model("POST", likeSchema);
module.exports = likeModel;
