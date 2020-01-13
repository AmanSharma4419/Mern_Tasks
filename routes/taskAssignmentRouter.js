// All Requires
const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskControllers");

// Route for assignment of tasks
router.post("/task-assignment", TaskController.taskAssignment);

module.exports = router;
