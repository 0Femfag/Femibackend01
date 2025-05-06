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
      ref: "BLOGPOST",
    },
    commentorsId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "BLOGUSER",
    },
  },
  { timestamps: true },
);
const commentModel = mongoose.model("BLOGCOMMENT", commentSchema);
module.exports = commentModel;
