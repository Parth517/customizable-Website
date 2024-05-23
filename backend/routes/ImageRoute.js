import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    url: String,
    label: String,
    caption: String
});

const Image = mongoose.model('Image', imageSchema);



router.get('/', async(req, res) => {
    try{
        const images=await Image.find();
        res.json(images);
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

export default router;