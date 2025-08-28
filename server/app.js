require('dotenv').config({ path: '.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'HEAD', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['auth-token', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const uri = process.env.USE_LOCAL_DB === 'true'
    ? process.env.MONGODB_LOCAL_URI.replace('${DB_NAME}', process.env.DB_NAME)
    : process.env.MONGODB_ATLAS_URI;

mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB Failed');
        console.error('Error:', err);
    });


app.use('/', routes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Hubo un error en el servidor.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
