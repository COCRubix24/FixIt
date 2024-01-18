import express from "express";

const router = express.Router();
import { registerCompany, loginCompany } from "../controllers/company.js";

router.post("/registerCompany", registerCompany);
router.post("/loginCompany", loginCompany);

export default router;
