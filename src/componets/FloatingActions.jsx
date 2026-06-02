"use client";

import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingActions() {
  const phoneNumber = "+919335561421";
  const whatsappNumber = "919335561421";
  const whatsappMessage = encodeURIComponent("Hello Nitin Electricals, I am interested in your electrical services.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 sm:bottom-8 sm:right-8">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] transition duration-300 focus:outline-none"
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            "0 0 15px 5px rgba(37, 211, 102, 0.5)",
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <FaWhatsapp size={32} />
      </motion.a>

      {/* Phone Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        aria-label="Call Nitin Electricals"
        className="relative flex items-center justify-center w-14 h-14 bg-[#ea580c] text-white rounded-full shadow-lg hover:bg-[#d44f0a] transition duration-300 focus:outline-none"
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            "0 0 15px 5px rgba(234, 88, 12, 0.5)",
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 // offset animation start to pulse alternately
        }}
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <FaPhoneAlt size={22} />
      </motion.a>
    </div>
  );
}
