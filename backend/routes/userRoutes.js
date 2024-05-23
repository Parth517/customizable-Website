import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import auth from '../middleware/auth.js';
import dotenv from 'dotenv';
import User from '../Models/userModel.js';

dotenv.config();
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).send('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.send({ token });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

router.get('/protected', auth, (req, res) => {
    res.send('This is a protected route');
});

export default router;