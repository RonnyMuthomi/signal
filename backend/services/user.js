const User = require('../model/signup');

async function getUsers() {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        console.error('Error fetching users:', error.message);
        throw new Error('Failed to fetch users');
    }
}

module.exports = { getUsers };