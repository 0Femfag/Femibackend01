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
    credentialAccount: {
      type: Boolean,
      default: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    details: {
      address: String,
      postcode: Number,
    },
    role: {
      type: String,
      enum: ["Basic", "Admin", "SuperAdmin"],
      default: "Basic",
    },
  },
  { timestamps: true }
);

const newuserModel = mongoose.model("LUMINARY", newuserSchema);
module.exports = newuserModel;
