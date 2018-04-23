const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  //   userID: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  priority: String,
  // default: ["Lowest", "Low", "Medium", "High", "Highest"]

  dueDate: Date,
  createdDate: Date,
  completedDate: Date,
  completed: Boolean
});
const TaskModel = mongoose.model("tasks", TaskSchema);

module.exports = { TaskModel };
