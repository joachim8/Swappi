const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET_KEY = '011154545';

// Middleware d'authentification
function authMiddleware(req, res, next) {
    // V�rification du token
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        req.userId = decoded.userId;
        next();
    });
}

module.exports = authMiddleware;
