const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = "mongodb://127.0.0.1/todo";
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);
db.on("error", console.error.bind(console, "MongoDB connection error: "));

// const Schema = require("../schemas/taskSchema")

const taskSchema = new Schema({
  // userID: Schema.Types.ObjectId,
  userID: Number,
  title: String,
  description: String,
  priority: String,
  dueDate: Date,
  createdDate: Date,
  completedDate: Date,
  completed: Boolean
});
const Task = mongoose.model("tasks", taskSchema);

findTasks = () => {
  return Task.find({});
};

saveTasks = newTask => {
  console.log("NEW TASK", newTask.taskData);
  const taskToSave = new Task(newTask.taskData);
  return new Promise((resolve, reject) => {
    taskToSave.save(err => {
      if (err) {
        reject(err);
      } else {
        resolve(200);
      }
      reject(err);
    });
  });
};

deleteTasks = taskID => {
  const id = taskID.id;
  return new Promise((resolve, reject) => {
    Task.findByIdAndRemove({ _id: id }, err => {
      if (err) {
        reject(err);
      } else {
        resolve(200);
      }
      reject(err);
    });
  });
};

module.exports = {
  findTasks,
  saveTasks,
  deleteTasks
};
