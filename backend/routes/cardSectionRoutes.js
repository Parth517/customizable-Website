import express from "express"
import Card from '../Models/cardSection.js'
const router =express.Router()

router.get('/',async(req,res)=>{
    try {
        const cards=await Card.find();
        res.json(cards)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

export default router