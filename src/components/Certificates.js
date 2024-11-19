import React, { useState, useEffect } from 'react';
import C1 from './img/s1.webp';
import C2 from './img/s2.webp';
import C3 from './img/s3.webp';
import C4 from './img/s4.webp';
import C5 from './img/s5.webp';
import C6 from './img/s6.webp';
import C7 from './img/s7.webp';
import C8 from './img/s8.webp';
import C9 from './img/s9.webp';

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);


// Add this useEffect to handle Escape key
useEffect(() => {
    const handleEscapeKey = (event) => {
        if (event.key === 'Escape' && selectedCertificate) {
            closeModal();
        }
    };

    // Add event listener when a certificate is selected
    if (selectedCertificate) {
        document.addEventListener('keydown', handleEscapeKey);
    }

    // Cleanup the event listener
    return () => {
        document.removeEventListener('keydown', handleEscapeKey);
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
            image: C3
        },
        {
            title: "Master En Tecnología ",
            issuer: "Instituto Nacional de Usulután (INU)",
            date: "2015",
            image: C4
        },
        {
            title: "Competencias Lingüisticas A1",
            issuer: "Universidad Gerardo Barrios (UGB), Usulután",
            date: "2016",
            image: C2
        },
       
        {
            title: "Mantenimiento e Instalación de Computadoras",
            issuer: "Instituto Nacional de Usulután (INU)",
            date: "2016",
            image: C5
        },
        {
            title: "Fundamentos de Aplicación y Desarrollo en HTML5",
            issuer: "Alcaldía Municipal de Usulután",
            date: "2016",
            image: C6
        },
        {
            title: "Aprendiendo Ciencias",
            issuer: "Universidad Gerardo Barrios (UGB), Usulután",
            date: "2017",
            image: C7
        },
        {
            title: "Congreso Latinoamericano de Informática y Comunicaciones (CLIC)",
            issuer: "Universidad Gerardo Barrios (UGB)",
            date: "2021",
            image: C1
        },
        
        {
            title: "Congreso Latinoamericano de Informática y Comunicaciones (CLIC)",
            issuer: "Universidad Gerardo Barrios (UGB)",
            date: "2022",
            image: C8
        },
        {
            title: "Feria de Emprendimiento Tecnológico. ",
            proyect:"Proyecto: MyCouple",
            issuer: "Universidad Gerardo Barrios (UGB), Usulután",
            date: "2022",
            image: C9
        }
    ];

    
    return (
        <section id="certificados" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Certificados</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                            onClick={() => openModal(cert)}
                        >
                            <img 
                                src={cert.image} 
                                alt={cert.title} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                                <span>{cert.proyect}</span>
                                <div className="flex justify-between text-gray-600">
                                    
                                    <span>{cert.issuer}</span>
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Native Modal */}
                {selectedCertificate && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
                        onClick={closeModal}
                    >
                        <div 
                            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={closeModal} 
                                className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black z-10"
                            >
                                ✕
                            </button>
                            <div className="flex flex-col">
                                <img 
                                    src={selectedCertificate.image} 
                                    alt={selectedCertificate.title}
                                    className="w-full max-h-[70vh] object-contain"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-semibold mb-2">{selectedCertificate.title}</h3>
                                    <div className="text-gray-600">
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