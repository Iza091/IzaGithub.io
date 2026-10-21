import {
  Brain,
  Clock,
  HandHeart,
  Lightbulb,
  MessageSquare,
  Rocket,
  Shield,
  Star,
  Target,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import ShowMoreButton from "./common/ShowMoreButton";
import { useTraduccion, combinar } from "../TraduccionContext";

const Skills = ({ showAllSoftSkills, onShowMoreSoftSkills }) => {
  const { t } = useTraduccion();
  const hardSkills = [
    // Frontend
    { name: "React", icon: "devicon-react-original", category: "Frontend" },
    { name: "Vue.js", icon: "devicon-vuejs-plain", category: "Frontend" },
    { name: "Angular", icon: "devicon-angularjs-plain", category: "Frontend" },
    { name: "HTML5", icon: "devicon-html5-plain", category: "Frontend" },
    { name: "CSS3", icon: "devicon-css3-plain", category: "Frontend" },
    { name: "JS", icon: "devicon-javascript-plain", category: "Frontend" },
    { name: "TS", icon: "devicon-typescript-plain", category: "Frontend" },
    // Backend
    { name: "Node.js", icon: "devicon-nodejs-plain", category: "Backend" },
    { name: "Nest.js", icon: "devicon-nestjs-plain", category: "Backend" },
    { name: "PHP", icon: "devicon-php-plain", category: "Backend" },
    { name: "Python", icon: "devicon-python-plain", category: "Backend" },
    // Base de datos
    { name: "MongoDB", icon: "devicon-mongodb-plain", category: "Database" },
    {
      name: "PostgreSQL",
      icon: "devicon-postgresql-plain",
      category: "Database",
    },
    { name: "Docker", icon: "devicon-docker-plain", category: "Database" },
    {
      name: "Android Studio",
      icon: "devicon-android-plain",
      category: "Frontend",
    },
  ];

  const softSkills = [
    {
      name: "Comunicación",
      icon: MessageSquare,
      description: "Comunicación efectiva y clara en equipos",
    },
    {
      name: "Trabajo en equipo",
      icon: Users,
      description: "Colaboración y sinergia grupal",
    },
    {
      name: "Resolución de problemas",
      icon: Lightbulb,
      description: "Análisis y solución creativa de desafíos",
    },
    {
      name: "Gestión del tiempo",
      icon: Clock,
      description: "Organización y productividad eficiente",
    },
    {
      name: "Pensamiento crítico",
      icon: Brain,
      description: "Análisis profundo y toma de decisiones",
    },
    {
      name: "Orientación a objetivos",
      icon: Target,
      description: "Enfocado en resultados y metas",
    },
  ];

  const values = [
    {
      name: "Excelencia",
      icon: Star,
      description: "Búsqueda constante de la máxima calidad en cada proyecto",
    },
    {
      name: "Integridad",
      icon: Shield,
      description: "Compromiso con la honestidad y la ética profesional",
    },
    {
      name: "Compromiso",
      icon: HandHeart,
      description: "Dedicación total al trabajo",
    },
    {
      name: "Innovación",
      icon: Rocket,
      description: "Exploración continua de nuevas soluciones y tecnologías",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [isMobile, setIsMobile] = useState(false);
  const [showAllValues, setShowAllValues] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterSkills = () => {
    let filtered = hardSkills.filter(
      (skill) => skill.category === selectedCategory
    );

    if (isMobile) {
      if (selectedCategory === "Frontend") {
        return filtered.slice(0, 4);
      }
      if (selectedCategory === "Backend") {
        return filtered.slice(0, 4);
      }
      if (selectedCategory === "Database") {
        return filtered.slice(0, 4);
      }
    }

    return filtered;
  };

  const categories = ["Frontend", "Backend", "Database"];
  const visibleSkills = filterSkills();
  const visibleSoftSkills =
    isMobile && !showAllSoftSkills ? softSkills.slice(0, 3) : softSkills;
  const visibleValues =
    isMobile && !showAllValues ? values.slice(0, 2) : values;

  const softSkillsTrad = combinar(softSkills, t.habilidades.soft);
  const valuesTrad = combinar(values, t.habilidades.listaValores);
  const visibleSoftSkillsTrad =
    isMobile && !showAllSoftSkills ? softSkillsTrad.slice(0, 3) : softSkillsTrad;
  const visibleValuesTrad =
    isMobile && !showAllValues ? valuesTrad.slice(0, 2) : valuesTrad;

  return (
    <section className="py-24 bg-gradient-to-b from-light-body to-gray-50 dark:from-dark-body dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-light-text dark:text-dark-text">
          {t.habilidades.titulo}
        </h2>

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 md:px-4 py-2 rounded-full font-semibold border transition text-sm md:text-base ${
                selectedCategory === cat
                  ? "bg-light-link text-white dark:bg-dark-link"
                  : "bg-light-secondaryBg text-light-text dark:bg-dark-secondaryBg dark:text-dark-text hover:bg-light-link/10 dark:hover:bg-dark-link/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Hard skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 mb-20">
          {visibleSkills.map((skill) => (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center p-4 md:p-6 rounded-xl bg-light-body dark:bg-dark-secondaryBg shadow-lg border border-transparent hover:border-light-link/40 dark:hover:border-dark-link/40 transition-all duration-200"
              >
                <i
                  className={`${skill.icon} text-4xl md:text-6xl mb-2 md:mb-4 text-light-link dark:text-dark-link`}
                  title={skill.name}
                ></i>
                <span className="font-medium text-sm md:text-base text-light-text dark:text-dark-text text-center">
                  {skill.name}
                </span>
              </div>
          ))}
        </div>

        {/* Soft skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
            {t.habilidades.blandas}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleSoftSkillsTrad.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-xl bg-light-body dark:bg-dark-secondaryBg shadow-lg border border-transparent hover:border-light-link/40 dark:hover:border-dark-link/40 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-light-link/10 dark:bg-dark-link/10 transition-colors duration-200">
                  {React.createElement(skill.icon, {
                    className: "w-7 h-7 md:w-8 md:h-8 text-light-link dark:text-dark-link",
                    strokeWidth: 1.5,
                  })}
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg text-light-text dark:text-dark-text mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-light-text/80 dark:text-dark-text/80">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Ver más habilidades blandas */}
          {isMobile && softSkills.length > 3 && (
            <ShowMoreButton
              onClick={onShowMoreSoftSkills}
              isExpanded={showAllSoftSkills}
              className="mt-4"
            />
          )}
        </div>

        {/* Valores */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
            {t.habilidades.valores}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {visibleValuesTrad.map((value, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-xl bg-light-body dark:bg-dark-secondaryBg shadow-lg border border-transparent hover:border-light-link/40 dark:hover:border-dark-link/40 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-light-link/10 dark:bg-dark-link/10 transition-colors duration-200">
                  {React.createElement(value.icon, {
                    className: "w-7 h-7 md:w-8 md:h-8 text-light-link dark:text-dark-link",
                    strokeWidth: 1.5,
                  })}
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg text-light-text dark:text-dark-text mb-1">
                    {value.name}
                  </h4>
                  <p className="text-sm text-light-text/80 dark:text-dark-text/80">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Ver más valores */}
          {isMobile && values.length > 2 && (
            <ShowMoreButton
              onClick={() => setShowAllValues(!showAllValues)}
              isExpanded={showAllValues}
              className="mt-4"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
