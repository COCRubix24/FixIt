import express from "express";
import { extraction } from "../controllers/ocrAi.js";
const router=express.Router();

import multer from 'multer';

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      // Specify the destination directory where files will be stored
      cb(null, 'uploads/'); // Change 'uploads/' to your desired directory
   },
   filename: function (req, file, cb) {
      // Define how the file should be named
      cb(null, file.originalname); // You can customize the file naming logic
   },
});

const upload = multer({ storage: storage });

router.post("/extract", upload.single('receipt'), extraction);

export default router;