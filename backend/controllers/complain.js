import cloudinary from "../config/cloudinary.js"; // Import the Cloudinary configuration
import Complain from "../models/Complain.js";
import { StatusCodes } from "http-status-codes";

export const createComplain = async (req, res) => {
  console.log(req.body);
  const { companyName, email, name, phone, token, isAnonymous } = req.body;
  if (!companyName || !token || isAnonymous) {
    throw new Error("Invalid credentials");
  }
  const documents = req.files;
  try {
    if (isAnonymous === true) {
      const newComplain = {
        companyName: companyName,
        companyId: "123",
        createdBy: token.id,
        documents: documents, // cloudinary ayega
      };
      const complain = await Complain.create(newComplain);
      res.status(StatusCodes.CREATED).json({ complain });
    } else {
      if (!email || !name || !phone) {
        throw new Error("Invalid credentials");
      }
      const newComplain = {
        companyName: companyName,
        companyId: "123",
        email: email,
        name: name,
        phone: phone,
        createdBy: userId,
        documents: documents, // cloudinary ayega
      };
      const complain = await Complain.create(newComplain);
      res.status(StatusCodes.CREATED).json({ complain });
    }
  } catch (error) {}
};
