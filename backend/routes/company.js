import express from "express";

const router = express.Router();
import { registerCompany } from "../controllers/company.js";

router.post("/registerCompany", registerCompany);

export default router;
