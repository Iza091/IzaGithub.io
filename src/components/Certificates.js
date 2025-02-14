import React, { useState, useEffect } from "react";
import C1 from "./img/s1.webp";
import C2 from "./img/s2.webp";
import C3 from "./img/s3.webp";
import C4 from "./img/s4.webp";
import C5 from "./img/s5.webp";
import C6 from "./img/s6.webp";
import C7 from "./img/s7.webp";
import C8 from "./img/s8.webp";
import C9 from "./img/s9.webp";
import C10 from "./img/s10.jpg";
import C11 from "./img/s11.jpg";
import C12 from "./img/s12.jpg";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Todo");

  // Manejo del scroll de fondo cuando el modal está abierto
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden"; // 🔹 Bloquea el scroll del fondo
    } else {
      document.body.style.overflow = "unset"; // 🔹 Restaura el scroll al cerrar
    }

    return () => {
      document.body.style.overflow = "unset"; // 🔹 Asegura que se restaure al desmontar
    };
  }, [selectedCertificate]);

  // Manejo de la tecla ESC para cerrar el modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && selectedCertificate) {
        closeModal();
      }
    };

    if (selectedCertificate) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedCertificate]);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

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
  ];

  const filteredCertificates = certificates.filter((cert) =>
    selectedCategory === "Todo" ? true : cert.category === selectedCategory
  );

  return (
    <section
      id="certificados"
      className="py-20 bg-light-secondaryBg dark:bg-dark-secondaryBg"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
          Certificados
        </h2>

        {/* Filtro de categorías */}
        <div className="flex justify-center mb-8 space-x-4">
          {["Todo", "Certificados", "Diplomas"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-light-link text-white dark:bg-dark-link"
                  : "bg-light-body text-ligth-text dark:bg-dark-body dark:text-dark-text"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
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

        {/* Modal */}
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
                  className="w-full max-h-[70vh] object-contain"
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
