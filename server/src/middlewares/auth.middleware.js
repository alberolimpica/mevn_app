const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send('Acceso no autorizado');
    }

    jwt.verify(token, 'secretKey', (error, user) => {
        if (error) {
            return res.status(403).send('Token inválido');
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
