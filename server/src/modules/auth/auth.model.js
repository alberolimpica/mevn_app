const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
},
    { versionKey: false });


module.exports = mongoose.model("user-auth", UserSchema);