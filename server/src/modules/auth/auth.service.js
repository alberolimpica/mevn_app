const User = require("./auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        password: hashedPassword,
    });

    await newUser.save();
}

async function loginUser(username, password) {
    console.log("login");
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error("Usuario no encontrado");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign({ userId: user._id }, "secretKey", { expiresIn: "1h" });

    return token;
}

module.exports = {
    registerUser,
    loginUser,
};
