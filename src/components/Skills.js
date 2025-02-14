import React from "react";
import {
    MessageSquare,
    Users,
    Lightbulb,
    Clock,
    Brain,
    Star,
    Target,
    Shield,
    HandHeart,
    Rocket
} from "lucide-react";

const Skills = () => {
    const hardSkills = [
        { name: "React", icon: "devicon-react-original" },
        { name: "JS", icon: "devicon-javascript-plain" },
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "CSS3", icon: "devicon-css3-plain" },
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "Android Studio", icon: "devicon-android-plain" },
        { name: "PHP", icon: "devicon-php-plain" },
        { name: "Vue.js", icon: "devicon-vuejs-plain" },
        { name: "Nest.js", icon: "devicon-nestjs-plain" },
    ];

    const softSkills = [
        { 
            name: "Comunicación", 
            icon: MessageSquare, 
            description: "Comunicación efectiva y clara en equipos"
        },
        {
            name: "Trabajo en equipo",
            icon: Users,
            description: "Colaboración y sinergia grupal"
        },
        {
            name: "Resolución de problemas",
            icon: Lightbulb,
            description: "Análisis y solución creativa de desafíos"
        },
        {
            name: "Gestión del tiempo",
            icon: Clock,
            description: "Organización y productividad eficiente"
        },
        {
            name: "Pensamiento crítico",
            icon: Brain,
            description: "Análisis profundo y toma de decisiones"
        },
        { 
            name: "Orientación a objetivos", 
            icon: Target, 
            description: "Enfocado en resultados y metas"
        },

    ];

    const values = [
        {
            name: "Excelencia",
            icon: Star,
            description: "Búsqueda constante de la máxima calidad en cada proyecto"
        },
        {
            name: "Integridad",
            icon: Shield,
            description: "Compromiso con la honestidad y la ética profesional"
        },
        {
            name: "Compromiso",
            icon: HandHeart,
            description: "Dedicación total al trabajo"
        },
        {
            name: "Innovación",
            icon: Rocket,
            description: "Exploración continua de nuevas soluciones y tecnologías"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-light-body to-gray-50 dark:from-dark-body dark:to-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                
                <h2 className="text-4xl font-bold text-center mb-16 text-light-text dark:text-dark-text">
                    Mis Habilidades
                </h2>

                {/* Habilidades Duras */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
                    •   Habilidades Duras:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {hardSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center p-6 rounded-xl bg-light-body dark:bg-dark-secondaryBg backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <i
                                    className={`${skill.icon} text-6xl mb-4 transition-all duration-300 group-hover:scale-110 text-light-link dark:text-dark-link`}
                                    title={skill.name}
                                ></i>
                                <span className="font-medium text-light-text dark:text-dark-text">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Habilidades Blandas */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
                    •  Habilidades Blandas:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {softSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-6 p-6 rounded-xl bg-light-body dark:bg-dark-secondaryBg backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-light-text/10 dark:bg-dark-text/10 group-hover:bg-light-text/20 dark:group-hover:bg-dark-text/20 transition-colors duration-300">
                                    {React.createElement(skill.icon, {
                                        className: "w-8 h-8 text-light-text dark:text-dark-text",
                                        strokeWidth: 1.5
                                    })}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-light-text dark:text-dark-text mb-1">
                                        {skill.name}
                                    </h4>
                                    <p className="text-sm text-light-text/80 dark:text-dark-text/90">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
                    • Valores:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group flex items-center gap-6 p-6 rounded-xl bg-light-body dark:bg-dark-secondaryBg backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-light-text/10 dark:bg-dark-text/10 group-hover:bg-light-text/20 dark:group-hover:bg-dark-text/20 transition-colors duration-300">
                                    {React.createElement(value.icon, {
                                        className: "w-8 h-8 text-light-text dark:text-dark-text",
                                        strokeWidth: 1.5
                                    })}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-light-text dark:text-dark-text mb-1">
                                        {value.name}
                                    </h4>
                                    <p className="text-sm text-light-text/80 dark:text-dark-text/90">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Skills;