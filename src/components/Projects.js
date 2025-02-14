import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import Proyecto1 from './img/project-1.webp';
import Proyecto2 from './img/project-2.webp';
import Proyecto3 from './img/project-3.webp';

const projects = [
    {
        title: "SuperKids",
        description: "Una plataforma para el cuidado de los niños contra los virus.",
        image: Proyecto1,
        role: "Desarrollador Frontend",
        githubUrl: "https://github.com/Iza091/SuperKidsProyectoFinal2021"
    },
    {
        title: "Sistema Académico INU",
        description: "Sistema Académico del Instituto Nacional de Usulután (No final).",
        image: Proyecto2,
        role: "Desarrollador Backend",
        githubUrl: "https://github.com/Iza091/SistemaAcademicoINU"
    },
    {
        title: "Tienda de Mascotas",
        description: "Un lugar donde poder comprar regalos, premios o comida para tu mascota.",
        image: Proyecto3,
        role: "Desarrollador FullStack",
        githubUrl: "https://github.com/Iza091/TiendadeMascotas"
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Bloquear el scroll cuando el modal está abierto
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    // Cerrar modal con la tecla Escape
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && selectedProject) {
                closeModal();
            }
        };

        if (selectedProject) {
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [selectedProject]);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="proyectos" className="py-20 bg-light-secondaryBg dark:bg-dark-secondaryBg">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Proyectos:</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-light-body dark:bg-dark-body rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                            onClick={() => openModal(project)}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-light-text dark:text-dark-text">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal de Proyectos */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={closeModal}>
                    <div
                        className="bg-white dark:bg-dark-body rounded-lg max-w-4xl w-full relative p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-2xl text-light-text dark:text-dark-link z-10 hover:text-red-500 transition-colors duration-200"
                            aria-label="Cerrar Modal"
                        >
                            ✕
                        </button>

                        {/* Imagen */}
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full max-h-[50vh] object-cover rounded-t-lg" />

                        {/* Contenido del Modal */}
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-4 text-center">{selectedProject.title}</h3>
                            <p className="text-light-text dark:text-dark-text mb-4">{selectedProject.description}</p>
                            <div className="mb-4">
                                <strong className="text-light-text dark:text-dark-text">Rol:</strong>
                                <p className="text-light-text dark:text-dark-text">{selectedProject.role}</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <strong className="text-light-text dark:text-dark-text">Repositorio:</strong>
                                <a
                                    href={selectedProject.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-light-text dark:text-dark-link ml-2 transition-colors duration-200"
                                    aria-label="Github"
                                >
                                    <Github className="h-6 w-6 mr-2" />
                                    <span className="underline">Ver en GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
