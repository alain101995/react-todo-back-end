const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = "mongodb://127.0.0.1/todo";
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);

db.on("error", console.error.bind(console, "MongoDB connection error: "));

const data = {
  taskID: 2,
  userID: 2,
  title: "To code",
  description: "Code",
  dueDate: "2018-12-22T08:15:00Z",
  createdDate: "2017-12-22T08:15:00Z",
  completedDate: "2018-11-22T08:15:00Z",
  completed: false
};

const todoSchema = new Schema({
  todoID: Number,
  userID: Number,
  title: String,
  description: String,
  dueDate: Date,
  createdDate: Date,
  completedDate: Date,
  completed: Boolean
});
const Todos = mongoose.model("tasks", todoSchema);

findTodos = () => {
  return Todos.find({});
};

saveTodos = () => {
  console.log("Data", data);
  return Todos.save({ data });
};

module.exports = {
  findTodos,
  saveTodos
};