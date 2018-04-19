const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  // userID: mongoose.Schema.Types.ObjectId,
  userID: Number,
  title: String,
  description: String,
  priority: String,
  dueDate: Date,
  createdDate: Date,
  completedDate: Date,
  completed: Boolean
});

module.exports = { TaskSchema };
