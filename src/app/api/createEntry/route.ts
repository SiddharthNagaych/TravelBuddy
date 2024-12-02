import connectDB from "@/lib/db"; // Import the DB connection utility
import User from "@/lib/models/user"; // Import the User model
import { NextResponse } from "next/server"; // Import NextResponse for returning responses

export const POST = async (request: Request) => {
  try {
    // Parse the request body
    const { name, email, contactNumber, currentDestination, travelingTo, sex, password } = await request.json();

    // Ensure DB is connected
    await connectDB();

    // Create a new user instance
    const user = new User({
      name,
      email,
      contactNumber,
      currentDestination,
      travelingTo,
      sex,
      password,
    });

    // Save the user to the database
    await user.save();

    // Return success response
    return NextResponse.json({ message: "Entry created successfully!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    // Return error response
    return NextResponse.json({ message: "Error creating user entry." }, { status: 500 });
  }
};
