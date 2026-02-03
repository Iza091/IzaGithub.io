import ProfilePhoto from "./assets/iza.webp";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="py-24 bg-gradient-to-b from-light-secondaryBg to-gray-90 dark:from-dark-secondaryBg dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
          Sobre mí:
        </h2>
        <div className="relative flex flex-col md:flex-row items-center p-8 rounded-xl bg-light-body dark:bg-dark-secondaryBg backdrop-blur-sm shadow-lg">
          {/* Imagen */}
          <div className="flex-shrink-0 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-8">
            <img
              src={ProfilePhoto}
              alt="Isaías Ortiz"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <p className="text-lg leading-relaxed text-light-text dark:text-dark-text">
              Ingeniero en Sistemas y Redes Informáticas{" "}
              <a
                className="text-light-link dark:text-dark-link underline"
                href="https://titulos.ugb.edu.sv/Titulo/Validar/8248ded5-202f-453d-a94e-5dd23ef2b642"
                target="_blank"
                rel="noopener noreferrer"
              >
                (UGB Usulután)
              </a>
              <br />
              Especialista en soluciones escalables con base en infraestructura
              de redes. Aplico la disciplina del deporte, el pensamiento lógico
              de los videojuegos y la fluidez del baile para construir software
              de alta calidad. Enfocado en el código limpio, el trabajo en
              equipo y el aprendizaje continuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
