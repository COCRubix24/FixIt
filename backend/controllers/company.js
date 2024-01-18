import Company from "../models/Company.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";

export const registerCompany = async (req, res, next) => {
  try {
    const { companyName, email, password, departments } = req.body;

    const existingUser = await Company.findOne({ email });
    if (existingUser) {
      console.log("exist");
      return res
        .status(409)
        .json({ error: "User with this email already exists." });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newCompany = new Company({
      ...req.body,
      password: hash,
    });
    await newCompany.save();
    res.status(200).json({ newCompany });
  } catch (err) {
    next(err);
  }
};
