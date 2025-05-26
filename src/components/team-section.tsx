"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";

const teamMembers = [
  {
    name: "Eduardo Urdaneta",
    role: "CEO y Lider del equipo",
    image: "https://i.pravatar.cc/300?img=1",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    vercel: "https://vercel.com",
    quote: "Desarrollador con experiencia en desarrollo de software y diseño web, con un enfoque en la creación de soluciones innovadoras y personalizadas que cumplen con las necesidades y objetivos de nuestros clientes.",
  },
  {
    name: "Jesus Flores",
    role: "Desarrollador web",
    image: "https://i.pravatar.cc/300?img=11",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    vercel: "https://vercel.com",
    quote: "Desarrollador web con basta experiencia en el area frontend, con un enfoque en la creación de diseños modernos y responsive.",
  },
  {
    name: "Maria",
    role: "DSA",
    image: "https://i.imgur.com/9m7fYRP.jpeg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    vercel: "https://vercel.com",
    quote: "Desarrolladora enfocada al analisis de datos y la orientacion con respecto al manejo de datos para la toma de decisiones empresariales.",
  },
];

export default function TeamSection() {
  const [flippedCards, setFlippedCards] = useState<{[key: string]: boolean}>({});

  const handleFlip = (name: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <section id="team" className="py-20 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="flip-card cursor-pointer h-[400px]"
              onClick={() => handleFlip(member.name)}
              style={{
                transform: flippedCards[member.name] ? 'rotateY(180deg)' : 'rotateY(0)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.8s',
              }}
            >
              {/* Front of card */}
              <div 
                className="flip-card-front absolute w-full h-full backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <Card className="border-0 shadow-lg overflow-hidden h-full">
                  <div className="bg-gray-100 p-4 flex justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardHeader>
                  <CardContent className="flex justify-center space-x-8 pb-6">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#ffd600] transition-colors"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#ffd600] transition-colors"
                  aria-label={`GitHub profile of ${member.name}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href={member.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#ffd600] transition-colors"
                  aria-label="Vercel portfolio"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="16" height="16" x="4" y="4" rx="2" fill="none" />
                    <path d="M16 13l-4 4" />
                  </svg>
                </a>
                  </CardContent>
                </Card>
              </div>
              {/* Back of card */}
              <div 
                className="flip-card-back absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="h-full flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                  <p className="text-gray-600 mb-6">{member.role}</p>
                  <div className="space-y-4">
                    <p className="text-gray-700">{member.quote}</p>
                    <div className="flex justify-center space-x-6 mt-6">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#ffd600] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#ffd600] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href={member.vercel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#ffd600] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 22.525H0l12-21.05 12 21.05z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
