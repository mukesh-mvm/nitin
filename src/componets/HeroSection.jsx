"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
{
image: "/images/slide1.jpg",
title: "Electrical setup",
description:
"Safe and professional internal electrical wiring for new and existing",
},
{
image: "/images/slide2.jpg",
title: "Smart Lighting Setup",
description:
"Upgrade your home with energy-efficient smart lighting systems.",
},
{
image: "/images/slide3.jpg",
title: "Home Theater setup",
description:
"Complete audio-visual wiring for a premium cinematic experience",
},
{
image: "/images/slide1.jpg",
title: "Custom Electrical Projects",
description:
"Tailored electrical solutions designed for your unique needs and lifestyle.",
},
];

export default function CarouselHero() {
const [current, setCurrent] = useState(0);

const nextSlide = () => {
setCurrent((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
};

return ( <section className="relative h-[70vh] md:h-screen overflow-hidden">
{/* Background Image */} <div className="absolute inset-0"> <Image
       src={slides[current].image}
       alt={slides[current].title}
       fill
       priority
       sizes="100vw"
       className="object-cover"
     />

```
    <div className="absolute inset-0 bg-black/50" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative z-10 flex h-full items-center px-6 md:px-16">
    <div className="max-w-2xl text-white">
      <h1 className="text-4xl md:text-6xl font-bold">
        {slides[current].title}
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-200">
        {slides[current].description}
      </p>

      <Link
        href="/contact"
        className="inline-block mt-8 px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
      >
        Contact Us
      </Link>
    </div>
  </div>

  {/* Controls */}
  <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
    <button
      type="button"
      onClick={prevSlide}
      className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30"
    >
      <ChevronLeft size={24} />
    </button>

    <div className="flex gap-2">
      {slides.map((slide, index) => (
        <button
          key={slide.title}
          type="button"
          onClick={() => setCurrent(index)}
          className={`w-3 h-3 rounded-full transition ${
            current === index
              ? "bg-yellow-400"
              : "bg-white/50 hover:bg-white"
          }`}
        />
      ))}
    </div>

    <button
      type="button"
      onClick={nextSlide}
      className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30"
    >
      <ChevronRight size={24} />
    </button>
  </div>
</section>


);
}
