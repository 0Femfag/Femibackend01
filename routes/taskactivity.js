const express = require("express");
const { verify } = require("../middlewares/verify");
const {
  createTask,
  getallTask,
  getoneTask,
  updateTask,
  deleteTask,
  Reminder,
} = require("../controllers/taskactivity");
const routes = express.Router();

routes.post("/createtask", verify, createTask);
routes.get("/gettask", verify, getallTask);
routes.get("/gettask/:taskId", verify, getoneTask);
routes.put("/updatetask", verify, updateTask);
routes.delete("/deletetask/:taskId", verify, deleteTask);
routes.post("/reminder", verify, Reminder);

module.exports = routes;
