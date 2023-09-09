const express = require("express");
const router = express.Router();
const authService = require("./auth.service");

router.get("/", async (req, res) => {
  console.log("hey");
  res.json({ text: "Hola" });
});

router.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await authService.registerUser(username, password);
    res.status(201).send("Registrado correctamente");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    console.log("HIA");
    const { username, password } = req.body;
    const token = await authService.loginUser(username, password);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
