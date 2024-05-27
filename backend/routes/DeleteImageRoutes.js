import express from 'express';
import Image from '../Models/imageModel.js';  // Assuming you have an Image model

const router = express.Router();

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Image.findByIdAndDelete(id);

    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ message: 'An error occurred while deleting the image' });
  }
});

export default router;
