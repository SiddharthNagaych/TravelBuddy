"use client";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";

export default function HomePage() {
  const images = [
    "/images1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
  ];

  return (
    <div>
      <Navbar />
      <Slider images={images} />
    </div>
  );
}
