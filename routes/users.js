const express = require("express");
const userRouter = express.Router();
const { usersController } = require("../controllers");

const userRoutes = () => {
  // Get tasks list from the db
  userRouter.route("/").get(usersController.usersList);
  return userRouter;
};

module.exports = userRoutes();
