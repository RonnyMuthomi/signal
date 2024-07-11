const jwt = require('jsonwebtoken');
const { secretkey } = require('../config/jwtConfig');

function authenticationToken(req, res, next) {
    console.log("Authorization Header:", req.header('Authorization'));
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        console.log("Missing Authorization header");
        return res.status(401).json({ message: 'Unauthorized: Missing token!' });
    }
    const [bearer, token] = authHeader.split(' ');
    console.log("Bearer:", bearer, "Token:", token);
    if (bearer !== 'Bearer' || !token) {
        console.log("Invalid token format");
        return res.status(401).json({ message: 'Unauthorized: Invalid token format' });
    }
    jwt.verify(token, secretkey, (err, user) => {
        if (err) {
            console.log("Token verification error:", err);
            return res.status(403).json({ message: 'Forbidden: Invalid Token' });
        }
        console.log("Token verified, user:", user);
        req.user = user;
        next();
    });
}

function verifyToken(token) {
    return jwt.verify(token, secretkey);
}

module.exports = { authenticationToken, verifyToken };