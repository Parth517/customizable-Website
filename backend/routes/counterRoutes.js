import express from 'express';
const router=express.Router();
import Counter from '../Models/counterModel.js';

router.get('/',async(req,res)=>{
    try {
        const counters=await Counter.findOne();
        res.json(counters)
    } catch (error) {
        res.status(500).json({message:error.message})

    }
})

export default router;