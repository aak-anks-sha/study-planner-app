const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middleware/authMiddleware");

// Get tasks
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

// Add task
router.post("/", auth, async (req, res) => {
  const task = new Task({
    title: req.body.title,
    time: req.body.time,
    userId: req.user.id
  });

  await task.save();
  res.send(task);
});

// Delete task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Task Deleted");
});

module.exports = router;