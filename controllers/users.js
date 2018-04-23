const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = "mongodb://127.0.0.1/todo";
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);
db.on("error", console.error.bind(console, "MongoDB connection error: "));

// const TodoConnection = require("../connections/index");

const UserModel = require("../models/usersModel");

const usersController = () => {
  const usersList = (req, res) => {
    UserModel.UserModel.find({})
      .then(users => {
        res.status(200).send({
          status: 200,
          message: "Users list",
          data: users
        });
      })
      .catch(error => {
        res.status(400).send({
          status: 400,
          message: "Error",
          error
        });
      });
  };
  const saveUser = (req, res) => {
    const userToSave = new UserModel.UserModel(req.body.userData);
    userToSave.save(err => {
      err
        ? res.status(400).send({
            status: 400,
            message: "Something went wrong",
            err
          })
        : res.status(200).send({
            status: 200,
            message: "Saved correctly"
          });
    });
  };
  const deleteUser = (req, res) => {
    console.log("Req user body", req.body);
    UserModel.UserModel.findByIdAndRemove({ _id: req.body.userID._id }, err => {
      err
        ? res.status(400).send({
            status: 400,
            message: "Error",
            err
          })
        : res.status(200).send({
            status: 200,
            message: "Deleted correctly"
          });
    });
  };
  return {
    usersList,
    saveUser,
    deleteUser
  };
};

module.exports = usersController();
