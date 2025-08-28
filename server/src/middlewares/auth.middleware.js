const { jwtVerify } = require('jose');
const getSecret = () => new TextEncoder().encode(process.env.JWT_SECRET || 'secretKey');

const authenticateToken = async (req, res, next) => {
    try {
        const header = req.header('Authorization');
        if (!header) return res.status(401).send('Access not authorized');

        const token = header.startsWith('Bearer ') ? header.slice(7) : header;

        const { payload } = await jwtVerify(token, getSecret(), {
            algorithms: ['HS256'],
        });

        req.user = payload;
        next();
    } catch (err) {
        console.error('JWT verification failed:', err.message);
        return res.status(403).send('Inválid token');
    }
};

module.exports = authenticateToken;
