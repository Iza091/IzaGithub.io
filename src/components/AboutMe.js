import React from "react";
import ProfilePhoto from "./img/iza.png"; 
const AboutMe = () => {
    return (
        <section id="about-me" className="py-24 bg-gradient-to-b from-light-secondaryBg to-gray-90 dark:from-dark-secondaryBg dark:to-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
                   Sobre mí:
                </h2>
                <div className="relative flex flex-col md:flex-row items-center p-8 rounded-xl bg-light-body dark:bg-dark-secondaryBg backdrop-blur-sm shadow-lg">
                    {/* Imagen */}
                    <div className="flex-shrink-0 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-8">
                        <img
                            src={ProfilePhoto}
                            alt="Isaías Ortiz"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Texto */}
                    <div className="text-center md:text-left">
                        <p className="text-lg leading-relaxed text-light-text dark:text-dark-text">
                            Soy egresado de la carrera de Ingeniería en Sistemas y Redes Informáticas
                            de la Universidad Gerardo Barrios (UGB) en Usulután. Estoy apasionado por
                            el desarrollo de proyectos innovadores, con experiencia en front-end y
                            back-end. Disfruto aprender y adaptarme a nuevas tecnologías, incluyendo
                            entornos de desarrollo integrados y frameworks modernos.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
