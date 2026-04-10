const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  time: String,
  userId: String,
  isCompleted: { type: Boolean, default: false },
priority: { type: String, default: "low" }
});

module.exports = mongoose.model("Task", taskSchema);