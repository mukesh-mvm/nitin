"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="w-full text-white">

      {/* Hero Section with Background Image */}
      <section
        className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about.png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
          >
            About Nitin Electricals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-lg md:text-xl text-white/90 font-medium"
          >
            Delivering safe, reliable, and energy-efficient electrical solutions
            for residential and commercial spaces with precision and expertise.
          </motion.p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/mission.jpg"
              alt="Our Mission"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              At Nitin Electricals, our mission is to provide top-quality electrical services
              with a focus on safety, innovation, and energy efficiency. From new wiring and
              rewiring to LED lighting and smart home setups, we empower homes and businesses
              to operate safely and efficiently.
            </p>

            <ul className="space-y-4 text-lg font-medium text-gray-200">
              <li>⚡ Ensuring safe and reliable electrical systems</li>
              <li>💡 Promoting energy-efficient lighting solutions</li>
              <li>🔌 Expert installation and maintenance services</li>
              <li>🏢 Tailored solutions for residential and commercial spaces</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise / Team Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
          >
            Our certified electricians bring years of experience and advanced technical skills
            to every project. We pride ourselves on delivering reliable solutions that meet the
            highest standards of safety and efficiency.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Residential Electrical Excellence",
                description:
                  "Delivering custom, state-of-the-art power and automation solutions tailored for modern luxury and everyday home convenience.",
                features: [
                  "Smart home integrations & automation",
                  "Architectural & aesthetic lighting design",
                  "Premium safety audits & rewiring",
                  "Appliance & home theater installations"
                ],
                icon: "/images/Icons/icon1.png",
              },
              {
                title: "Commercial & Industrial Power",
                description:
                  "Providing high-efficiency electrical layouts, safety certifications, and commercial-grade support for enterprise environments.",
                features: [
                  "High-capacity panels & wiring setups",
                  "Energy audits & load management",
                  "UPS & backup generator installations",
                  "Dedicated server room configurations"
                ],
                icon: "/images/Icons/icon2.png",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center text-center bg-gradient-to-b from-gray-900/60 to-black/80 p-10 rounded-3xl border border-white/5 hover:border-yellow-400/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.1)] transition-all duration-300 relative group overflow-hidden"
              >
                {/* Accent glow behind icon */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl group-hover:bg-yellow-400/10 transition-all duration-300" />
                
                {/* Icon wrapper */}
                <motion.div
                  className="w-24 h-24 flex items-center justify-center rounded-2xl bg-yellow-400/5 border border-yellow-500/20 mb-8 overflow-hidden group-hover:border-yellow-400/40 group-hover:bg-yellow-400/10 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={item.icon} alt={item.title} className="w-14 h-14 object-contain" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">{item.title}</h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm">{item.description}</p>
                
                {/* Features checklist */}
                <ul className="text-left w-full space-y-3 border-t border-white/5 pt-6 text-sm text-gray-300">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <span className="text-yellow-400 text-xs">⚡</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;