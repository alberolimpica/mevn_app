const express = require("express");
const router = express.Router();
const User = require("./auth.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get("/", async (req, res) => {
  res.json({ text: 'Hola' });
});

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send('Registrado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el registro');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).send('Usuario no encontrado');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).send('Contraseña incorrecta');
    }

    const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el inicio de sesión');
  }
});

module.exports = router;