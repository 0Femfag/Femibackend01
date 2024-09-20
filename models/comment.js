const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    postId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "POST",
    },
    commentorsId: {
      type: mongoose.Types.ObjectId,
      reuired: true,
      ref: "LUMINARY",
    },
  },
  { timestamps: true }
);
const commentModel = mongoose.model("COMMENT", commentSchema);
module.exports = commentModel;
