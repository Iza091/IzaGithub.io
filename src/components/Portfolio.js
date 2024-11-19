import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';
import Contact from './Contact';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const projects = [
        {
            title: "Proyecto 1",
            description: "Una breve descripción del proyecto y las tecnologías utilizadas.",
            image: "https://placehold.co/400x300"
        },
        {
            title: "Proyecto 2",
            description: "Otro proyecto destacado con sus detalles relevantes.",
            image: "https://placehold.co/400x300"
        },
        {
            title: "Proyecto 3",
            description: "Un tercer proyecto que demuestra otras habilidades.",
            image: "https://placehold.co/400x300"
        }
    ];

    const skills = [
        "React", "JavaScript", "HTML", "CSS", "Node.js", "Python",
        "Git", "MongoDB", "SQL", "VueJs"
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
                            <a href="#contacto" className="block px-3 py-2 text-gray-700">Contacto</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="inicio" className="bg-white">
                <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                    <img
                        src="https://placehold.co/150"
                        alt="Tu foto"
                        className="w-32 h-32 rounded-full mx-auto mb-8"
                    />
                    <h1 className="text-4xl font-bold mb-4">Isaías Ortiz</h1>
                    <p className="text-xl text-gray-600 mb-8">Desarrollador Full Stack</p>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Una breve descripción sobre ti y tu experiencia profesional.
                        Menciona tus principales habilidades y lo que te apasiona.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section id="proyectos" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Proyectos</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
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

            {/* Contact Section */}
            <section id="contacto" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Contacto</h2>
                </div>
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
                            <a  target="_blank" href="https://github.com/Iza091"
                                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                aria-label="Github">
                                <Github className="h-6 w-6" />
                            </a>
                            <a  target="_blank" href="https://www.linkedin.com/in/eisaiasvllgsortiz/"
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