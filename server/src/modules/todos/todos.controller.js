const express = require("express");
const router = express.Router();
const todosService = require("./todos.service");

router.get("/", async (req, res, next) => {
  try {
    const todos = await todosService.getAllTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    console.log("Create TODO");
    const savedTodo = await todosService.createTodo({
      todoText: req.body.todoText,
      author: req.body.author,
    });
    res.json(savedTodo);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const todo = await todosService.getTodoById(req.params.id);
    res.json(todo);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const todo = await todosService.deleteTodoById(req.params.id);
    res.json(todo);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const todo = await todosService.updateTodoById(req.params.id, req.body);
    res.json(todo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
