import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from './img/t1.png';
import t2 from './img/t2.png';
import t5 from './img/t5.png';
import t6 from './img/t6.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 rounded-full
                 bg-light-link dark:bg-dark-link text-white
                 hover:bg-opacity-80 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary
                 dark:focus:ring-dark-link"
        aria-label="Anterior"
    >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 rounded-full
                 bg-light-primary dark:bg-dark-link text-white
                 hover:bg-opacity-80 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary
                 dark:focus:ring-dark-link"
        aria-label="Siguiente"
    >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
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
        profession: "Técnica en Ingenieria en Sistemas y Redes Informáticas",
        feedback: "Es un buen compañero: Responsable, trabajador y honesto. Se dedica con pasión a su carrera, especialmente en el área de programación. Además, tiene la capacidad de trabajar bajo presión de manera efectiva",
    },
];

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-light-body dark:bg-dark-body p-4 md:p-6 lg:p-8 rounded-lg shadow-md text-center mx-auto max-w-2xl">
        <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full mb-4 md:mb-6"
        />
        <h3 className="text-base md:text-lg font-bold text-light-text dark:text-dark-text">
            {testimonial.name}
        </h3>
        <p className="text-xs md:text-sm text-light-text dark:text-dark-text">
            {testimonial.profession}
        </p>
        <p className="text-sm md:text-base text-light-text dark:text-dark-text mt-2 md:mt-4 px-2 md:px-4">
            {testimonial.feedback}
        </p>
    </div>
);

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        dotsClass: "slick-dots",
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    dots: false,
                }
            }
        ],
    };

    return (
        <section className="py-12 md:py-20 bg-light-body dark:bg-dark-body">
            <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-light-text dark:text-dark-text">
                    Testimonios
                </h2>
                
                {/* Contenedor principal del slider */}
                <div className="relative mb-6 md:mb-8">
                    {/* Contenedor de los testimonios */}
                    <div className="bg-light-body dark:bg-dark-body rounded-lg">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;