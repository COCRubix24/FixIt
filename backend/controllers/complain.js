import cloudinary from "../config/cloudinary.js"; // Import the Cloudinary configuration
import Complain from "../models/Complain.js";
import { StatusCodes } from "http-status-codes";

export const createComplain = async (req, res) => {
  console.log(req.body);
  const {
    companyName,
    email,
    name,
    phone,
    id,
    isAnonymous,
    preferedLanguage,
    preferedContactMethod,
    pinataIPFS,
  } = req.body;
  if (
    !companyName ||
    !id ||
    isAnonymous ||
    !preferedLanguage ||
    !preferedContactMethod
  ) {
    throw new Error("Invalid credentials");
  }
  try {
    if (isAnonymous === true) {
      pinataIPFS = "https://ipfs.io/ipfs/" + pinataIPFS;
      const newComplain = {
        companyName: companyName,
        companyId: "123",
        createdBy: id,
        pinataIPFS: pinataIPFS,
        preferedLanguage: preferedLanguage,
        preferedContactMethod: preferedContactMethod,
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
        createdBy: id,
        pinataIPFS: pinataIPFS,
        preferedLanguage: preferedLanguage,
        preferedContactMethod: preferedContactMethod,
      };
      const complain = await Complain.create(newComplain);
      res.status(StatusCodes.CREATED).json({ complain });
    }
  } catch (error) {}
};
