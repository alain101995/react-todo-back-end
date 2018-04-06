const tasksConnection = require("../connections/tasksConnection");
const tasksController = () => {
  const taskList = (req, res) => {
    tasksConnection
      .findTasks()
      .then(tasks => {
        res.status(200).send({
          status: 200,
          message: "Task list: ",
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
