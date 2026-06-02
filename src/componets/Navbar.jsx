"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [serviceOpen, setServiceOpen] = useState(false);

const navLinks = [
{ name: "Home", href: "/" },
{ name: "Projects", href: "/projects" },
// { name: "About Us", href: "/about-us" },
{ name: "Contact Us", href: "/contact-us" },
];

return ( <header className="fixed top-0 left-0 w-full z-50"> <nav className="backdrop-blur-md bg-black/20 border-b border-white/10 shadow-lg"> <div className="max-w-7xl mx-auto px-6 lg:px-10"> <div className="flex items-center justify-between h-20">


        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold">
              <span className="text-yellow-400">
                Nitin Electricals
              </span>
            </span>

            <span className="text-white text-sm tracking-wider uppercase">
              Contractor
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <Link
            href="/"
            className="text-white font-medium hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <button className="flex items-center gap-1 text-white font-medium hover:text-yellow-400 transition">
              Services
              <ChevronDown size={18} />
            </button>

            <div
              className={`absolute top-10 left-0 w-64 rounded-xl bg-white shadow-2xl overflow-hidden transition-all duration-300 ${
                serviceOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              <Link
                href="/services/wiring"
                className="block px-5 py-3 hover:bg-gray-100"
              >
                Electrical Wiring
              </Link>

              <Link
                href="/services/lighting"
                className="block px-5 py-3 hover:bg-gray-100"
              >
                Smart Lighting
              </Link>

              <Link
                href="/services/panels"
                className="block px-5 py-3 hover:bg-gray-100"
              >
                Panel Installation
              </Link>

              <Link
                href="/services/maintenance"
                className="block px-5 py-3 hover:bg-gray-100"
              >
                Maintenance
              </Link>
            </div>
          </div> */}

          {navLinks.slice(1).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white font-medium hover:text-yellow-400 transition duration-300"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div
      className={`lg:hidden overflow-hidden transition-all duration-500 ${
        isOpen ? "max-h-[500px]" : "max-h-0"
      }`}
    >
      <div className="bg-black/95 backdrop-blur-md px-6 py-5 space-y-4">
        <Link
          href="/"
          className="block text-white hover:text-yellow-400"
        >
          Home
        </Link>

        {/* <Link
          href="/services"
          className="block text-white hover:text-yellow-400"
        >
          Services
        </Link> */}

        <Link
          href="/projects"
          className="block text-white hover:text-yellow-400"
        >
          Projects
        </Link>

        {/* <Link
          href="/about"
          className="block text-white hover:text-yellow-400"
        >
          About Us
        </Link> */}

        <Link
          href="/contact"
          className="block text-white hover:text-yellow-400"
        >
          Contact Us
        </Link>

        <Link
          href="/contact"
          className="block text-center bg-yellow-400 text-black py-3 rounded-full font-semibold"
        >
          Get Quote
        </Link>
      </div>
    </div>
  </nav>
</header>


);
}
