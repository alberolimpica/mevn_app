const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
    todoText: String,
    author: String,
},
    { versionKey: false });


module.exports = mongoose.model("todo", TodosSchema);