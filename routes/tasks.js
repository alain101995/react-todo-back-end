const express = require('express');
const userRouter = express.Router();
const { todosController } = require('../controllers');

const userRoutes = () => {
  // Get tasks list from the db
  userRouter.route("/").get(todosController.taskList);
  // Save a new tasks on the db
  userRouter.route("/").post(todosController.saveTask);
  return userRouter;
};

module.exports = userRoutes();