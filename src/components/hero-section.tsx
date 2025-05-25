"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const images = [
  "/images/carousel/code-1.png",
  "/images/carousel/code-2.png",
  "/images/carousel/code-3.png",
];

const overlayStyle = "absolute inset-0 bg-black/50 z-10";
const imageStyle = "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center relative overflow-hidden"
    >
      {/* Image Carousel */}
      {images.map((src, index) => (
        <div
          key={src}
          className={imageStyle}
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        >
          <img
            src={src}
            alt={`Software Development ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className={overlayStyle} />

      {/* Content */}
      <div className="container mx-auto px-8 text-center relative z-20 text-white">
        <img 
          src="/disenosduran.svg" 
          alt="Diseños Duran Logo" 
          className="h-24 md:h-32 w-auto mx-auto mb-6" 
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Diseños Duran
        </h1>

        <Button
          asChild
          size="lg"
          className="text-lg text-white bg-amber-600 hover:bg-amber-800 transition-colors"
        >
          <a href="#contact">Contactanos</a>
        </Button>
      </div>
    </section>
  );
}
