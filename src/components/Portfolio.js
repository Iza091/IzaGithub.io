import React, { useState } from 'react';
import { Github, Linkedin, Menu } from 'lucide-react';
import Contact from './Contact';
import Projects from './Projects';
import Certificates from './Certificates';
import Testimonials from './Testimonials';
import Skills from "./Skills";
import AboutMe from './AboutMe';
import izaortizImage from './img/iza.png';
import IzDev from './img/favicon.svg';
import CV from './download/IsaiasOrtiz.pdf';
import { useTheme } from '../ThemeContext';
import { Sun, Moon } from 'lucide-react';
import ScrollToTopButton from './ScrollToTopButton';



const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="min-h-screen bg-light-body text-light-text dark:bg-dark-body dark:text-dark-text transition-colors duration-700">
            {/* Navbar */}
            <nav className="bg-light-secondaryBg dark:bg-dark-secondaryBg text-light-primary dark:text-dark-primary shadow-sm fixed w-full top-0 z-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <img
                            src={IzDev}
                            alt="IzDev"
                            className="w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10" // Tamaños adaptables
                        />
                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="h-6 w-6 text-light-text dark:text-dark-text" />
                        </button>


                        {/* Desktop menu */}
                        <div
                            className="hidden md:flex space-x-8"
                            onClick={(e) => {
                                e.preventDefault(); // Evita el comportamiento predeterminado del enlace
                                const targetId = e.target.getAttribute('href')?.slice(1); // Obtén el ID del destino
                                if (targetId) {
                                    const targetElement = document.getElementById(targetId);
                                    targetElement?.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
                                }
                            }}
                        >
                            <a href="#about" className="text-light-text dark:text-dark-text">Sobre Mi</a>
                            <a href="#proyectos" className="text-light-text dark:text-dark-text">Proyectos</a>
                            <a href="#habilidades" className="text-light-text dark:text-dark-text">Habilidades</a>
                            <a href="#certificados" className="text-light-text dark:text-dark-text">Certificados</a>
                            <a href="#testimonios" className="text-light-text dark:text-dark-text">Testimonios</a>
                            <a href="#contacto" className="text-light-text dark:text-dark-text">Contacto</a>
                        </div>



                        {/* Theme toggle button */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded transition-colors duration-300 
        ${theme === 'light' ? 'bg-light-primary text-white hover:bg-light-link' : 'bg-dark-link text-white hover:bg-dark-link'}
    `}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? (
                                <Moon className="w-5 h-5" />
                            ) : (
                                <Sun className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div
                            className="bg-light-secondaryBg dark:bg-dark-secondaryBg w-64 px-2 pt-2 pb-3 space-y-1 absolute top-0 right-0 h-full shadow-lg"
                            onClick={(e) => {
                                e.stopPropagation();
                                const targetId = e.target.getAttribute('href')?.slice(1);
                                if (targetId) {
                                    const targetElement = document.getElementById(targetId);
                                    targetElement?.scrollIntoView({ behavior: 'smooth' });
                                    setIsMenuOpen(false); // Cierra el menú después de desplazarse
                                }
                            }}
                        >
                            <a href="#about" className="block px-3 py-2 text-light-text dark:text-dark-text">Sobre Mi</a>
                            <a href="#proyectos" className="block px-3 py-2 text-light-text dark:text-dark-text">Proyectos</a>
                            <a href="#habilidades" className="block px-3 py-2 text-light-text dark:text-dark-text">Habilidades</a>
                            <a href="#certificados" className="block px-3 py-2 text-light-text dark:text-dark-text">Certificados</a>
                            <a href="#testimonios" className="block px-3 py-2 text-light-text dark:text-dark-text">Testimonios</a>
                            <a href="#contacto" className="block px-3 py-2 text-light-text dark:text-dark-text">Contacto</a>
                        </div>
                    </div>
                )}


            </nav>

            {/* Hero Section */}
            <section id="inicio" className="bg-light-body dark:bg-dark-body text-light-text dark:text-light-text">
                <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                    <img
                        src={izaortizImage}
                        alt="Tu foto"
                        className="w-32 h-32 rounded-full mx-auto mb-8"
                    />
                    <h1 className="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Isaías Ortiz</h1>
                    <p className="text-xl  text-light-text dark:text-dark-text mb-8">Desarrollador Full Stack</p>
                    <p className="max-w-2xl mx-auto  text-light-text dark:text-dark-text">
                        "Tu eres bueno, sigue adelante."
                    </p>
                    {/* Curriculum */}
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
            <ScrollToTopButton />
            {/* Sobre Mi */}

            <section id="about" className='py-20 bg-light-body dark:bg-dark-body'>
                <AboutMe />
            </section>

            {/* Projects Section */}
            <section id="proyectos" className="py-20 bg-light-secondaryBg dark:bg-dark-secondaryBg">
                <Projects/>
            </section>

           

            {/* Skills Section */}
            <section id="habilidades" className="py-20 bg-light-body dark:bg-dark-body">
                <Skills />
            </section>

            {/* Certificates Section */}
            <section id="certificados" className="py-20 bg-light-body dark:bg-dark-secondaryBg">
                <Certificates />
            </section>

            {/* Testimonial Section */}
            <section id="testimonios" className=" bg-light-secondaryBg dark:bg-dark-secondaryBg">
                {/* Testimonial Form */}
                <Testimonials />
            </section>

            {/* Contact Section */}
            <section id="contacto" className=" bg-light-body dark:bg-dark-body">
                {/* Contact Form */}
                <Contact />
            </section>

            {/* Footer */}
            <footer className="bg-light-body dark:bg-dark-body py-8">
                <div className="max-w-6xl mx-auto px-4 space-y-4">
                    {/* Contenedor para alinear verticalmente los elementos */}
                    <div className="flex flex-col items-center space-y-4">
                        {/* Texto de copyright */}
                        <p className="text-light-text dark:text-dark-text">© 2024 IzDev. Todos los derechos reservados.</p>

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