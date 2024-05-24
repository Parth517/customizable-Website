import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
});

const Section = mongoose.model('Section', sectionSchema);

export default Section;
