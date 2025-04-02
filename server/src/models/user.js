import mongoose, { Schema } from "mongoose";


const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,

  },
  last_name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: String,
    required: true,
    unique: true,
  },
  regno: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["STUDENT", "TEACHERS", "ADMIN"],
    required: true,
  },
});

export default mongoose.model("User", userSchema);
