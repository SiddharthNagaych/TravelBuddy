// app/api/findPartner/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/db"; // Import the DB connection utility
import User from "@/lib/models/user"; // Import the User model

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const currentDestination = url.searchParams.get("currentDestination");
  const travelingTo = url.searchParams.get("travelingTo");

  if (!currentDestination || !travelingTo) {
    return NextResponse.json(
      { message: "Missing required parameters." },
      { status: 400 }
    );
  }

  try {
    await connectDB(); // Ensure DB is connected

    // Search for users based on currentDestination and travelingTo
    const partners = await User.find({
      currentDestination: currentDestination,
      travelingTo: travelingTo,
    }).select("name contactNumber"); // Only return name and contact number

    if (partners.length === 0) {
      return NextResponse.json({ message: "No partners found." }, { status: 404 });
    }

    return NextResponse.json(partners);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error finding partners." }, { status: 500 });
  }
};
