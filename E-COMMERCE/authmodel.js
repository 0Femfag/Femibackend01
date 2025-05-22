const mongoose = require("mongoose");

const newuserSchema = new mongoose.Schema(
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
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    credentialAccount: {
      type: Boolean,
      default: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  { timestamps: true },
);

const newuserModel = mongoose.model("USER", newuserSchema);
module.exports = newuserModel;
