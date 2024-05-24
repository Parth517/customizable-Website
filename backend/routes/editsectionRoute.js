import express from "express";
import Section from "../Models/sectionModel.js";

const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const { title, content, image } = req.body;
    const sectionData = await Section.findById(req.params.id);

    if (!sectionData) {
      return res.status(404).json({ message: "Section Not Found" });
    }

    sectionData.title = title;
    sectionData.content = content;
    sectionData.image = image;

    const updatedSection = await sectionData.save();
    res.json(updatedSection);
  } catch (error) {
    console.error("Error updating section", error);
    res.status(500).json({ message: "An error occurred while updating the section" });
  }
});

export default router;
