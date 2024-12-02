import { Schema, model, models } from "mongoose";

// Define the schema for the user entry
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  currentDestination: {
    type: String,
    required: true,
  },
  travelingTo: {
    type: String,
    required: true,
  },
  sex: {
    type: String, // 'Male', 'Female', or other options
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Use existing User model or create a new one
const User = models.User || model("User", userSchema);

export default User;
