import { Github, X } from "lucide-react";
import { useEffect, useState } from "react";
import Proyecto1 from "./assets/proyects/project-1.webp";
import Proyecto2 from "./assets/proyects/project-2.webp";
import Proyecto3 from "./assets/proyects/project-3.webp";
import Proyecto4 from "./assets/proyects/project-4.webp";
import Proyecto5 from "./assets/proyects/project-5.webp";
import Proyecto6 from "./assets/proyects/project-6.webp";
import ShowMoreButton from "./common/ShowMoreButton";

// Lista de proyectos
const allProjects = [
  {
    title: "SuperKids",
    description: "Una plataforma que educa a los niños sobre los virus.",
    descriptionLong:
      "SuperKids es una plataforma interactiva diseñada para enseñar a los niños qué son los virus, cómo se propagan y cómo prevenirlos de manera segura y divertida. Utiliza elementos visuales atractivos y lenguaje adaptado a su edad para promover hábitos saludables desde temprana edad.",
    image: Proyecto1,
    role: "Desarrollador Frontend",
    githubUrl: "https://github.com/Iza091/SuperKidsProyectoFinal2021",
  },
  {
    title: "My Couple",
    description:
      "App hecha para mascotas y ayudarles a encontrar su garrita especial",
    descriptionLong:
      "MyCouple es una aplicación innovadora enfocada en conectar mascotas para encontrar su garrita especial. Surge como una solución a la dificultad que enfrentan muchos dueños al buscar un compañero/a adecuado/a para sus mascotas, ofreciendo una plataforma amigable y accesible para facilitar la conexión entre ellas.",
    image: Proyecto6,
    role: "Desarrollador Frontend",
    githubUrl: null,
  },
  {
    title: "Sistema Académico INU",
    description: "Sistema Académico del Instituto Nacional de Usulután",
    descriptionLong:
      "El Sistema Académico INU es una herramienta digital desarrollada para gestionar de forma eficiente la información académica del Instituto Nacional de Usulután. Permite administrar estudiantes, docentes y asignaturas, así como registrar calificaciones y asistencia, mejorando la organización institucional.",
    image: Proyecto2,
    role: "Desarrollador Backend",
    githubUrl: "https://github.com/Iza091/SistemaAcademicoINU",
  },
  {
    title: "Tienda de Mascotas",
    description: "Todo lo que necesitas para el bienestar de tu mascota.",
    descriptionLong:
      "Es una e-comerse dedicada al bienestar animal. Ofrece una amplia variedad de productos, desde alimentos hasta accesorios para diferentes tipos de mascotas. Incluye funcionalidades como carrito de compras, gestión de inventario y sistema de búsqueda de productos.",
    image: Proyecto3,
    role: "Desarrollador FullStack",
    githubUrl: "https://github.com/Iza091/TiendadeMascotas",
  },
  {
    title: "Carrot Studio",
    description: "Negocio de compra y venta de productos de tecnología.",
    descriptionLong:
      "Carrot Studio es una e-comerse especializada en productos tecnológicos. Su catálogo incluye dispositivos electrónicos, accesorios inteligentes y soluciones innovadoras para el hogar y el trabajo. La plataforma se enfoca en brindar una experiencia de usuario fluida, con diseño atractivo, animaciones modernas y navegación intuitiva.",
    image: Proyecto4,
    role: "Desarrollador Frontend",
    githubUrl: null,
  },
  {
    title: "Nam Tlakit SV",
    description: "Gastronomía salva doreña con un toque único.",
    descriptionLong:
      "Nam Tlakit SV es una e-comerse enfocada en gastronomía, que ofrece una experiencia culinaria única fusionando sabores tradicionales salvadoreños con técnicas modernas. Su menú incluye una variedad de platos que destacan la riqueza de la gastronomía local, presentados de manera innovadora y atractiva.",
    image: Proyecto5,
    role: "Desarrollador Frontend",
    githubUrl: null,
  },
];

const Projects = ({
  showAll,
  onShowMore,
  selectedProject,
  setSelectedProject,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedProject, setSelectedProject]);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const visibleProjects =
    isMobile && !showAll ? allProjects.slice(0, 3) : allProjects;

  return (
    <section
      id="proyectos"
      className="py-20 bg-light-secondaryBg dark:bg-dark-secondaryBg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Proyectos:</h2>

        {/* Grid de proyectos (se mantiene igual) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-light-body dark:bg-dark-body rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-xl"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-light-text dark:text-dark-text">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver más / Ver menos */}
        {isMobile && allProjects.length > 3 && (
          <div className="mt-8 flex justify-center">
            <ShowMoreButton onClick={onShowMore} isExpanded={showAll} />
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className={`bg-white dark:bg-dark-body rounded-2xl shadow-2xl overflow-hidden relative ${
              isMobile ? "max-w-[90vw] w-full" : "max-w-5xl w-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-light-link dark:bg-dark-link text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isMobile ? (
              /* Layout Móvil - Simplificado */
              <div className="flex flex-col">
                <div className="h-48">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-center">
                    {selectedProject.title}
                  </h3>

                  <p className="text-light-text dark:text-dark-text">
                    {selectedProject.descriptionLong}
                  </p>

                  <div className="flex justify-between items-center pt-2">
                    <span className="px-3 py-1 bg-light-link dark:bg-dark-link text-white rounded-full text-sm">
                      {selectedProject.role}
                    </span>

                    {selectedProject.githubUrl ? (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-800 dark:text-gray-200 hover:text-light-link dark:hover:text-dark-link transition-colors"
                        title="Ver código"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        No hay enlace
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Layout Desktop - Horizontal */
              <div className="flex">
                <div className="w-1/2 bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-lg"
                  />
                </div>

                <div className="w-1/2 flex flex-col p-8">
                  <h3 className="text-3xl font-bold mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-light-text dark:text-dark-text mb-6">
                    {selectedProject.descriptionLong}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <span className="px-4 py-2 bg-light-link dark:bg-dark-link text-white rounded-full">
                      {selectedProject.role}
                    </span>

                    {selectedProject.githubUrl ? (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Código</span>
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        No disponible
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
