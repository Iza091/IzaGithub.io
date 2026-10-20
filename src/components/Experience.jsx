import { Building2, ExternalLink, GraduationCap } from "lucide-react";

const workExperience = [
  {
    company: "Instructor Taller de Programación Front-end",
    companyUrl: null,
    period: "Septiembre 2025 – Noviembre 2025",
    periodDateTime: "2025-09/2025-11",
    type: "Docencia",
    role: "Desarrollador Front-end e Instructor",
    description:
      "Impartí taller de programación en la Universidad Gerardo Barrios de Usulután, guiando a estudiantes en la creación de proyectos web con React, integración de APIs REST y control de versiones con Git. Fomenté un ambiente colaborativo donde desarrollaron habilidades prácticas de desarrollo front-end.",
    stack: ["React", "Git", "API REST"],
    icon: GraduationCap,
  },
  {
    company: "Tecnologías Informáticas Roots",
    companyUrl: null,
    period: "Enero 2025 – Agosto 2025",
    periodDateTime: "2025-01/2025-08",
    type: "Pasantía",
    role: "Desarrollador Back-end a Full Stack",
    description:
      "Durante mi pasantía de 7 meses, de manera remota contribuí al desarrollo de aplicaciones web nacionales e internacionales. Trabajé en equipo de desarrollo con tecnologías como NestJs, ReactJs. En dónde mis habilidades fueron puestas a prueba y mejoradas, aprendiendo a trabajar bajo presión y cumplir con los plazos establecidos.",
    stack: ["React", "Nestjs", "PostgreSQL", "SQL", "Git", "Docker", "MongoDB"],
    icon: Building2,
  },
];

const Experience = () => {
  return (
    <section
      id="experiencia"
      className="py-16 px-4 bg-light-body dark:bg-dark-body"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14 text-light-text dark:text-dark-text">
          Experiencia Laboral
        </h2>

        <ol className="relative ml-4 md:ml-8 space-y-8 md:space-y-10">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-light-link/40 dark:bg-dark-link/40" />
          {workExperience.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <li key={index} className="relative pl-10 md:pl-14">
                <span className="absolute -left-[1.125rem] md:-left-[0.875rem] top-2 flex h-9 w-9 items-center justify-center rounded-full bg-light-link text-white ring-4 ring-light-body dark:bg-dark-link dark:ring-dark-body">
                  <Icon className="h-4 w-4" />
                </span>
                <article className="dz-card bg-light-secondaryBg dark:bg-dark-secondaryBg border border-light-tertiaryBorder dark:border-dark-tertiaryBorder shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="dz-card-body p-5 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-light-text dark:text-dark-text">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-light-text dark:text-dark-text hover:text-light-link dark:hover:text-dark-link hover:underline focus:outline-none focus-visible:underline transition-colors"
                            >
                              {exp.company}
                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            </a>
                          ) : (
                            exp.company
                          )}
                        </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-sm md:text-base">
                      <span className="text-light-text/80 dark:text-dark-text/80">
                        {exp.type}
                      </span>
                      <span className="text-light-text/60 dark:text-dark-text/60">•</span>
                      <p className="text-light-text/90 dark:text-dark-text/90">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  <time
                    dateTime={exp.periodDateTime}
                    className="text-sm text-light-text/70 dark:text-dark-text/70 whitespace-nowrap"
                  >
                    {exp.period}
                  </time>
                    </div>

                    <p className="text-light-text dark:text-dark-text leading-relaxed text-sm md:text-base mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {exp.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm md:text-base text-light-text/80 dark:text-dark-text/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
