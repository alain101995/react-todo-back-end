const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const taskSchema = new Schema({
  // userID: Number,
  userID: Schema.Types.ObjectId,
  title: String,
  description: String,
  priority: String,
  dueDate: Date,
  createdDate: Date,
  completedDate: Date,
  completed: Boolean
});

module.exports = taskSchema;
