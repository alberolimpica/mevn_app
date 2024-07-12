const express = require("express");
const router = express.Router();
const authService = require("./auth.service");

router.get("/", async (req, res) => {
  res.json({ text: "Hola" });
});

router.post("/register", async (req, res, next) => {
  console.log("register");
  try {
    const { username, password } = req.body;
    const newUser = await authService.registerUser(username, password);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  console.log("login");
  try {
    const { username, password } = req.body;
    const token = await authService.loginUser(username, password);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
