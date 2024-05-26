import express from 'express';
import Section from '../Models/sectionModel.js';

const router = express.Router();

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const section = await Section.findByIdAndDelete(id);

    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }

    res.status(200).json({ message: 'Section deleted successfully' });
  } catch (error) {
    console.error('Error deleting section:', error);
    res.status(500).json({ message: 'An error occurred while deleting the section' });
  }
});

export default router;
