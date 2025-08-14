// src/app/components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import hook untuk mendapatkan path URL
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Experience", href: "/experience" },
  { name: "Tools", href: "/tools" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="md:fixed md:top-0 md:right-0 md:h-full md:w-20 md:bg-black/50 md:backdrop-blur-sm z-50 md:flex md:flex-col md:items-center md:justify-between md:py-8">
        <button
          onClick={toggleMenu}
          className="fixed top-6 right-6 z-50 text-white hover:text-green-400 transition-colors duration-300 md:static md:top-auto md:right-auto"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <div className="hidden md:block text-white font-bold tracking-widest [writing-mode:vertical-rl]">
          NAVBAR
        </div>
        <div className="hidden md:block"></div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full bg-black shadow-lg z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 sm:w-80`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="my-6">
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className={`text-2xl font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-green-400"
                        : "text-white hover:text-green-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
