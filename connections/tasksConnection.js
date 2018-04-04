const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = "mongodb://127.0.0.1/todo";
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);

db.on("error", console.error.bind(console, "MongoDB connection error: "));

const data = {
  // taskID: 2,
  userID: 2,
  title: "To code",
  description: "Code",
  priority: "Low",
  dueDate: "2018-12-22T08:15:00Z",
  createdDate: new Date(),
  completedDate: "2018-11-22T08:15:00Z",
  completed: false
};

const todoSchema = new Schema({
  // taskID: Number,
  userID: Number,
  title: String,
  description: String,
  priority: String,
  dueDate: Date,
  createdDate: Date,
  completedDate: Date,
  completed: Boolean
});
const Task = mongoose.model("tasks", todoSchema);

findTasks = () => {
  return Task.find({});
};

saveTasks = newTask => {
  console.log("NEW TASK", newTask.taskData);
  const dataToSave = new Task(newTask.taskData);
  return new Promise((resolve, reject) => {
    dataToSave.save(err => {
      if (err) {
        reject(err);
      } else {
        resolve(200);
      }
      reject(err);
    });
  });
};

deleteTasks = () => {
  Task.findByIdAndRemove(req.params.taskID, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};

module.exports = {
  findTasks,
  saveTasks,
  deleteTasks
};
