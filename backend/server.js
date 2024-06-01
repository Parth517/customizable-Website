import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import ImageRoute from './routes/ImageRoute.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import sectionRoutes from './routes/sectionRoutes.js';
import authRoutes from './routes/authRoutes.js';
import editImagesRoutes from './routes/editImageRoutes.js';
import editsectionRoutes from './routes/editsectionRoute.js';
import addImagesRoutes from './routes/addImageRoutes.js';
import addSectionRoutes from './routes/addSectionRoutes.js'
import cardSectionRoutes from './routes/cardSectionRoutes.js'
import addCardRoutes from './routes/addCardRoutes.js'
import editCardRoutes from './routes/editCardRoutes.js'
import deleteCardRoutes from './routes/deleteCardRoutes.js'
import deleteSectionRoutes from './routes/deleteSectionRoutes.js'; 
import deleteImageRoutes from './routes/DeleteImageRoutes.js';
import editAdRoutes from './routes/editAdRoute.js';
import adRoutes from './routes/adRoutes.js';
import bgCard from './routes/bgCardRoutes.js';
import editBgCardRoutes from './routes/editBgCardRoutes.js';
import counterRoutes from './routes/counterRoutes.js'

dotenv.config();

connectDB();

const port =process.env.PORT ||5000; 
const app=express()
app.use(cors());

app.use(bodyParser.json()); // to parse application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("Api is running")
})

app.use('/api/auth', authRoutes);

app.use('/api/images',ImageRoute);

app.use('/api/edit-images',editImagesRoutes)

app.use('/api/section',sectionRoutes);

app.use('/api/text',adRoutes);

app.use('/api/bgCard',bgCard);

app.use('/api/counter',counterRoutes);

app.use('/api/add-images',addImagesRoutes);

app.use('/api/add-section',addSectionRoutes);

app.use('/api/edit-section',editsectionRoutes)

app.use('/api/cards',cardSectionRoutes);

app.use('/api/add-cards',addCardRoutes);

app.use('/api/edit-cards',editCardRoutes);

app.use('/api/delete-cards', deleteCardRoutes);

app.use('/api/delete-section', deleteSectionRoutes);

app.use('/api/delete-images', deleteImageRoutes);

app.use('/api/edit-text', editAdRoutes);

app.use('/api/edit-bgCard', editBgCardRoutes);


app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}/`);
})

