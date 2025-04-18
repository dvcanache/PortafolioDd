"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center bg-gradient-to-r from-[#ffd600] to-amber-500 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lorem ipsum dolor sit amet
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        <Button
          asChild
          size="lg"
          className="text-lg text-[#ffd600] bg-white hover:bg-amber-800 transition-colors"
        >
          <a href="#contact">Contactanos</a>
        </Button>
      </div>
    </section>
  );
}
