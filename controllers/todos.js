const todosConnection = require("../connections/todosConnection");
const todosController = () => {
  const taskList = (req, res) => {
    todosConnection
      .findTodos()
      .then(data => {
        res.status(200).send({
          status: 200,
          message: "DB Data",
          data: data
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
    todosConnection
    .saveTodos()
    .then(data => {
      res.status(200).send({
        status: 200,
        message: "Task saved",
        data: data
      });
    }).catch(error => {
      res.status(400).send({
        status: 400,
        message: "Error",
        error
      });
    });
  }
  return {
    taskList,
    saveTask,
  };
};

module.exports = todosController();
