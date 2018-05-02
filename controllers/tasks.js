const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = "mongodb://127.0.0.1/todo";
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);
db.on("error", console.error.bind(console, "MongoDB connection error: "));

const TaskModel = require("../models/tasksModel");

const tasksController = () => {
  const taskList = (req, res) => {
    TaskModel.TaskModel.find({})
      .then(tasks => {
        res.status(200).send({
          status: 200,
          message: "Task list",
          data: tasks
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
  const saveTask = (req, res) => {
    const taskToSave = new TaskModel.TaskModel(req.body.taskData);
    taskToSave.save(err => {
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
  const deleteTask = (req, res) => {
    console.log(req.body.taskID)
    TaskModel.TaskModel.findByIdAndRemove({ _id: req.body.taskID }, err => {
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
    taskList,
    saveTask,
    deleteTask
  };
};

module.exports = tasksController();
