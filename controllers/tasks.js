const tasksConnection = require("../connections/tasksConnection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = "mongodb://127.0.0.1/todo";
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);
db.on("error", console.error.bind(console, "MongoDB connection error: "));

// const taskModel = require("../models/tasksModel"); UNCOMMENT THIS <---
// FIX MODELS PROBLEM ON SAVE

const tasksController = () => {
  const taskList = (req, res) => {
    taskModel.TaskModel.find({})
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
    //   console.log("REQ BODY", req.body);
    //   console.log("REQ BODY", req.body.taskData);
    //   const taskToSave = new taskModel.TaskModel(req.body.taskData);
    //   taskToSave.save(err => {
    //     console.log("Here", err);
    //     if (err) {
    //       res.status(400).send({
    //         status: 400,
    //         message: "Something went wrong",
    //         err
    //       });
    //     } else {
    //       res.status(200).send({
    //         status: 200,
    //         message: "Saved correctly"
    //       });
    //     }
    // });
    tasksConnection
      .saveTasks(req.body)
      .then(saved => {
        if (saved === 200) {
          res.status(200).send({
            status: 200,
            message: "Saved correctly"
          });
        } else {
          res.status(500).send({
            status: 500,
            message: "Bad request"
          });
        }
      })
      .catch(error => {
        res.status(400).send({
          status: 400,
          message: "Error",
          error
        });
      });
  };
  const deleteTask = (req, res) => {
    console.log("BODY", req.body);
    tasksConnection
      .deleteTasks(req.body.dataToDelete)
      .then(deleted => {
        if (deleted === 200) {
          res.status(200).send({
            status: 200,
            message: "Deleted successfuly"
          });
        } else {
          res.status(500).send({
            status: 500,
            message: "Bad request"
          });
        }
      })
      .catch(error => {
        res.status(400).send({
          status: 400,
          message: "Error",
          error
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
