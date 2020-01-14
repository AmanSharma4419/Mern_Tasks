// All Requires
var Task = require("../models/taskSchema");

// Controller For Assigining The Task
function taskAssignment(req, res, next) {
  if (!req.body.task || req.body.date) {
    return res.status(200).json("Check Credentials");
  }
  Task.create(req.body, (err, task) => {
    if (err) return next(err);
    return res.status(200).json({ task: task });
  });
}
// Exporting the controller
module.exports = { taskAssignment };
