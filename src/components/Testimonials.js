import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import t1 from './img/t1.png';
import t2 from './img/t2.png';
import t5 from './img/t5.png';
import t6 from './img/t6.png';


const testimonials = [
    {
        name: "Miguel Peñalba",
        image: t1,
        profession: "Ingeniero en Sistemas y Redes Informáticas",
        feedback: "Es un compañero muy comprometido y dedicado a su formación en ingeniería en sistemas, siempre demuestra una gran capacidad para resolver problemas técnicos y una disposición admirable para colaborar con los demás.",
        portfolioUrl: null
    },
    {
        name: "Cristian Alemán",
        image: t2,
        profession: "Ingeniero en Sistemas y Redes Informáticas",
        feedback: "Isaías Ortiz es un programador destacado por crear soluciones eficientes, demostrando sus habilidades para resolver problemas complejos y adaptarse a nuevas tecnologías y priorizar la calidad e innovación.",
        portfolioUrl: null
    },
    {
        name: "Cristina Rodríguez",
        image: t5,
        profession: "Ingeniera en Sistemas y Redes Informáticas",
        feedback: "Brinda siempre con lo requerido y cumple todos los requisitos asignados.",
        portfolioUrl: null
    },
    {
        name: "Nayeli Pineda",
        image: t6,
        profession: "Técnica en Ingeniería en Sistemas y Redes Informáticas",
        feedback: "Es un buen compañero: Responsable, trabajador y honesto. Se dedica con pasión a su carrera, especialmente en el área de programación. Además, tiene la capacidad de trabajar bajo presión de manera efectiva",
        portfolioUrl: "https://ashnay24.github.io/RCR-Corporation/"
    },
];


const TestimonialCard = ({ testimonial }) => (
    <div className="bg-light-body dark:bg-dark-body p-6 md:p-8 rounded-lg shadow-md text-center mx-auto max-w-2xl transition-all duration-300">
        <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full mb-4 md:mb-6 border-4 border-light-primary dark:border-dark-link"
        />
        <h3 className="text-lg md:text-xl font-bold text-light-text dark:text-dark-text">{testimonial.name}</h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{testimonial.profession}</p>
        <p className="text-sm md:text-base text-light-text dark:text-dark-text mt-4 px-4">{testimonial.feedback}</p>

        {testimonial.portfolioUrl && (
            <a
                href={testimonial.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-light-link underline dark:text-dark-link transition-colors duration-200"
            >
                Ver Portafolio
            </a>
        )}
    </div>
);

const Testimonials = () => {
    return (
        <section className="py-16 md:py-20 bg-light-body dark:bg-dark-body">
            <div className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-light-text dark:text-dark-text">
                    Testimonios
                </h2>

                {/* Swiper Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={100} // 🔹 Espaciado entre testimonios
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true, el: '.swiper-pagination' }}
                        autoplay={{ delay: 7000, disableOnInteraction: false }}
                        className="relative"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard testimonial={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Paginación personalizada */}
                    <div className="swiper-pagination mt-8 flex justify-center"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
