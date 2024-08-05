const authService = require('../services/login');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        // console.log(`Login request received for email: ${email}`);
        const { token, role } = await authService.login(email, password); // Destructure to get role
        res.status(200).json({ token, role }); // Include the role in the response
    } catch (error) {
        console.error('Login failed:', error.message);
        res.status(401).json({ message: error.message });
    }
}


async function refreshToken(req, res) {
    try {
        const { token } = req.body;
        const newToken = await authService.refreshToken(token);
        res.status(200).json({ newToken });
    } catch (error) {
        console.error('Token refresh failed:', error.message);
        res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = { login, refreshToken };