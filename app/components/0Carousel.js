"use client"; // Necesită pentru App Router din Next.js

import { useEffect, useState } from "react";

export default function Carousel({
  children,
  autoSlide = false,
  autoSlideInterval = 5000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0 aspect-[16/9]">
            {child}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 left-0">
        <div className="flex items-center justify-center gap-3">
          {children.map((_, i) => (
            <div
              key={i}
              className={`
          transition-all w-2 h-2 bg-customOrange opacity-70 rounded-full
          ${currentIndex === i ? "p-2" : "opacity-20"}
        `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
