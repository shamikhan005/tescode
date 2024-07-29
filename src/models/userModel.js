import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide an username"],
    unique: true,
    minlength: [3, "username must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: [true, "provide an email"],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "please provide a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    minLength: [6, "password must be at least 6 characters long"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
