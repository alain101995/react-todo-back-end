const express = require("express");
const taskRouter = express.Router();
const { taskController } = require("../controllers");

const taskRoutes = () => {
  // Get tasks list from the db
  taskRouter.route("/").get(taskController.taskList);
  // Save a new tasks on the db
  taskRouter.route("/").post(taskController.saveTask);
  // Delete task from db
  taskRouter.route("/").delete(taskController.deleteTask);
  return taskRouter;
};

module.exports = taskRoutes();
