import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const connectDB = async () => {
  // Check the current state of the database connection
  const connectionState = mongoose.connection.readyState;

  // If the connection is already established, no need to connect again
  if (connectionState === 1) {
    console.log("DB connection already established");
    return;
  }

  // If we are in the process of connecting, don't attempt to connect again
  if (connectionState === 2) {
    console.log("Already connecting to DB");
    return;
  }

  try {
    // Connect to the database
    await mongoose.connect(MONGODB_URI, {
      dbName: "travelbuddy", // Specify the database name
      bufferCommands: false, // Disable buffering of commands when disconnected
    });
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB", error);
    throw new Error("Error connecting to DB");
  }
};

// Use a global variable in development to preserve the database connection across hot reloads
if (process.env.NODE_ENV === "development") {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected in development mode");
  });
}

export default connectDB;
