const Todo = require("./todos.model");

async function getAllTodos() {
  return await Todo.find();
}

async function createTodo(todoData) {
  const newTodo = new Todo(todoData);
  return await newTodo.save();
}

async function getTodoById(id) {
  return await Todo.findById(id);
}

async function deleteTodoById(id) {
  return await Todo.findByIdAndDelete(id);
}

async function updateTodoById(id, newData) {
  return await Todo.findOneAndUpdate(
    { _id: id },
    { $set: newData },
    { new: true },
  );
}

module.exports = {
  getAllTodos,
  createTodo,
  getTodoById,
  deleteTodoById,
  updateTodoById,
};
