import mongoose from "mongoose";

const ComplainSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      // unique: true,
      required: true,
    },
    companyId: {
      type: String,
      // unique: true,
      required: true,
    },
    email: {
      type: String,
      // unique: true,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    pinataIPFS: {
      type: String,
    },
    preferedLanguage: {
      type: String,
      enum: ["English", "Spanish"],
      required: true,
    },
    preferedContactMethod: {
      type: String,
      enum: ["Web", "Phone", "Chat"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Complain", ComplainSchema);
