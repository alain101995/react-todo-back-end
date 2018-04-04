const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = "mongodb://127.0.0.1/todo";
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);

db.on("error", console.error.bind(console, "MongoDB connection error: "));

const data = {
  userID: 1,
  firstName: "Alain",
  lastName: "Quiroz",
  phones: ["3471857195", "7541915091"],
  emails: ["alain@mail.com", "victor@correo.com"]
};

// const todoSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   phones: [String],
//   emails: [String]
// });
// const Todos = mongoose.model("tasks", todoSchema);

// findTodos = () => {
//   return Todos.find({});
// };

// module.exports = {
//   findTodos,
//   saveTodos
// };