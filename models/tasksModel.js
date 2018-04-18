const TaskSchema = require("../schemas/taskSchema");
const Task = mongoose.model("tasks", TaskSchema.taskSchema);

module.exports = { taskModel };
