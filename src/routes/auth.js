const router = require('express').Router();
const pwd = require('../utils/pwd');
const User = require('../models/User');

// POST /api/auth/register
router.post("/register", async (req, res) => {

    const { username, email, password } = req.body;

    const newUser = new User({
        username: username,
        email: email,
        password: pwd.encrypt(password)
    });

    try {
        const user = await newUser.save();
        res.status(201).json({
            id: user.id
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;