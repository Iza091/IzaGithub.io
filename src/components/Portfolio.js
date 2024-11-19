import React, {  useEffect } from 'react';
import { Github, Linkedin, Menu } from 'lucide-react';
import Contact from './Contact';
import projects from './Projects';
import Certificates from './Certificates';
import izaortizImage from './img/izaortiz.webp';
import CV from './download/CV.pdf';



const Portfolio = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    // Add this useEffect to handle Escape key
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && selectedProject) {
                closeModal();
            }
        };

        // Add event listener when a project is selected
        if (selectedProject) {
            document.addEventListener('keydown', handleEscapeKey);
        }

        // Cleanup the event listener
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

    const skills = [
        "React", "JavaScript", "HTML", "CSS", "Node.js", "Python",
        "Android Studio", "PHP", "VueJs"
    ];




    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-xl font-bold">IzDev</h1>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* Desktop menu */}
                        <div className="hidden md:flex space-x-8">
                            <a href="#inicio" className="text-gray-700 hover:text-gray-900">Inicio</a>
                            <a href="#proyectos" className="text-gray-700 hover:text-gray-900">Proyectos</a>
                            <a href="#habilidades" className="text-gray-700 hover:text-gray-900">Habilidades</a>
                            <a href="#certificados" className="text-gray-700 hover:text-gray-900">Certificados</a>
                            <a href="#contacto" className="text-gray-700 hover:text-gray-900">Contacto</a>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#inicio" className="block px-3 py-2 text-gray-700">Inicio</a>
                            <a href="#proyectos" className="block px-3 py-2 text-gray-700">Proyectos</a>
                            <a href="#habilidades" className="block px-3 py-2 text-gray-700">Habilidades</a>
                            <a href="#certificados" className="block px-3 py-2 text-gray-700">Certificados</a>
                            <a href="#contacto" className="block px-3 py-2 text-gray-700">Contacto</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="inicio" className="bg-white">
                <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                    <img
                        src={izaortizImage}
                        alt="Tu foto"
                        className="w-32 h-32 rounded-full mx-auto mb-8"
                    />
                    <h1 className="text-4xl font-bold mb-4">Isaías Ortiz</h1>
                    <p className="text-xl text-gray-600 mb-8">Desarrollador Full Stack</p>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Un desarrollador 👨🏻‍💻 nacido en San Salvador, El Salvador y desarrollado en Usulután, El Salvador.
                    </p>
                    {/*      Curriculum            */}
                    <div className="flex justify-center mt-5">
                        <a
                            href={CV}
                            download="CV.pdf"
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Descargar CV
                        </a>
                    </div>

                </div>
            </section>

            {/* Projects Section */}
            <section id="proyectos" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Proyectos</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                                onClick={() => openModal(project)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Details Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black z-10"
                        >
                            ✕
                        </button>
                        <div className="flex flex-col">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full max-h-[50vh] object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>
                                <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                                <div className="mb-4">
                                    <strong className="text-gray-800">Rol:</strong>
                                    <p className="text-gray-600">{selectedProject.role}</p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <strong className="text-gray-800">Repositorio:</strong>
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-blue-600 hover:text-blue-800 ml-2 transition-colors duration-200"
                                        aria-label="Github"
                                    >
                                        <Github className="h-6 w-6 mr-2" />
                                        <span className="underline">Ver en GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Skills Section */}
            <section id="habilidades" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificates Section */}
            <section id="certificados" className="py-20 bg-gray">
                <Certificates />
            </section>



            {/* Contact Section */}
            <section id="contacto" className=" bg-gray-50">
                {/* Contact Form */}
                <Contact />
            </section>

            {/* Footer */}
            <footer className="bg-white py-8">
                <div className="max-w-6xl mx-auto px-4 space-y-4">
                    {/* Contenedor para alinear verticalmente los elementos */}
                    <div className="flex flex-col items-center space-y-4">
                        {/* Texto de copyright */}
                        <p className="text-gray-600">© 2024 IzDev. Todos los derechos reservados.</p>

                        {/* Iconos sociales */}
                        <div className="flex space-x-6">
                            <a target="_blank" href="https://github.com/Iza091"
                                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                aria-label="Github">
                                <Github className="h-6 w-6" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/eisaiasvllgsortiz/"
                                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                aria-label="LinkedIn">
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