import { useState } from "react";

const workExperience = [
  {
    company: "Tecnologías Informáticas Roots",
    companyUrl: "https://www.solucionesroots.com/",
    period: "Enero 2025 – Agosto 2025",
    role: "Desarrollador Back-end a Full Stack",
    description: `Durante mi pasantía de 7 meses, de manera remota contribuí al desarrollo de aplicaciones web nacionales e internacionales. Trabajé en equipo de desarrollo con tecnologías como NestJs, ReactJs. En dónde mis habilidades fueron puestas a prueba y mejoradas, aprendiendo a trabajar bajo presión y cumplir con los plazos establecidos.`,
    stack: ["React", "Nestjs", "PostgreSQL", "SQL", "Git", "Docker", "MongoDB"],
  },
  {
    company: "Instructor Taller de Programación Front-end",
    companyUrl: null,
    period: "Septiembre 2025 – Noviembre 2025",
    role: "Desarrollador Front-end e Instructor",
    description: `Impartí taller de programación en la Universidad Gerardo Barrios de Usulután, guiando a estudiantes en la creación de proyectos web con React, integración de APIs REST y control de versiones con Git. Fomenté un ambiente colaborativo donde desarrollaron habilidades prácticas de desarrollo front-end.`,
    stack: ["React", "Git", "API REST"],
  },
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experiencia"
      className="py-12 px-4 bg-light-body dark:bg-dark-body"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16 text-light-text dark:text-dark-text">
          Experiencia Laboral
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:w-0.5 bg-light-link dark:bg-dark-link md:transform md:-translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-light-link dark:bg-dark-link rounded-full md:transform md:-translate-x-1/2 border-2 md:border-4 border-light-body dark:border-dark-body z-10"></div>

                <div className="w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0">
                  <div className="bg-light-secondaryBg dark:bg-dark-secondaryBg rounded-lg shadow-md md:shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                    <div className="mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-light-text dark:text-dark-text mb-2">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h3>
                      <span className="inline-block text-xs md:text-sm text-light-link dark:text-dark-link font-semibold bg-light-body dark:bg-dark-body px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-light-link dark:text-dark-link font-medium mb-3">
                      {exp.role}
                    </p>

                    <div className="mb-4">
                      <p
                        className={`text-light-text dark:text-dark-text leading-relaxed text-sm ${
                          expandedIndex === index ? "" : "line-clamp-3"
                        }`}
                      >
                        {exp.description}
                      </p>
                      {exp.description.length > 150 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-light-link dark:text-dark-link text-xs md:text-sm font-medium mt-2 hover:underline focus:outline-none"
                        >
                          {expandedIndex === index ? "Ver menos" : "Ver más"}
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {exp.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 md:px-3 bg-light-link dark:bg-dark-link text-white rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
