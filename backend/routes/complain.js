import express from "express";

const router = express.Router();
import { createComplain } from "../controllers/complain.js";

router.post("/createComplain", createComplain);

export default router;
