// Lista de experiencia laboral
const workExperience = [
  {
    company: "Tecnologías Informáticas Roots",
    companyUrl: "https://www.solucionesroots.com/",
    period: "Enero 2025 – Agosto 2025",
    role: "Desarrollador Back-end a Full Stack",
    description: `Durante mi pasantía de 7 meses, de manera remota contribuí al desarrollo de aplicaciones web nacionales e internacionales.
    Trabajé en equipo de desarroollo con tecnologías como  NestJs, ReactJs. En dónde mis habilidades fueron puestas a prueba y mejoradas,
    aprendiendo a trabajar bajo presión y cumplir con los plazos establecidos.`,
    stack: ["React", "Nestjs", "PostgreSQL", "SQL", "Git", "Docker", "MongoDB"],
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 bg-light-body dark:bg-dark-body">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experiencia Laboral
        </h2>

        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <div
              key={index}
              className="bg-light-secondaryBg dark:bg-dark-secondaryBg rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-2xl font-bold mb-2 md:mb-0">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-light-text dark:text-dark-text"
                  >
                    {exp.company}
                  </a>
                </h3>
                <span className="text-sm md:text-base text-light-text dark:text-dark-text bg-light-body dark:bg-dark-body px-4 py-2 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              <p className="text-lg text-light-link dark:text-dark-link font-semibold mb-4">
                {exp.role}
              </p>

              <p className="text-light-text dark:text-dark-text mb-6 leading-relaxed whitespace-pre-line">
                {exp.description.trim()}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-light-link dark:bg-dark-link text-white rounded-full text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
