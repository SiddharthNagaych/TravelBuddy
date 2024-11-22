import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white z-10 shadow-md">
      <div className="flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <img src="/logo1.webp" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {["Home", "About", "Contact", "Services", "Entries", "Buddies"].map((item) => (
            <div
              key={item}
              className="text-black hover:bg-[#71503A] hover:text-white rounded cursor-pointer px-4 py-2"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
