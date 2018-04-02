const express = require('express');
const userRouter = express.Router();
const { todosController } = require('../controllers');

const userRoutes = () => {
  userRouter.route("/").get(todosController.todos);
  return userRouter;
};

module.exports = userRoutes();