import { useState, useEffect } from "react";
import Link from "next/link";

interface SliderProps {
  images: string[];
}

export default function Slider({ images }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 64px)" }}>
      {/* Images */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      {/* Get Started Button */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <Link href="/travel" passHref>
          <button className="bg-[#71503A] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#5a3e2d] transition-colors">
            Get Started
          </button>
        </Link>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-[#71503A]" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
