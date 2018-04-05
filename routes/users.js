const express = require("express");
const userRouter = express.Router();
const { usersController } = require("../controllers");

const userRoutes = () => {
  // Get users list from db
  userRouter.route("/").get(usersController.usersList);
  return userRouter;
};

module.exports = userRoutes();
