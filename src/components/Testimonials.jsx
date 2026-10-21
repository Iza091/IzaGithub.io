import { ExternalLink } from "lucide-react";
import { useTraduccion, combinar } from "../TraduccionContext";
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
    profession: "Ing. en Sistemas y Redes Informáticas",
    role: "UX/UI Designer",
    feedback:
      "Es un buen compañero: Responsable, trabajador y honesto. Se dedica con pasión a su carrera, especialmente en el área de programación. Además, tiene la capacidad de trabajar bajo presión de manera efectiva",
    portfolioUrl: "https://ashnay24.github.io/RCR-Corporation/",
  },
  {
    name: "Maurico Vásquez",
    image: t4,
    profession: "Ing. en Sistemas y Redes Informáticas",
    role: "QA Tester",
    feedback:
      "Isaías es una persona con muchos conocimientos de programación, he tenido el gusto de trabajar con él y he podido ver qué es alguien muy capaz",
    portfolioUrl: "https://mauriciora.com/",
  },
  {
    name: "Wilson Guitierres",
    image: t7,
    profession: "Ing. en Sistemas y Redes Informáticas",
    role: "Full Stack Developer",
    feedback:
      "Trabajar con Isaías es genial. Aprende rápido cualquier tecnología, asume los retos con entusiasmo y siempre aporta una actitud amable y colaborativa al equipo.",
    portfolioUrl: "https://wilsonsite.netlify.app/",
  },
];

const TestimonialCard = ({ testimonial }) => {
  const { t } = useTraduccion();
  return (
  <div className="dz-card bg-light-body dark:bg-dark-body p-6 md:p-8 rounded-lg shadow-md mx-auto w-full max-w-2xl h-full flex flex-col transition-all duration-300">
    <div className="dz-card-body p-0 text-left flex flex-col flex-1 min-h-0">
      <div className="flex-1 min-h-0 overflow-y-auto flex pr-1 [scrollbar-width:thin]">
        <p className="my-auto text-sm md:text-lg text-light-text dark:text-dark-text leading-relaxed">
          "{testimonial.feedback}"
        </p>
      </div>

      <div className="mt-5 md:mt-6 flex items-center gap-3 md:gap-4 shrink-0">
        <div className="dz-avatar">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full">
            <img src={testimonial.image} alt={testimonial.name} />
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-base md:text-lg font-medium text-light-text dark:text-dark-text truncate">
            {testimonial.name}
          </p>
          <p className="text-sm md:text-base text-light-text/80 dark:text-dark-text/80 leading-snug">
            {testimonial.profession}
          </p>
          {testimonial.role && (
            <p className="text-xs md:text-sm text-light-link dark:text-dark-link truncate">
              {testimonial.role}
            </p>
          )}
        </div>

        {testimonial.portfolioUrl && (
          <a
            href={testimonial.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-sm md:text-base text-light-link underline dark:text-dark-link transition-colors duration-200 shrink-0"
          >
            {t.testimonios.verPortafolio}
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  </div>
  );
};

const Testimonials = () => {
  const { t } = useTraduccion();
  const datos = combinar(testimonials, t.testimonios.items);
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
          {t.testimonios.titulo}
        </h2>

        {/* Swiper Slider */}
        <div className="relative h-[420px] sm:h-[380px] cursor-grab">
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
            {datos.map((testimonial, index) => (
              <SwiperSlide key={index} className="pb-16 flex">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination !bottom-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
