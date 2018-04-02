
const todosController = () => {
  const todos = (req, res) => {
   res.send(console.log('Hello'))
  };

  return {
    todos,
  };
};

module.exports = todosController();