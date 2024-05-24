import express from 'express'
import Section from '../Models/sectionModel.js';
const router=express.Router();

router.get('/', async (req, res) => {
    try {
        const sections = await Section.find();
        res.json(sections);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;