import mongoose from "mongoose";

const projectSchema=new mongoose({
    url1:String,
    url2:String,
    url3:String,
    url4:String
})

const project=mongoose.model("project",projectSchema)

export default project;