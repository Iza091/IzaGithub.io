import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from './img/t1.png';
import t2 from './img/t2.png';
import t5 from './img/t5.png';
import t6 from './img/t6.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';


// 🔹 Botón Anterior (izquierda)
const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 transform -translate-y-1/2 z-10
                 p-4 md:p-3 lg:p-2 rounded-full 
                 bg-light-link dark:bg-dark-link text-white hover:bg-opacity-80
                 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-light-primary dark:focus:ring-dark-link

                 left-2 sm:left-4 md:left-[-50px] lg:left-[-40px]" // 🔹 Cambia la posición por tamaño de pantalla
        aria-label="Anterior"
    >
        <ChevronLeft className="w-7 h-7 md:w-6 md:h-6 lg:w-6 lg:h-6" />
    </button>
);

// 🔹 Botón Siguiente (derecha)
const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 transform -translate-y-1/2 z-10
                 p-4 md:p-3 lg:p-2 rounded-full 
                 bg-light-primary dark:bg-dark-link text-white hover:bg-opacity-80
                 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-light-primary dark:focus:ring-dark-link

                 right-2 sm:right-4 md:right-[-50px] lg:right-[-40px]" // 🔹 Cambia la posición por tamaño de pantalla
        aria-label="Siguiente"
    >
        <ChevronRight className="w-7 h-7 md:w-6 md:h-6 lg:w-6 lg:h-6" />
    </button>
);



const testimonials = [
    {
        name: "Miguel Peñalba",
        image: t1,
        profession: "Ingeniero en Sistemas y Redes Informáticas",
        feedback: "Es un compañero muy comprometido y dedicado a su formación en ingeniería en sistemas, siempre demuestra una gran capacidad para resolver problemas técnicos y una disposición admirable para colaborar con los demás.",
    },
    {
        name: "Cristian Alemán",
        image: t2,
        profession: "Ingeniero en Sistemas y Redes Informáticas",
        feedback: "Isaías Ortiz es un programador destacado por crear soluciones eficientes, demostrando sus habilidades para resolver problemas complejos y adaptarse a nuevas tecnologías y priorizar la calidad e innovación.",
    },
    {
        name: "Cristina Rodríguez",
        image: t5,
        profession: "Ingeniera en Sistemas y Redes Informáticas",
        feedback: "Brinda siempre con lo requerido y cumple todos los requisitos asignados.",
    },
    {
        name: "Nayeli Pineda",
        image: t6,
        profession: "Técnica en Ingeniería en Sistemas y Redes Informáticas",
        feedback: "Es un buen compañero: Responsable, trabajador y honesto. Se dedica con pasión a su carrera, especialmente en el área de programación. Además, tiene la capacidad de trabajar bajo presión de manera efectiva",
    },
];

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-light-body dark:bg-dark-body p-6 md:p-8 rounded-lg shadow-md text-center mx-auto max-w-2xl">
        <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full mb-4 md:mb-6"
        />
        <h3 className="text-lg md:text-xl font-bold text-light-text dark:text-dark-text">{testimonial.name}</h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{testimonial.profession}</p>
        <p className="text-sm md:text-base text-light-text dark:text-dark-text mt-4 px-4">{testimonial.feedback}</p>
    </div>
);

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        dotsClass: "slick-dots custom-dots", // 🔹 Se define una clase personalizada
        responsive: [
            { breakpoint: 640, settings: { arrows: true, dots: true } },
            { breakpoint: 768, settings: { arrows: true, dots: true } },
            { breakpoint: 1024, settings: { arrows: true, dots: false } }
        ],
    };


    return (
        <section className="py-16 md:py-20 bg-light-body dark:bg-dark-body">
            <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-light-text dark:text-dark-text">
                    Testimonios
                </h2>
                <div className="relative pb-0">
                    <div className="bg-light-body dark:bg-dark-body rounded-lg relative">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} />
                            ))}
                        </Slider>

                        {/* 🔹 Dots debajo de las arrows */}
                        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2">
                            <ul className="custom-dots"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
