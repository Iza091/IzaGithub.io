import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import t1 from "./assets/t/t1.png";
import t2 from "./assets/t/t2.png";
import t4 from "./assets/t/t4.png";
import t6 from "./assets/t/t6.png";
import t7 from "./assets/t/t7.png";

const testimonials = [
  {
    name: "Miguel Peñalba",
    image: t1,
    profession: "Ingeniero en Sistemas y Redes Informáticas",
    role: "QA Tester",
    feedback:
      "Es un compañero muy comprometido y dedicado a su formación en ingeniería en sistemas, siempre demuestra una gran capacidad para resolver problemas técnicos y una disposición admirable para colaborar con los demás.",
    portfolioUrl: "https://usis046118.github.io/Portafolio/",
  },
  {
    name: "Cristian Alemán",
    image: t2,
    profession: "Ingeniero en Sistemas y Redes Informáticas",
    feedback:
      "Isaías Ortiz es un programador destacado por crear soluciones eficientes, demostrando sus habilidades para resolver problemas complejos y adaptarse a nuevas tecnologías y priorizar la calidad e innovación.",
    portfolioUrl: null,
  },
  {
    name: "Nayeli Pineda",
    image: t6,
    profession: "Ingeniera en Sistemas y Redes Informáticas",
    role: "UX/UI Designer",
    feedback:
      "Es un buen compañero: Responsable, trabajador y honesto. Se dedica con pasión a su carrera, especialmente en el área de programación. Además, tiene la capacidad de trabajar bajo presión de manera efectiva",
    portfolioUrl: "https://ashnay24.github.io/RCR-Corporation/",
  },
  {
    name: "Maurico Vásquez",
    image: t4,
    profession: "Ingeniero en Sistemas y Redes Informáticas",
    role: "QA Tester",
    feedback:
      "Isaías es una persona con muchos conocimientos de programación, he tenido el gusto de trabajar con él y he podido ver qué es alguien muy capaz",
    portfolioUrl: "https://mauriciora.com/",
  },
  {
    name: "Wilson Guitierres",
    image: t7,
    profession: "Ingeniero en Sistemas y Redes Informáticas",
    role: "Full Stack Developer",
    feedback:
      "Isaías es una persona muy comprometida, adaptable y sin miedo a los desafíos. Tiene una fuerte pasión por la tecnología, tanto en frontend como backend, y aprende con rapidez cualquier nueva herramienta. Destaca por su actitud colaborativa, su disposición a recibir feedback y su amabilidad, lo que lo convierte en un gran compañero de equipo.",
    portfolioUrl: "https://wilsonsite.netlify.app/",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-light-body dark:bg-dark-body p-6 md:p-8 rounded-lg shadow-md text-center mx-auto max-w-2xl transition-all duration-300">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full mb-4 md:mb-6 border-4 border-light-primary dark:border-dark-link"
    />
    <h3 className="text-lg md:text-xl font-bold text-light-text dark:text-dark-text">
      {testimonial.name}
    </h3>
    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
      {testimonial.profession}
    </p>
    {testimonial.role && (
      <p className="text-sm md:text-base text-light-link dark:text-dark-link font-medium mt-1">
        {testimonial.role}
      </p>
    )}
    <p className="text-sm md:text-base text-light-text dark:text-dark-text mt-4 px-4">
      {testimonial.feedback}
    </p>

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
  useEffect(() => {
    if (typeof window !== "undefined" && window.performance) {
      const [pageNav] = performance.getEntriesByType("navigation");
      console.log("Page load time:", pageNav.loadEventEnd - pageNav.startTime);
    }
  }, []);

  return (
    <section className="py-16 md:py-20 bg-light-body dark:bg-dark-body">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text">
          Testimonios
        </h2>

        {/* Swiper Slider */}
        <div className="relative h-[550px] sm:h-[500px] cursor-grab">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            className="h-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Paginación personalizada */}
          <div className="swiper-pagination !bottom-16 md:!bottom-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
