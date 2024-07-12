const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { versionKey: false },
);

module.exports = mongoose.model("user-auth", User);
