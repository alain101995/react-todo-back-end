const todosConnection = require("../connections/todosConnection");
const todosController = () => {
  console.log("Here");
  const task = (req, res) => {
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
  return {
    task
  };
};

module.exports = todosController();
