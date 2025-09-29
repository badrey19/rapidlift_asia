import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center font-bold text-xl text-blue-600">
            <Link href="/">RapidLift Asia</Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/#fleet" className="hover:text-blue-600">Armada</Link>
            <Link href="/booking" className="hover:text-blue-600">Booking</Link>
            <Link href="/about" className="hover:text-blue-600">Tentang</Link>
            <Link href="/contact" className="hover:text-blue-600">Kontak</Link>
          </div>

          {/* Menu Mobile Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            <Link href="/fleet" className="block hover:text-blue-600">Armada</Link>
            <Link href="/booking" className="block hover:text-blue-600">Booking</Link>
            <Link href="/about" className="block hover:text-blue-600">Tentang</Link>
            <Link href="/contact" className="block hover:text-blue-600">Kontak</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
