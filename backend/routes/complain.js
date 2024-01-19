import express from "express";

const router = express.Router();
import {
  createComplain,
  getAllComplain,
  getSingleComplain,
  updateSingleComplain,
  getAllCompanyComplain,
  dashboardB
} from "../controllers/complain.js";

router.post("/createComplain", createComplain);
router.post("/getAllComplain", getAllComplain);
router.get("/getSingleComplain", getSingleComplain);
router.patch("/updateSingleComplain", updateSingleComplain);

router.post("/getAllCompanyComplain", getAllCompanyComplain);

router.post("/dashboardB", dashboardB);

export default router;
