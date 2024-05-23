import express from 'express';
import bcrypt from 'bcryptjs';
import Admin from '../Models/AdminUser.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    console.log('Login route hit'); // Check if this log appears
    console.log('Request body:', req.body); // Log the request body

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(400).json({ msg: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid username or password' });
        }

        res.json({ msg: 'Login successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

export default router;