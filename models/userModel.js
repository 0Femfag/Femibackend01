const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  //To create the structure of the user's info on the database
  {
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  (Postings = {
    type: mongoose.Types.ObjectId,
    ref: "blog",
  }),
  { timestamps: true },
);

//To be able to save/export the userSchema to the database
module.exports = mongoose.model("blogger", userSchema);
