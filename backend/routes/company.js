import express from "express";

const router = express.Router();
import { registerCompany, loginCompany, companyVerification, logout } from "../controllers/company.js";

router.post("/registerCompany", registerCompany);
router.post("/loginCompany", loginCompany);

router.get("/currCompany", companyVerification);
router.get("/logout", logout);

export default router;
