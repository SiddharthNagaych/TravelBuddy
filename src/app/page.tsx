"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  const image = "/main.jpeg"; // Use a single image
  const heading = "Finding a Travel Partner";
  const description = "Connect with like-minded travelers and explore amazing journeys together.";

  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={image} alt="Travel Partner" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">{heading}</h1>
          <p className="text-lg mb-6">{description}</p>
          <Link href="/travel">
          <button
            onClick={() => console.log("Get Started")}
            className="bg-[#71503A] text-white py-2 px-4 rounded"
            >
            Get Started
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
