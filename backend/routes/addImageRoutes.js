import express from 'express';
const router = express.Router();
import Image from '../Models/imageModel.js';
import dotenv from 'dotenv';

dotenv.config();

router.post('/:id', async (req, res) => {
  const { url, label, caption } = req.body;
  const { id } = req.params;

  if (!url || !label || !caption) {
    return res.status(400).json({ message: 'URL, label, and caption are required.' });
  }

  try {
    const newImage = new Image({
      url,
      label,
      caption,
    });

    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    console.error("Error inserting image:", error);
    res.status(500).json({ message: "An error occurred while inserting the image." });
  }
});

export default router;
