const mongoose = require("mongoose");
const newSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      unique: true,
    },
    previewPix: {
      type: String,
      required: true,
      unique: true,
    },
    detailPix: {
      type: String,
      required: true,
      unique: true,
    },
    creatorId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "BLOGUSER",
    },
    comments: {
      type: [mongoose.Types.ObjectId],
      default: [],
      ref: "BLOGCOMMENT",
    },
  },
  { timestamps: true },
);

const postModel = mongoose.model("BLOGPOST", newSchema);
module.exports = postModel;
