import express from "express"
const router=express.Router()
import newCard from "../Models/newCard.js"

router.get('/',async(req,res)=>{
    try {
        const newCards=await newCard.find()
        res.json(newCards)
    } catch (error) {
        
    }
})

export default router;