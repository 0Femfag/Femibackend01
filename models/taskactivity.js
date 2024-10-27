const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    creatorId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "TASKUSER",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Work", "Personal", "Other"],
      default: "Other",
    },
    deadline: {
      type: Date,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    remainder: {
      type: Date,
    },
    notified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const taskActivity = mongoose.model("TASKACTIVITY", taskSchema);
module.exports = taskActivity;
