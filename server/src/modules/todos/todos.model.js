const mongoose = require("mongoose");

const Todo = new mongoose.Schema(
  {
    todoText: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("todo", Todo);
