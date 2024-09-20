const mongoose = require("mongoose");
const newSchema = new mongoose.Schema(
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
      ref: "LUMINARY",
    },
    likes: {
      type: [mongoose.Types.ObjectId],
      default: [],
      ref: "LUMINARY",
    },
    comments: {
      type: [mongoose.Types.ObjectId],
      default: [],
      ref: "COMMENT",
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("POST", newSchema);
module.exports = postModel;
