"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Ref to calculate exact height for smooth height transitions
  const mobileMenuRef = useRef(null);

  // AUTOMATICALLY CLOSE NAVBAR ON PAGE CHANGE
  // This watches the Next.js pathname. When it changes, the menu rolls up instantly.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-md bg-black/20 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Nitin Electricals"
                className="h-10 w-10 object-contain rounded-lg border border-white/10 group-hover:border-yellow-400/40 transition duration-300"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-yellow-400 leading-none">
                  Nitin Electricals
                </span>
                <span className="text-white/80 text-xs tracking-wider lowercase mt-1 font-medium">
                  nitinelectricals.com
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <Link
                href="/"
                className="text-white font-medium hover:text-yellow-400 transition duration-300"
              >
                Home
              </Link>

              {/* Other main links */}
              {mainLinks.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white font-medium hover:text-yellow-400 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact-us"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md shadow-yellow-400/20"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 focus:outline-none transition-transform duration-200 active:scale-95"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Down Drawer Container */}
        <div
          ref={mobileMenuRef}
          style={{
            maxHeight: isOpen 
              ? `${mobileMenuRef.current?.scrollHeight}px` 
              : "0px"
          }}
          className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-white/5 transition-all duration-500 ease-in-out"
        >
          <div className="px-6 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            <Link
              href="/"
              className="block text-lg font-medium text-white hover:text-yellow-400 transition duration-200"
            >
              Home
            </Link>

            {/* Remaining Nav Links */}
            {mainLinks.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-lg font-medium text-white hover:text-yellow-400 transition duration-200"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact-us"
              className="block text-center bg-yellow-400 text-black py-3.5 rounded-full font-bold mt-6 shadow-lg shadow-yellow-400/10 hover:bg-yellow-500 transition duration-200"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}