import { Github, Linkedin, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "../ThemeContext";
import AboutMe from "./AboutMe";
import IzDev from "./assets/favicon.svg";
import izaortizImage from "./assets/iza.webp";
import Certificates from "./Certificates";
import Contact from "./Contact";
import CV from "./download/IsaiasOrtiz.pdf";
import Experience from "./Experience";
import Projects from "./Projects";
import ScrollToTopButton from "./ScrollToTopButton";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

// Frases motivacionales o de humor para mostrar aleatoriamente en el hero
const frases = [
  `"El código es poesía"`,
  `"Si funciona, no lo toques."`,
  `"Exprésate siempre, podrás encontrar la respuesta dentro de ti." `,
  `"¿Ya intentaste reiniciar?"`,
  `"¡Hola Mundo!"`,
  `" } //Por si se te olvida"`,
  `"Elmo sabe que la programación es como un juego de Lego, pero con más piezas y menos instrucciones."`,
  `"No confíes en nadie que dice que no hay errores en su código, porque seguro que no lo ha probado."`,
];

const Portfolio = () => {
  // Estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Contexto para el tema (claro/oscuro)
  const { theme, toggleTheme } = useTheme();

  // Selecciona una frase aleatoria solo una vez por sesión
  const fraseAleatoria = useMemo(() => {
    const idx = Math.floor(Math.random() * frases.length);
    return frases[idx];
  }, []);

  // Función para navegar al inicio
  const handleLogoClick = () => {
    const inicioElement = document.getElementById("inicio");
    inicioElement?.scrollIntoView({ behavior: "smooth" });
  };

  // Referencia para la sección de proyectos
  const proyectosRef = useRef(null);
  const certificadosRef = useRef(null);
  const habilidadesRef = useRef(null);

  // Estado para mostrar todos los proyectos (puedes moverlo aquí)
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAllSoftSkills, setShowAllSoftSkills] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleShowMoreProjects = () => {
    setShowAllProjects((prev) => {
      if (prev) {
        setTimeout(() => {
          proyectosRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return !prev;
    });
  };

  const handleShowMoreCertificates = () => {
    setShowAllCertificates((prev) => {
      if (prev) {
        setTimeout(() => {
          certificadosRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return !prev;
    });
  };

  const handleShowMoreSoftSkills = () => {
    setShowAllSoftSkills((prev) => {
      if (prev) {
        setTimeout(() => {
          habilidadesRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return !prev;
    });
  };

  const resetShowAllCertificates = () => setShowAllCertificates(false);

  useEffect(() => {
    if (selectedProject || selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, selectedCertificate]);

  return (
    <div className="min-h-screen bg-light-body text-light-text dark:bg-dark-body dark:text-dark-text transition-colors duration-700">
      {/* Navbar */}
      <nav className="bg-light-secondaryBg dark:bg-dark-secondaryBg text-light-primary dark:text-dark-primary shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Botón escondido que redirige al inicio */}
            <img
              src={IzDev}
              alt="IzDev"
              className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10 cursor-pointer"
              onClick={handleLogoClick}
            />

            {/* Botón menú móvil */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-light-text dark:text-dark-text" />
            </button>

            {/* Menú escritorio */}
            <div
              className="hidden md:flex space-x-8"
              onClick={(e) => {
                e.preventDefault();
                const targetId = e.target.getAttribute("href")?.slice(1);
                if (targetId) {
                  const targetElement = document.getElementById(targetId);
                  targetElement?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <a
                href="#about"
                className="nav-link text-light-text dark:text-dark-text"
              >
                Sobre Mi
              </a>
              <a
                href="#proyectos"
                className="nav-link text-light-text dark:text-dark-text"
              >
                Proyectos
              </a>
              <a
                href="#habilidades"
                className="nav-link text-light-text dark:text-dark-text"
              >
                Habilidades
              </a>
              <a
                href="#certificados"
                className="nav-link text-light-text dark:text-dark-text"
              >
                Certificados
              </a>
              <a
                href="#testimonios"
                className="nav-link text-light-text dark:text-dark-text"
              >
                Testimonios
              </a>
              <a
                href="#contacto"
                className="nav-link text-light-text dark:text-dark-text"
              >
                Contacto
              </a>
            </div>

            {/* Botón de cambio de tema */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded transition-colors duration-300 
        ${
          theme === "light"
            ? "bg-light-primary text-white hover:bg-light-link"
            : "bg-dark-link text-white hover:bg-dark-link"
        }
    `}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="bg-light-secondaryBg dark:bg-dark-secondaryBg w-64 px-2 pt-2 pb-3 space-y-1 absolute top-0 right-0 h-full shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                const targetId = e.target.getAttribute("href")?.slice(1);
                if (targetId) {
                  const targetElement = document.getElementById(targetId);
                  targetElement?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false); // Cierra el menú después de desplazarse
                }
              }}
            >
              <a
                href="#about"
                className="nav-link block px-3 py-2 text-light-text dark:text-dark-text"
              >
                Sobre Mi
              </a>
              <a
                href="#proyectos"
                className="nav-link block px-3 py-2 text-light-text dark:text-dark-text"
              >
                Proyectos
              </a>
              <a
                href="#habilidades"
                className="nav-link block px-3 py-2 text-light-text dark:text-dark-text"
              >
                Habilidades
              </a>
              <a
                href="#certificados"
                className="nav-link block px-3 py-2 text-light-text dark:text-dark-text"
              >
                Certificados
              </a>
              <a
                href="#testimonios"
                className="nav-link block px-3 py-2 text-light-text dark:text-dark-text"
              >
                Testimonios
              </a>
              <a
                href="#contacto"
                className="nav-link block px-3 py-2 text-light-text dark:text-dark-text"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="inicio"
        className="bg-light-body dark:bg-dark-body text-light-text dark:text-light-text"
      >
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Foto de perfil */}
          <img
            src={izaortizImage}
            alt="IzDev"
            className="w-32 h-32 rounded-full mx-auto mb-8"
          />
          {/* Nombre y título */}
          <h1 className="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
            Isaías Ortiz
          </h1>
          <p className="text-xl  text-light-text dark:text-dark-text mb-8">
            Desarrollador Full Stack
          </p>
          {/* Frase aleatoria */}
          <p className="max-w-2xl mx-auto  text-light-text dark:text-dark-text">
            {fraseAleatoria}
          </p>
          {/* Botón para descargar CV */}
          <div className="flex justify-center mt-5">
            <a
              href={CV}
              download="IsaiasOrtiz.pdf"
              className="py-2 px-4 rounded transition-colors duration-300 bg-light-link text-white hover:bg-light-link dark:bg-dark-link dark:hover:bg-dark-link"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </section>
      {/* Botón para volver arriba */}
      {!selectedProject && !selectedCertificate && <ScrollToTopButton />}
      {/* <-- Solo si no hay modal */}
      {/* Sección Sobre Mi */}
      <section id="about" className="py-20 bg-light-body dark:bg-dark-body">
        <AboutMe />
      </section>
      <section
        id="exp"
        className=" py-20 dark:border-dark-secondaryBorderSubtle"
      >
        <Experience />
      </section>

      {/* Sección Proyectos */}
      <section
        id="proyectos"
        ref={proyectosRef}
        className="py-20 bg-light-secondaryBg dark:bg-dark-secondaryBg"
      >
        <Projects
          showAll={showAllProjects}
          onShowMore={handleShowMoreProjects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </section>
      {/* Sección Habilidades */}
      <section
        id="habilidades"
        ref={habilidadesRef}
        className="py-20 bg-light-body dark:bg-dark-body"
      >
        <Skills
          showAllSoftSkills={showAllSoftSkills}
          onShowMoreSoftSkills={handleShowMoreSoftSkills}
        />
      </section>
      {/* Sección Certificados */}
      <section
        id="certificados"
        ref={certificadosRef}
        className="py-20 bg-light-body dark:bg-dark-secondaryBg"
      >
        <Certificates
          showAll={showAllCertificates}
          onShowMore={handleShowMoreCertificates}
          onCategoryChange={resetShowAllCertificates}
          selectedCertificate={selectedCertificate}
          setSelectedCertificate={setSelectedCertificate}
        />
      </section>
      {/* Sección Testimonios */}
      <section
        id="testimonios"
        className=" bg-light-secondaryBg dark:bg-dark-secondaryBg"
      >
        <Testimonials />
      </section>
      {/* Sección Contacto */}
      <section id="contacto" className=" bg-light-body dark:bg-dark-body">
        <Contact />
      </section>
      {/* Footer */}
      <footer className="bg-light-body dark:bg-dark-body py-8">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          {/* Contenedor para alinear verticalmente los elementos */}
          <div className="flex flex-col items-center space-y-4">
            {/* Texto de copyright */}
            <p className="text-light-text dark:text-dark-text">
              © {new Date().getFullYear()} IzDev. Todos los derechos reservados.
            </p>
            {/* Iconos sociales */}
            <div className="flex space-x-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Iza091"
                className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-link transition-colors duration-200"
                aria-label="Github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/eisaiasvllgsortiz/"
                className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-link transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
