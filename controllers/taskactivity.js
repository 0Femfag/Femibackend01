const taskActivity = require("../models/taskactivity");

const createTask = async (req, res) => {
  const { creatorId, ...others } = req.body;
  const { id } = req.user;
  try {
    const newTask = new taskActivity({ creatorId: id, ...others });
    await newTask.save();
    res.status(201).json({ message: "task successfully created", newTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getallTask = async (req, res) => {
  const { id } = req.user;
  try {
    const getAll = await taskActivity
      .find({ id })
      .populate({ path: "creatorId", select: "username email gender role " });
    if (!getAll) {
      return res.status(404).json({ message: "No such task" });
    }
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getoneTask = async (req, res) => {
  const { id } = req.user;
  const { taskId } = req.params;
  try {
    const getOne = await taskActivity
      .findById(taskId)
      .populate({ path: "creatorId", select: "username email gender role " });
    if (!getOne) {
      return res.status(404).json({ message: "No such task" });
    }
    if (getOne.creatorId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authenticated to do this" });
    }
    res.status(200).json(getOne);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { taskId, ...others } = req.body;
  const { id } = req.user;
  try {
    const getTask = await taskActivity.findById(taskId);
    if (!getTask) {
      return res.status(404).json({ message: "Task doesn't exist" });
    }
    if (getTask.creatorId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authenticated to do this" });
    }
    const updatetask = await taskActivity.findByIdAndUpdate(
      taskId,
      { ...others },
      { new: true },
    );
    res
      .status(200)
      .json({ message: "Task was updated successfully", updatetask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const { id } = req.user;
  try {
    const getoneTask = await taskActivity.findById(taskId);
    if (!getoneTask) {
      return res.status(404).json({ message: "Task doesn't exist" });
    }
    if (getoneTask.creatorId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authenticated to do this" });
    }
    await taskActivity.findByIdAndDelete(taskId);
    res.status(200).json({ message: "Task was deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTask, getallTask, getoneTask, updateTask, deleteTask };
