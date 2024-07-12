require('dotenv').config({ path: '.env' });


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const routes = require("./src/routes");

//create express app
const app = express();
dotenv.config();

app.use(function (req, res, next) {
    //Setting CORS to avoid errors
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const uri = process.env.USE_LOCAL_DB === 'true' ? process.env.MONGODB_LOCAL_URI.replace('${DB_NAME}', process.env.DB_NAME) : process.env.MONGODB_ATLAS_URI;


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
        console.log("MongoDB Failed");
        console.log("Error: ", err);
    });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Hubo un error en el servidor." });
});

app.use(bodyParser.json());

app.use("/", routes);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
