import express from 'express';
const router = express.Router();
import bgCard from "../Models/bgCardsModel.js"

router.get('/',async(req,res)=>{
    try {
        const bgCards=await bgCard.find();
        res.json(bgCards)
    } catch (error) {
        res.status(500).json({message:error.message})

    }
})

export default router;