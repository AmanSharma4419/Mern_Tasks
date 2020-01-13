// All Requires
const mongoose = require("mongoose");

// Extracting The Schema From The Mongoose
const schema = mongoose.Schema;

// Creating The Schema For Admin
const taskSchema = new schema(
  {
    task: {
      type: String,
      required: true
    },
    deadline: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

// Making The Model Of The Schema
const Task = mongoose.model("Task", taskSchema);

// Exporting The Model Of The Schema
module.exports = Task;
