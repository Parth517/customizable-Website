import express from 'express';
const router = express.Router();
import Ad from '../Models/AdModel.js';

router.get('/',async(req,res)=>{
    try {
        const ads= await Ad.find();
        res.json(ads)
    } catch (error) {
        res.status(500).json({message:error.message})

    }
})
export default router;