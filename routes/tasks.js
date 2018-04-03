const express = require('express');
const userRouter = express.Router();
const { todosController } = require('../controllers');

const userRoutes = () => {
  userRouter.route("/").get(todosController.task);
  return userRouter;
};

module.exports = userRoutes();