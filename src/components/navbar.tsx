"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Servicios", href: "/#servicios" },
  { name: "Equipo", href: "/#equipo" },
  { name: "Contacto", href: "/#contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-500 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/disenosduran.svg" alt="Diseños Duran Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-black">Diseños Duran</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-[#ffd600] transition-colors ${
                pathname === link.href ? "text-[#ffd600]" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.name}`}
                href={link.href}
                className={`block py-2 text-sm font-medium hover:text-[#ffd600] transition-colors ${
                  pathname === link.href ? "text-[#ffd600]" : "text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
