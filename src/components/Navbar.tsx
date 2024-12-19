import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white z-10 shadow-md">
      <div className="flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-black hover:bg-[#71503A] hover:text-white rounded px-4 py-2"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-black hover:bg-[#71503A] hover:text-white rounded px-4 py-2"
          >
            Contact
          </Link>
          <Link
            href="/travel"
            className="text-black hover:bg-[#71503A] hover:text-white rounded px-4 py-2"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-black hover:bg-[#71503A] hover:text-white rounded px-4 py-2"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
