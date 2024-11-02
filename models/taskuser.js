const mongoose = require("mongoose");

const taskUser = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    credentialAccount: {
      type: Boolean,
      default: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
  },
  { timestamps: true },
);

const taskModel = mongoose.model("TASKUSER", taskUser);
module.exports = taskModel;
