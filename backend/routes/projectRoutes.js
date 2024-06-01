import express from 'express';
const router = express.Router();
import project from '../Models/ProjectModels.js'

router.get('/',async(req,res)=>{
    try {
        const projectImgs=await project.find()
        res.json(projectImgs)
    } catch (error) {
        res.status(500).json({message:error.message})

    }
})

export default router;