import express from "express";
const router = express.Router();
import Card from '../Models/cardSection.js';
import dotenv from 'dotenv';

dotenv.config();

router.post("/:id", async (req, res) => {
  const { title, image, content } = req.body;
  const { id } = req.params;

  if (!title || !image || !content) {
    return res.status(400).json({ message: "Title, image, and content are required." });
  }
  try {
    const newCard = new Card({
      title, image, content
    });

    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (error) {
    console.error("Error inserting Section:", error);
    res.status(500).json({ message: "An error occurred while inserting the image." });
  }
});

// Add a DELETE endpoint to delete a card by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCard = await Card.findByIdAndDelete(id);
    if (!deletedCard) {
      return res.status(404).json({ message: "Card not found." });
    }
    res.status(200).json({ message: "Card deleted successfully." });
  } catch (error) {
    console.error("Error deleting card:", error);
    res.status(500).json({ message: "An error occurred while deleting the card." });
  }
});

export default router;
