import { useCallback, useEffect, useState } from "react";
import C1 from "./assets/cert/c1.webp";
import C10 from "./assets/cert/c10.webp";
import C11 from "./assets/cert/c11.webp";
import C12 from "./assets/cert/c12.webp";
import C13 from "./assets/cert/c13.webp";
import C2 from "./assets/cert/c2.webp";
import C3 from "./assets/cert/c3.webp";
import C4 from "./assets/cert/c4.webp";
import C5 from "./assets/cert/c5.webp";
import C6 from "./assets/cert/c6.webp";
import C7 from "./assets/cert/c7.webp";
import C8 from "./assets/cert/c8.webp";
import C9 from "./assets/cert/c9.webp";
import ShowMoreButton from "./common/ShowMoreButton";

const Certificates = ({
  showAll,
  onShowMore,
  onCategoryChange,
  selectedCertificate,
  setSelectedCertificate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Certificados");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (certificate) => setSelectedCertificate(certificate);
  const closeModal = useCallback(
    () => setSelectedCertificate(null),
    [setSelectedCertificate]
  );

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && selectedCertificate) closeModal();
    };
    if (selectedCertificate) {
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [selectedCertificate, closeModal]);

  const certificates = [
    {
      title: "Junior Tech",
      issuer: "Instituto Nacional de Usulután (INU)",
      date: "2014",
      image: C3,
      category: "Diplomas",
    },
    {
      title: "Master En Tecnología",
      issuer: "Instituto Nacional de Usulután (INU)",
      date: "2015",
      image: C4,
      category: "Diplomas",
    },
    {
      title: "Competencias Lingüísticas A1",
      issuer: "Universidad Gerardo Barrios (UGB)",
      date: "2016",
      image: C2,
      category: "Certificados",
    },
    {
      title: "Mantenimiento e Instalación de Computadoras",
      issuer: "Instituto Nacional de Usulután (INU)",
      date: "2016",
      image: C5,
      category: "Diplomas",
    },
    {
      title: "Fundamentos de Aplicación y Desarrollo en HTML5",
      issuer: "Alcaldía Municipal de Usulután",
      date: "2016",
      image: C6,
      category: "Diplomas",
    },
    {
      title: "Aprendiendo Ciencias",
      issuer: "Universidad Gerardo Barrios (UGB)",
      date: "2017",
      image: C7,
      category: "Diplomas",
    },
    {
      title: "Congreso Latinoamericano de Informática y Comunicaciones (CLIC)",
      issuer: "UGB",
      date: "2021",
      image: C1,
      category: "Diplomas",
    },
    {
      title: "Congreso Latinoamericano de Informática y Comunicaciones (CLIC)",
      issuer: "UGB",
      date: "2022",
      image: C8,
      category: "Diplomas",
    },
    {
      title: "Feria de Emprendimiento Tecnológico.",
      proyect: "Proyecto: MyCouple",
      issuer: "UGB",
      date: "2022",
      image: C9,
      category: "Diplomas",
    },
    {
      title: "Congreso Latinoamericano de Informática y Comunicaciones (CLIC)",
      issuer: "UGB",
      date: "2023",
      image: C10,
      category: "Diplomas",
    },
    {
      title: "Habilidades en la Nube para El Salvador",
      issuer: "Ministerio de Economía",
      date: "2023",
      image: C11,
      category: "Diplomas",
    },
    {
      title: "Concientización sobre la Ciberseguridad",
      issuer: "CERTRIPROF",
      date: "2024",
      image: C12,
      category: "Certificados",
    },
    {
      title: "English Certification",
      issuer: "EF SET",
      date: "2025",
      image: C13,
      category: "Certificados",
    },
  ];

  const filterCertificates = () => {
    const filtered = certificates.filter(
      (c) => c.category === selectedCategory
    );
    return filtered;
  };

  const categories = ["Certificados", "Diplomas"];
  const filteredCertificates = filterCertificates();

  return (
    <section
      id="certificados"
      className="py-20 bg-light-secondaryBg dark:bg-dark-secondaryBg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
          Certificados
        </h2>

        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                onCategoryChange(cat);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedCategory === cat
                  ? "bg-light-link text-white dark:bg-dark-link"
                  : "bg-light-body text-ligth-text dark:bg-dark-body dark:text-dark-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {(isMobile && !showAll
            ? filteredCertificates.slice(0, 3)
            : filteredCertificates
          ).map((cert, index) => (
            <div
              key={index}
              className="bg-light-body dark:bg-dark-body rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">
                  {cert.title}
                </h3>
                {cert.proyect && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {cert.proyect}
                  </p>
                )}
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMobile && filteredCertificates.length > 3 && (
          <ShowMoreButton onClick={onShowMore} isExpanded={showAll} />
        )}

        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-light-body dark:bg-dark-body rounded-lg max-w-4xl w-full relative p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-2xl text-light-text dark:text-dark-link hover:text-red-500 transition-colors duration-200"
              >
                ✕
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-tl-lg mt-8"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-light-text dark:text-dark-text">
                    {selectedCertificate.title}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400">
                    {selectedCertificate.issuer} - {selectedCertificate.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
