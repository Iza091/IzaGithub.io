import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "../ThemeContext";
import { useTraduccion } from "../TraduccionContext";
import CertificatesSkeleton from "../utils/CertificatesSkeleton";
import ProjectsSkeleton from "../utils/ProyectSkeleton";
import TestimonialsSkeleton from "../utils/TestimonialsSkeleton";
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

const Portfolio = () => {
  // Estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Contexto para el tema (claro/oscuro)
  const { theme, toggleTheme } = useTheme();

  // Contexto de idioma (es/en)
  const { idioma, cambiarIdioma, t } = useTraduccion();

  // Selecciona una frase aleatoria solo una vez por sesión
  const fraseAleatoria = useMemo(() => {
    const frases = t.hero.frases;
    const idx = Math.floor(Math.random() * frases.length);
    return frases[idx];
  }, [t]);

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

  // Skeleton loading state
  const [isLoading, setIsLoading] = useState({
    testimonials: true,
    projects: true,
    certificates: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading({
        testimonials: false,
        projects: false,
        certificates: false,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
              className="md:hidden p-2 rounded-md hover:bg-light-secondaryBg dark:hover:bg-dark-secondaryBg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-light-text dark:text-dark-text transition-transform duration-200" />
              ) : (
                <Menu className="h-6 w-6 text-light-text dark:text-dark-text transition-transform duration-200" />
              )}
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
                {t.nav.sobreMi}
              </a>
              <a
                href="#proyectos"
                className="nav-link text-light-text dark:text-dark-text"
              >
                {t.nav.proyectos}
              </a>
              <a
                href="#habilidades"
                className="nav-link text-light-text dark:text-dark-text"
              >
                {t.nav.habilidades}
              </a>
              <a
                href="#certificados"
                className="nav-link text-light-text dark:text-dark-text"
              >
                {t.nav.certificados}
              </a>
              <a
                href="#testimonios"
                className="nav-link text-light-text dark:text-dark-text"
              >
                {t.nav.testimonios}
              </a>
              <a
                href="#contacto"
                className="nav-link text-light-text dark:text-dark-text"
              >
                {t.nav.contacto}
              </a>
            </div>

            {/* Botón de cambio de tema */}
            <div className="flex items-center gap-2 sm:gap-3">
              <label className="dz-swap dz-swap-rotate hidden sm:inline-flex">
                <input
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                  aria-label="Cambiar tema"
                />
                <Sun className="dz-swap-off w-5 h-5 text-light-text dark:text-dark-text" />
                <Moon className="dz-swap-on w-5 h-5 text-light-text dark:text-dark-text" />
              </label>

              {/* Idioma ES/EN */}
              <div className="flex items-center rounded-full border border-light-secondaryBorderSubtle dark:border-dark-secondaryBorderSubtle overflow-hidden text-[10px] sm:text-xs font-medium">
                {["es", "en"].map((idi) => (
                  <button
                    key={idi}
                    onClick={() => cambiarIdioma(idi)}
                    className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 uppercase transition-colors ${
                      idioma === idi
                        ? "bg-light-link text-white dark:bg-dark-link"
                        : "text-light-text dark:text-dark-text hover:bg-light-body dark:hover:bg-dark-body"
                    }`}
                  >
                    {idi}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`absolute top-0 right-0 h-full w-72 bg-light-secondaryBg dark:bg-dark-secondaryBg shadow-xl transition-transform duration-300 ease-in-out overflow-y-auto ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ overscrollBehavior: "contain", touchAction: "pan-y" }}
            onTouchMove={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex items-center justify-between px-4 h-16 border-b border-light-tertiaryBorder dark:border-dark-tertiaryBorder">
              <span className="text-light-text dark:text-dark-text font-semibold">{t.comun.menu}</span>
              <div className="flex items-center gap-2">
                <label className="dz-swap dz-swap-rotate">
                  <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    aria-label="Cambiar tema"
                  />
                  <Sun className="dz-swap-off w-5 h-5 text-light-text dark:text-dark-text" />
                  <Moon className="dz-swap-on w-5 h-5 text-light-text dark:text-dark-text" />
                </label>
                <div className="flex items-center rounded-full border border-light-secondaryBorderSubtle dark:border-dark-secondaryBorderSubtle overflow-hidden text-[10px] font-medium">
                  {["es", "en"].map((idi) => (
                    <button
                      key={idi}
                      onClick={() => cambiarIdioma(idi)}
                      className={`px-1.5 py-0.5 uppercase transition-colors ${
                        idioma === idi
                          ? "bg-light-link text-white dark:bg-dark-link"
                          : "text-light-text dark:text-dark-text"
                      }`}
                    >
                      {idi}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-light-body dark:hover:bg-dark-body transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5 text-light-text dark:text-dark-text" />
                </button>
              </div>
            </div>
            <nav
              className="flex flex-col px-2 py-3 space-y-1"
              onClick={(e) => {
                const targetId = e.target.getAttribute("href")?.slice(1);
                if (targetId) {
                  const targetElement = document.getElementById(targetId);
                  targetElement?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }
              }}
            >
              <a
                href="#about"
                className="nav-link px-3 py-2 text-light-text dark:text-dark-text rounded-md hover:bg-light-body dark:hover:bg-dark-body"
              >
                {t.nav.sobreMi}
              </a>
              <a
                href="#proyectos"
                className="nav-link px-3 py-2 text-light-text dark:text-dark-text rounded-md hover:bg-light-body dark:hover:bg-dark-body"
              >
                {t.nav.proyectos}
              </a>
              <a
                href="#habilidades"
                className="nav-link px-3 py-2 text-light-text dark:text-dark-text rounded-md hover:bg-light-body dark:hover:bg-dark-body"
              >
                {t.nav.habilidades}
              </a>
              <a
                href="#experiencia"
                className="nav-link px-3 py-2 text-light-text dark:text-dark-text rounded-md hover:bg-light-body dark:hover:bg-dark-body"
              >
                {t.nav.experiencia}
              </a>
              <a
                href="#certificados"
                className="nav-link px-3 py-2 text-light-text dark:text-dark-text rounded-md hover:bg-light-body dark:hover:bg-dark-body"
              >
                {t.nav.certificados}
              </a>
              <a
                href="#testimonios"
                className="nav-link px-3 py-2 text-light-text dark:text-dark-text rounded-md hover:bg-light-body dark:hover:bg-dark-body"
              >
                {t.nav.testimonios}
              </a>
              <a
                href="#contacto"
                className="nav-link px-3 py-2 text-light-text dark:text-dark-text rounded-md hover:bg-light-body dark:hover:bg-dark-body"
              >
                {t.nav.contacto}
              </a>
            </nav>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <style>{`body{overflow:hidden;touch-action:none;overscroll-behavior:none;}`}</style>
      )}
      {/* Hero Section */}
      <section
        id="inicio"
        className="bg-light-body dark:bg-dark-body text-light-text dark:text-light-text"
      >
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Foto de perfil */}
          <div className="dz-avatar mx-auto mb-8">
            <div className="w-32 h-32 rounded-full border-4 border-light-primary dark:border-dark-link shadow-lg">
              <img src={izaortizImage} alt="Isaías Ortiz" />
            </div>
          </div>
          {/* Nombre y título */}
          <h1 className="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
            Isaías Ortiz
          </h1>
          <p className="text-xl  text-light-text dark:text-dark-text mb-8">
            {t.hero.rol}
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
              {t.hero.cv}
            </a>
          </div>
        </div>
      </section>
      {/* Botón para volver arriba */}
      {!selectedProject && !selectedCertificate && <ScrollToTopButton />}
      {/* Sección Sobre Mi */}
      <section id="about" className="py-20 bg-light-body dark:bg-dark-body">
        <AboutMe />
      </section>
      <section
        id="exp"
        className=" py-20 dark:border-dark-secondaryBorderSubtle"
      >
        {/* Sección Experiencia */}
        <Experience />
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
      {/* Sección Proyectos */}
      <section
        id="proyectos"
        ref={proyectosRef}
        className="py-20 bg-light-secondaryBg dark:bg-dark-secondaryBg"
      >
        {isLoading.projects ? (
          <ProjectsSkeleton />
        ) : (
          <Projects
            showAll={showAllProjects}
            onShowMore={handleShowMoreProjects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </section>

      {/* Sección Certificados */}
      <section
        id="certificados"
        ref={certificadosRef}
        className="py-20 bg-light-body dark:bg-dark-secondaryBg"
      >
        {isLoading.certificates ? (
          <CertificatesSkeleton />
        ) : (
          <Certificates
            showAll={showAllCertificates}
            onShowMore={handleShowMoreCertificates}
            onCategoryChange={resetShowAllCertificates}
            selectedCertificate={selectedCertificate}
            setSelectedCertificate={setSelectedCertificate}
          />
        )}
      </section>
      {/* Sección Testimonios */}
      <section
        id="testimonios"
        className="bg-light-secondaryBg dark:bg-dark-secondaryBg"
      >
        {isLoading.testimonials ? <TestimonialsSkeleton /> : <Testimonials />}
      </section>
      {/* Sección Contacto */}
      <section id="contacto" className="bg-light-body dark:bg-dark-body">
        <Contact />
      </section>
      {/* Footer */}
      <footer className="bg-light-body dark:bg-dark-body py-8">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <div className="flex flex-col items-center space-y-4">
            {/* Texto de copyright */}
            <p className="text-light-text dark:text-dark-text">
              © {new Date().getFullYear()} IzDev. {t.comun.derechos}
            </p>

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
