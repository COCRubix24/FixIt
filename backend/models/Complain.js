import mongoose from "mongoose";

const ComplainSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      unique: true,
      required: true,
    },
    companyId: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
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
    documents: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Complain", ComplainSchema);
