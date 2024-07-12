const express = require("express");
const router = express.Router();
const authService = require("./auth.service"); // Importa el módulo de servicios

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    await authService.registerUser(username, password);

    res.status(201).send('Correctly registered');
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authService.loginUser(username, password);

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
