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

      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="absolute left-4 md:top-1/2 top-1/3 transform -translate-y-1/2 bg-customOrange opacity-70 text-black rounded-full hover:opacity-90"
        >
          <img
            src="/icons/left-arrow.svg"
            alt="left arrow"
            className="w-6 h-6"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:top-1/2 top-1/3 transform -translate-y-1/2 bg-customOrange opacity-70 text-black rounded-full hover:opacity-90"
        >
          <img
            src="/icons/right-arrow.svg"
            alt="right arrow"
            className="w-6 h-6"
          />
        </button>
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
