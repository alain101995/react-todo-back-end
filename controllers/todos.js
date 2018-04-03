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
    console.log("Save Task");
    todosConnection
      .saveTodos()
      .then(saved => {
        if (saved === 200) {
          res.status(200).send({
            status: 200,
            message: "Saved correctly",
          });
        } else {
          res.status(500).send({
            status: 500,
            message: "Bad request",
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
    saveTask
  };
};

module.exports = todosController();
