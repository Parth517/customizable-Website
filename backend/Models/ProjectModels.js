import mongoose from "mongoose";

const projectSchema=new mongoose.Schema({
    url1:String,
    url2:String,
    url3:String,
    url4:String,
    heading1:String,
    heading2:String
})

const project=mongoose.model("project",projectSchema)

export default project;