const mongoose = require("mongoose");
const TaskSchema = require("../schemas/taskSchema");
const TaskModel = mongoose.model("tasks", TaskSchema);

module.exports = { TaskModel };
