const express = require("express");
const { verify } = require("../middlewares/verify");
const {
  createTask,
  getallTask,
  getoneTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskactivity");
const routes = express.Router();

routes.post("/createtask", verify, createTask);
routes.get("/gettask", verify, getallTask);
routes.get("/gettask/:taskId", verify, getoneTask);
routes.put("/updatetask", verify, updateTask);
routes.delete("/deletetask/:id", verify, deleteTask);

module.exports = routes;
