import express from 'express';
const router = express.Router();
import Image from '../Models/imageModel.js';

router.get('/', async(req, res) => {
    try{
        const images=await Image.find();
        res.json(images);
    }catch(error){
        res.status(500).json({message:error.message})
    }
});

export default router;