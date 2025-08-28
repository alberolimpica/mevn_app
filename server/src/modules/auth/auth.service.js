const User = require("./auth.model");
const bcrypt = require("bcrypt");
const { SignJWT } = require('jose');

const getSecret = () => new TextEncoder().encode(process.env.JWT_SECRET || 'secretKey');

async function registerUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        username,
        password: hashedPassword,
    });

    await newUser.save();
}

async function loginUser(username, password) {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error("User not found");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new Error("Incorrect password");
    }

    const secret = getSecret();

    const token = await new SignJWT({ userId: user._id, username: user.username })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secret);

    return token;
}

module.exports = {
    registerUser,
    loginUser,
};
