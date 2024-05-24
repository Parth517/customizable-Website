import express from "express";
import Image from "../Models/imageModel.js";

const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const { url, label, caption } = req.body;
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    image.url = url;
    image.label = label;
    image.caption = caption;

    const updatedImage = await image.save();
    res.json(updatedImage);
  } catch (error) {
    console.error("Error updating image:", error);
    res.status(500).json({ message: "An error occurred while updating the image" });
  }
});

export default router;
