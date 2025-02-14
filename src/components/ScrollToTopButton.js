import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-light-primary dark:bg-dark-link text-white p-3 rounded-full shadow-lg 
          transition-transform duration-300 hover:scale-110 hover:bg-light-link dark:hover:bg-dark-link 
          flex items-center justify-center z-[999] pointer-events-auto"
          style={{
            zIndex: 9999, // Asegura que esté por encima de otros elementos
            bottom: '20px', // Ajusta la posición según necesites
            right: '20px',
          }}
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
