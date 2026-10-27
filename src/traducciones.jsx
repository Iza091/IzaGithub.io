const traducciones = {
  es: {
    nav: {
      sobreMi: "Sobre Mi",
      proyectos: "Proyectos",
      habilidades: "Habilidades",
      experiencia: "Experiencia",
      certificados: "Certificados",
      testimonios: "Testimonios",
      contacto: "Contacto",
    },
    hero: {
      titulo: "Isaías Ortiz",
      rol: "Desarrollador Full Stack",
      cv: "Descargar CV",
      frases: [
        `"El código es poesía"`,
        `"Si funciona, no lo toques."`,
        `"Exprésate siempre, podrás encontrar la respuesta dentro de ti." `,
        `"¿Ya intentaste reiniciar?"`,
        `"¡Hola Mundo!"`,
        `" } //Por si se te olvida"`,
        `"Elmo sabe que la programación es como un juego de Lego, pero con más piezas y menos instrucciones."`,
        `"No confíes en nadie que dice que no hay errores en su código, porque seguro que no lo ha probado."`,
      ],
    },
    sobreMi: {
      titulo: "Sobre mí:",
      enlace: "(UGB Usulután)",
      texto: "Ingeniero en Sistemas y Redes Informáticas ",
      texto2:
        "Especialista en soluciones escalables con base en infraestructura de redes. Aplico la disciplina del deporte, el pensamiento lógico de los videojuegos y la fluidez del baile para construir software de alta calidad. Enfocado en el código limpio, el trabajo en equipo y el aprendizaje continuo.",
    },
    experiencia: {
      titulo: "Experiencia Laboral",
      enCurso: "En curso",
      actualidad: "Actualidad",
      items: [
        {
          company: "Programador Cablesat",
          period: "Septiembre 2026 – Actualidad",
          type: "Desarrollador",
          role: "Desarrollador Front-end",
          description:
            "Desarrollador Front-end para la empresa: me encargo de construir y mantener las interfaces web, integrarlas con el backend y agilizar los procesos internos para que las operaciones sean más rápidas.",
        },
        {
          company: "Instructor Taller de Programación Front-end",
          period: "Septiembre 2025 – Noviembre 2025",
          type: "Docencia",
          role: "Desarrollador Front-end e Instructor",
          description:
            "Impartí taller de programación en la Universidad Gerardo Barrios de Usulután, guiando a estudiantes en la creación de proyectos web con React, integración de APIs REST y control de versiones con Git. Fomenté un ambiente colaborativo donde desarrollaron habilidades prácticas de desarrollo front-end.",
        },
        {
          company: "Tecnologías Informáticas Roots",
          period: "Enero 2025 – Agosto 2025",
          type: "Pasantía",
          role: "Desarrollador Back-end a Full Stack",
          description:
            "Durante mi pasantía de 7 meses, de manera remota contribuí al desarrollo de aplicaciones web nacionales e internacionales. Trabajé en equipo de desarrollo con tecnologías como NestJs, ReactJs. En dónde mis habilidades fueron puestas a prueba y mejoradas, aprendiendo a trabajar bajo presión y cumplir con los plazos establecidos.",
        },
      ],
    },
    habilidades: {
      titulo: "Mis Habilidades",
      tecnicas: "Habilidades Técnicas",
      blandas: "Habilidades Blandas",
      valores: "Valores",
      verMasBlandas: "Ver más habilidades blandas",
      verMasValores: "Ver más valores",
      categorias: {
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Bases de datos",
      },
      soft: [
        {
          name: "Comunicación",
          description: "Comunicación efectiva y clara en equipos",
        },
        {
          name: "Trabajo en equipo",
          description: "Colaboración y sinergia grupal",
        },
        {
          name: "Resolución de problemas",
          description: "Análisis y solución creativa de desafíos",
        },
        {
          name: "Gestión del tiempo",
          description: "Organización y productividad eficiente",
        },
        {
          name: "Pensamiento crítico",
          description: "Análisis profundo y toma de decisiones",
        },
        {
          name: "Orientación a objetivos",
          description: "Enfocado en resultados y metas",
        },
      ],
      listaValores: [
        {
          name: "Excelencia",
          description:
            "Búsqueda constante de la máxima calidad en cada proyecto",
        },
        {
          name: "Integridad",
          description: "Compromiso con la honestidad y la ética profesional",
        },
        { name: "Compromiso", description: "Dedicación total al trabajo" },
        {
          name: "Innovación",
          description:
            "Exploración continua de nuevas soluciones y tecnologías",
        },
      ],
    },
    proyectos: {
      titulo: "Proyectos:",
      verDetalles: "Ver detalles",
      codigo: "Código",
      noDisponible: "No disponible",
      noEnlace: "No hay enlace",
      items: [
        {
          title: "SuperKids",
          description: "Una plataforma que educa a los niños sobre los virus.",
          descriptionLong:
            "SuperKids es una plataforma interactiva diseñada para enseñar a los niños qué son los virus, cómo se propagan y cómo prevenirlos de manera segura y divertida. Utiliza elementos visuales atractivos y lenguaje adaptado a su edad para promover hábitos saludables desde temprana edad.",
          role: "Desarrollador Frontend",
        },
        {
          title: "My Couple",
          description:
            "App hecha para mascotas y ayudarles a encontrar su garrita especial",
          descriptionLong:
            "MyCouple es una aplicación innovadora enfocada en conectar mascotas para encontrar su garrita especial. Surge como una solución a la dificultad que enfrentan muchos dueños al buscar un compañero/a adecuado/a para sus mascotas, ofreciendo una plataforma amigable y accesible para facilitar la conexión entre ellas.",
          role: "Desarrollador Frontend",
        },
        {
          title: "Sistema Académico INU",
          description: "Sistema Académico del Instituto Nacional de Usulután",
          descriptionLong:
            "El Sistema Académico INU es una herramienta digital desarrollada para gestionar de forma eficiente la información académica del Instituto Nacional de Usulután. Permite administrar estudiantes, docentes y asignaturas, así como registrar calificaciones y asistencia, mejorando la organización institucional.",
          role: "Desarrollador Backend",
        },
        {
          title: "Pet Shop",
          description: "Todo lo que necesitas para el bienestar de tu mascota.",
          descriptionLong:
            "Es una e-comerse dedicada al bienestar animal. Ofrece una amplia variedad de productos, desde alimentos hasta accesorios para diferentes tipos de mascotas. Incluye funcionalidades como carrito de compras, gestión de inventario y sistema de búsqueda de productos.",
          role: "Desarrollador FullStack",
        },
        {
          title: "Carrot Studio",
          description: "Negocio de compra y venta de productos de tecnología.",
          descriptionLong:
            "Carrot Studio es una e-comerse especializada en productos tecnológicos. Su catálogo incluye dispositivos electrónicos, accesorios inteligentes y soluciones innovadoras para el hogar y el trabajo. La plataforma se enfoca en brindar una experiencia de usuario fluida, con diseño atractivo, animaciones modernas y navegación intuitiva.",
          role: "Desarrollador Frontend",
        },
        {
          title: "Nam Tlakit SV",
          description: "Gastronomía salva doreña con un toque único.",
          descriptionLong:
            "Nam Tlakit SV es una e-comerse enfocada en gastronomía, que ofrece una experiencia culinaria única fusionando sabores tradicionales salvadoreños con técnicas modernas. Su menú incluye una variedad de platos que destacan la riqueza de la gastronomía local, presentados de manera innovadora y atractiva.",
          role: "Desarrollador Frontend",
        },
      ],
    },
    certificados: {
      titulo: "Certificados",
      cats: { Certificados: "Certificados", Diplomas: "Diplomas" },
    },
    testimonios: {
      titulo: "Testimonios",
      verPortafolio: "Portafolio",
      items: [
        {
          profession: "Ingeniero en Sistemas y Redes Informáticas",
          feedback:
            "Es un compañero muy comprometido y dedicado a su formación en ingeniería en sistemas, siempre demuestra una gran capacidad para resolver problemas técnicos y una disposición admirable para colaborar con los demás.",
        },
        {
          profession: "Ingeniero en Sistemas y Redes Informáticas",
          feedback:
            "Isaías Ortiz es un programador destacado por crear soluciones eficientes, demostrando sus habilidades para resolver problemas complejos y adaptarse a nuevas tecnologías y priorizar la calidad e innovación.",
        },
        {
          profession: "Ingeniera en Sistemas y Redes Informáticas",
          feedback:
            "Es un buen compañero: Responsable, trabajador y honesto. Se dedica con pasión a su carrera, especialmente en el área de programación. Además, tiene la capacidad de trabajar bajo presión de manera efectiva",
        },
        {
          profession: "Ingeniero en Sistemas y Redes Informáticas",
          feedback:
            "Isaías es una persona con muchos conocimientos de programación, he tenido el gusto de trabajar con él y he podido ver qué es alguien muy capaz",
        },
        {
          profession: "Ingeniero en Sistemas y Redes Informáticas",
          feedback:
            "Trabajar con Isaías es genial. Aprende rápido cualquier tecnología, asume los retos con entusiasmo y siempre aporta una actitud amable y colaborativa al equipo.",
        },
      ],
    },
    contacto: {
      titulo: "Contacto",
      nombre: "Nombre",
      correo: "Correo",
      asunto: "Asunto",
      mensaje: "Mensaje",
      placeholderMensaje: "Escribe un mensaje...",
      enviar: "Enviar Mensaje",
      enviando: "Enviando...",
      exito: "¡Mensaje enviado con éxito!",
      cancelar: "✕ Cancelar",
    },
    comun: {
      menu: "Menú",
      verMas: "Ver más",
      verMenos: "Ver menos",
      derechos: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      sobreMi: "About Me",
      proyectos: "Projects",
      habilidades: "Skills",
      experiencia: "Experience",
      certificados: "Certificates",
      testimonios: "Testimonials",
      contacto: "Contact",
    },
    hero: {
      titulo: "Isaías Ortiz",
      rol: "Full Stack Developer",
      cv: "Download CV",
      frases: [
        `"Code is poetry"`,
        `"If it works, don't touch it."`,
        `"Always express yourself — you will find the answer within yourself."`,
        `"Have you tried turning it off and on again?"`,
        `"Hello World!"`,
        `" } // In case you forget"`,
        `"Elmo knows programming is like playing with Legos, but with more pieces and fewer instructions."`,
        `"Never trust anyone who says their code has no bugs — they surely haven't tested it."`,
      ],
    },
    sobreMi: {
      titulo: "About me:",
      enlace: "(UGB Usulután)",
      texto: "Systems and Computer Networks Engineer ",
      texto2:
        "Specialist in scalable solutions based on network infrastructure. I apply the discipline of sports, the logical thinking of video games and the fluidity of dance to build high-quality software. Focused on clean code, teamwork and continuous learning.",
    },
    experiencia: {
      titulo: "Work Experience",
      enCurso: "Ongoing",
      actualidad: "Present",
      items: [
        {
          company: "Cablesat Programmer",
          period: "September 2026 – Present",
          type: "Developer",
          role: "Front-end Developer",
          description:
            "Front-end Developer for the company: I build and maintain web interfaces, integrate them with the backend and streamline internal processes to make operations faster.",
        },
        {
          company: "Front-end Programming Workshop Instructor",
          period: "September 2025 – November 2025",
          type: "Teaching",
          role: "Front-end Developer & Instructor",
          description:
            "I led a programming workshop at the Gerardo Barrios University of Usulután, guiding students in building web projects with React, REST API integration and version control with Git. I fostered a collaborative environment where they developed practical front-end skills.",
        },
        {
          company: "Tecnologías Informáticas Roots",
          period: "January 2025 – August 2025",
          type: "Internship",
          role: "Back-end to Full Stack Developer",
          description:
            "During my 7-month, fully remote internship I contributed to the development of national and international web applications. I worked with the development team using NestJS and React, where my skills were put to the test and improved, learning to work under pressure and meet deadlines.",
        },
      ],
    },
    habilidades: {
      titulo: "My Skills",
      tecnicas: "Technical Skills",
      blandas: "Soft Skills",
      valores: "Values",
      verMasBlandas: "Show more soft skills",
      verMasValores: "Show more values",
      categorias: {
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Database",
      },
      soft: [
        {
          name: "Communication",
          description: "Clear and effective communication within teams",
        },
        { name: "Teamwork", description: "Collaboration and group synergy" },
        {
          name: "Problem solving",
          description: "Creative analysis and solution of challenges",
        },
        {
          name: "Time management",
          description: "Efficient organization and productivity",
        },
        {
          name: "Critical thinking",
          description: "In-depth analysis and decision making",
        },
        {
          name: "Goal orientation",
          description: "Focused on results and goals",
        },
      ],
      listaValores: [
        {
          name: "Excellence",
          description: "Constant pursuit of top quality in every project",
        },
        {
          name: "Integrity",
          description: "Commitment to honesty and professional ethics",
        },
        { name: "Commitment", description: "Full dedication to the work" },
        {
          name: "Innovation",
          description:
            "Continuous exploration of new solutions and technologies",
        },
      ],
    },
    proyectos: {
      titulo: "Projects:",
      verDetalles: "View details",
      codigo: "Code",
      noDisponible: "Not available",
      noEnlace: "No link",
      items: [
        {
          title: "SuperKids",
          description: "A platform that teaches children about viruses.",
          descriptionLong:
            "SuperKids is an interactive platform designed to teach children what viruses are, how they spread and how to prevent them in a safe, fun way. It uses attractive visuals and age-appropriate language to promote healthy habits from an early age.",
          role: "Frontend Developer",
        },
        {
          title: "My Couple",
          description:
            "An app for pets to help them find their special pawmate.",
          descriptionLong:
            "MyCouple is an innovative app focused on connecting pets to find their special pawmate. It was born as a solution to the difficulty many owners face when looking for a suitable companion for their pets, offering a friendly, accessible platform to make those connections easier.",
          role: "Frontend Developer",
        },
        {
          title: "INU Academic System",
          description: "Academic system of the National Institute of Usulután",
          descriptionLong:
            "The INU Academic System is a digital tool developed to efficiently manage the academic information of the National Institute of Usulután. It manages students, teachers and subjects, and keeps records of grades and attendance, improving institutional organization.",
          role: "Backend Developer",
        },
        {
          title: "Pet Shop",
          description: "Everything you need for your pet's well-being.",
          descriptionLong:
            "An e-commerce dedicated to animal well-being. It offers a wide variety of products, from food to accessories for different kinds of pets. It includes features such as shopping cart, inventory management and product search.",
          role: "Full Stack Developer",
        },
        {
          title: "Carrot Studio",
          description: "Buy-and-sell business for technology products.",
          descriptionLong:
            "Carrot Studio is an e-commerce specialized in technology products. Its catalog includes electronic devices, smart accessories and innovative solutions for home and work. The platform focuses on delivering a smooth user experience, with attractive design, modern animations and intuitive navigation.",
          role: "Frontend Developer",
        },
        {
          title: "Nam Tlakit SV",
          description: "Salvadoran cuisine with a unique touch.",
          descriptionLong:
            "Nam Tlakit SV is an e-commerce focused on gastronomy, offering a unique culinary experience that fuses traditional Salvadoran flavors with modern techniques. Its menu includes a variety of dishes that highlight the richness of local cuisine, presented in an innovative and attractive way.",
          role: "Frontend Developer",
        },
      ],
    },
    certificados: {
      titulo: "Certificates",
      cats: { Certificados: "Certificates", Diplomas: "Diplomas" },
    },
    testimonios: {
      titulo: "Testimonials",
      verPortafolio: "Portfolio",
      items: [
        {
          profession: "Systems and Computer Networks Engineer",
          feedback:
            "A very committed teammate who is dedicated to his engineering training. He always shows great ability to solve technical problems and a remarkable willingness to collaborate with others.",
        },
        {
          profession: "Systems and Computer Networks Engineer",
          feedback:
            "Isaías Ortiz is a standout programmer who creates efficient solutions, showing his skills to solve complex problems, adapt to new technologies, and prioritize quality and innovation.",
        },
        {
          profession: "Systems and Computer Networks Engineer",
          feedback:
            "He is a good teammate: responsible, hardworking and honest. He devotes himself with passion to his career, especially the programming area. He can also work under pressure effectively.",
        },
        {
          profession: "Systems and Computer Networks Engineer",
          feedback:
            "Isaías has strong programming knowledge. I have had the pleasure of working with him and I could see he is a very capable person.",
        },
        {
          profession: "Systems and Computer Networks Engineer",
          feedback:
            "Working with Isaías is great. He learns any technology quickly, takes on challenges with enthusiasm, and always brings a kind, collaborative attitude to the team.",
        },
      ],
    },
    contacto: {
      titulo: "Contact",
      nombre: "Name",
      correo: "Email",
      asunto: "Subject",
      mensaje: "Message",
      placeholderMensaje: "Write a message...",
      enviar: "Send Message",
      enviando: "Sending...",
      exito: "Message sent successfully!",
      cancelar: "✕ Cancel",
    },
    comun: {
      menu: "Menu",
      verMas: "Show more",
      verMenos: "Show less",
      derechos: "All rights reserved.",
    },
  },
};

export default traducciones;
