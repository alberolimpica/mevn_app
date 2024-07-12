const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

router.post('/', async (req, res) => {
    const { fileName, locale } = req.body;
    const filePath = path.join(__dirname, `../../translations/${fileName}/${fileName}-${locale}.json`);

    try {
        const translations = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(translations));
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;
