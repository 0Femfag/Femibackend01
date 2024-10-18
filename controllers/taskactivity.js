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
      .find(id)
      .populate({ path: "creatorId", select: "username email gender role " })
      .populate({
        path: "taskId",
        select: "title description category completed",
      });
    res.status(200).json(getAll);
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
      .populate({ path: "creatorId", select: "username email gender role " })
      .populate({
        path: "taskId",
        select: "title description category completed",
      });
    res.status(200).json(getOne);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id, ...others } = req.body;
  const { role } = req.user;
  try {
    if (role !== "Admin" && role !== "User") {
      return res
        .status(403)
        .json({ message: "You're not authenticated to do this" });
    }
    const getTask = await taskActivity.findById(id);
    if (!getTask) {
      return res.status(404).json({ message: "Task doesn't exist" });
    }
    const updateTask = await taskActivity.findByIdAndUpdate(
      id,
      { ...others },
      { new: true },
      res
        .status(200)
        .json({ message: "Task was updated successfully", updateTask }),
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  try {
    if (role !== "Admin" && role !== "User") {
      return res
        .status(403)
        .json({ message: "You're not authenticated to do this" });
    }
    const getoneTask = await taskActivity.findById(id);
    if (!getoneTask) {
      return res.status(404).json({ message: "Task doesn't exist" });
    }
    const deleteTask = await taskActivity.findByIdAndDelete(id);
    res.status(200).json({ message: "Task was deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTask, getallTask, getoneTask, updateTask, deleteTask };
