"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: (
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
        className="h-8 w-8 text-[#ffd600]"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 17 6-10" />
        <path d="m9 7 6 10" />
      </svg>
    ),
    title: "Innovación",
    description:
      "Nos mantenemos al día con las tendencias tecnológicas para entregar soluciones innovadoras.",
  },
  {
    icon: (
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
        className="h-8 w-8 text-[#ffd600]"
      >
        <path d="M14.5 20h-5" />
        <path d="M12 16v4" />
        <circle cx="12" cy="8" r="5" />
        <path d="M20 8c0-1.39-.41-2.68-1.12-3.76-.71-1.08-1.71-1.94-2.88-2.46" />
        <path d="M4 8c0-1.39.41-2.68 1.12-3.76C5.83 3.16 6.83 2.3 8 1.78" />
      </svg>
    ),
    title: "Clientes",
    description:
      "Nos mantenemos al día con las tendencias tecnológicas para entregar soluciones innovadoras.",
  },
  {
    icon: (
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
        className="h-8 w-8 text-[#ffd600]"
      >
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    ),
    title: "Calidad",
    description:
      "Nos mantenemos al día con las tendencias tecnológicas para entregar soluciones innovadoras.",
  },
  {
    icon: (
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
        className="h-8 w-8 text-[#ffd600]"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M16 2c-2-1.5-4-1.5-6 0" />
        <path d="M8 22c2 1.5 4 1.5 6 0" />
        <path d="M8 22v-4" />
        <path d="M16 22v-4" />
        <rect width="16" height="12" x="4" y="7" rx="2" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
    title: "Excelencia",
    description: "Nos mantenemos al día con las tendencias tecnológicas para entregar soluciones innovadoras.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Dd Portafolio </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-gray-50">
              <CardHeader className="flex flex-col items-center pb-2">
                {value.icon}
                <CardTitle className="text-lg mt-4">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                {value.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <img
              src="https://ext.same-assets.com/3662137398/692116298.jpeg"
              alt="Team collaboration"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-100 p-4 rounded-lg">
                <p className="text-[#ffd600] text-3xl font-bold">10+</p>
                <p className="text-gray-700">Experiencia</p>
              </div>
              <div className="bg-amber-100 p-4 rounded-lg">
                <p className="text-[#ffd600] text-3xl font-bold">200+</p>
                <p className="text-gray-700">Proyectos Entregados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
