import cloudinary from "../config/cloudinary.js"; // Import the Cloudinary configuration
import Complain from "../models/Complain.js";
import { StatusCodes } from "http-status-codes";
import Company from "../models/Company.js";

import axios from "axios";

export const createComplain = async (req, res) => {
  console.log(req.body);
  const {
    companyName,
    email,
    name,
    phone,
    createdBy,
    isAnonymous,
    description,
    preferedLanguage,
    preferedContactMethod,
    pinataIPFS,
  } = req.body;

  if (
    !companyName ||
    !createdBy ||
    isAnonymous ||
    !preferedLanguage ||
    !preferedContactMethod
  ) {
    throw new Error("Invalid credentials");
  }

  try {
    const company = await Company.findOne({
      companyName: { $regex: new RegExp(companyName, "i") },
    });

    if (!company) {
      throw new Error("Invalid company Name");
    }

    let complainData = null;

    if (isAnonymous === true) {
      // pinataIPFS = "https://ipfs.io/ipfs/" + pinataIPFS;
      complainData = {
        companyName: companyName,
        companyId: company._id,
        createdBy: createdBy,
        description: description,
        pinataIPFS: pinataIPFS,
        preferedLanguage: preferedLanguage,
        preferedContactMethod: preferedContactMethod,
      };
    } else {
      if (!email || !name || !phone) {
        throw new Error("Invalid credentials");
      }
      complainData = {
        companyName: companyName,
        companyId: company._id,
        email: email,
        name: name,
        phone: phone,
        createdBy: createdBy,
        description: description,
        pinataIPFS: pinataIPFS,
        preferedLanguage: preferedLanguage,
        preferedContactMethod: preferedContactMethod,
      };
    }

    const flaskApiResponse = await axios.post('http://localhost:5000/classifyDept/', {
      input: description,  // Provide the appropriate input data
      depts: company.departments,  // Provide the appropriate departments data
      pinataIPFS: pinataIPFS,  // Assuming you want to include pinataIPFS in the request
    });
    console.log(flaskApiResponse.data)

    // Extract relevant data from the Flask API response
    const flaskApiData = flaskApiResponse.data.result;

    // Merge the data from Flask API with the complainData
    Object.assign(complainData, {
      department: flaskApiData.deptSelected,
      keywords: flaskApiData.keywords,
    });

    // Create a Complain record
    const complain = await Complain.create(complainData);

    res.status(201).json({ complain });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllComplain = async (req, res) => {
  const { id } = req.body;
  try {
    const complains = await Complain.find({ createdBy: id });
    if (!complains) {
      throw new Error("Invalid user id");
    }
    res.status(200).json({ complains });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleComplain = async (req, res) => {
  const { complainId } = req.body;
  try {
    const complain = await Complain.find({ _id: complainId });
    if (!complain) {
      throw new Error("Invalid Complain ID");
    }
    res.status(200).json({ complain });
  } catch (error) {
    console.log(error);
  }
};
