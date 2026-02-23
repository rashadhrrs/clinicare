"use client";

import { useState } from "react";
import PlaceholderImage from "./ui/PlaceholderImage";
import { Logo } from "./ui/Logo";
import Avatar from "./ui/Avatar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Beranda",
    "Layanan",
    "Cari Klinik",
    "Tentang Kami",
    "Blog",
    "Hubungi Kami",
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="px-24 py-7">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`transition-colors ${
                  index === 0
                    ? "font-bold text-brand"
                    : "text-neutral-900 hover:text-brand"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <Avatar
              width={49.27}
              height={49.27}
              alt="Profile"
              className="rounded-full"
              backgroundColor="bg-teal-100"
              textColor="text-teal-600"
              src="https://i.pravatar.cc/150?img=60"
            />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-teal-500"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    index === 0
                      ? "text-teal-500 bg-teal-50"
                      : "text-gray-600 hover:text-teal-500 hover:bg-teal-50"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
