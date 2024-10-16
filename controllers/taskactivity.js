const taskActivity = require("../models/taskmodel");

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

const updateTask = async (req, res) => {};

module.exports = { createTask, getallTask, getoneTask, updateTask };
