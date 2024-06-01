import mongoose from "mongoose"

const bgCardScehma=new mongoose.Schema({
    url:String,
    title:String,
    text:String,
})

const bgCard=mongoose.model('bgCard',bgCardScehma)

export default bgCard