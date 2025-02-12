import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón si se ha bajado 300px
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Agregar evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-light-primary dark:bg-dark-link text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-light-link dark:hover:bg-dark-link flex items-center justify-center"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
