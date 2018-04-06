const express = require("express");
const userRouter = express.Router();
const { usersController } = require("../controllers");

const userRoutes = () => {
  // Get users list from db
  userRouter.route("/").get(usersController.usersList);
  // Save a new tasks on db
  userRouter.route("/").post(usersController.saveUser);
  // Delete task from db
  userRouter.route("/").delete(usersController.deleteUser);
  return userRouter;
};

module.exports = userRoutes();
