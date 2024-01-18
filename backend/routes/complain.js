import express from "express";

const router = express.Router();
import {
  createComplain,
  getAllComplain,
  getSingleComplain,
} from "../controllers/complain.js";

router.post("/createComplain", createComplain);
router.post("/getAllComplain", getAllComplain);
router.get("/getSingleComplain", getSingleComplain);

export default router;
