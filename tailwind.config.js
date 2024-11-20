/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilitar el modo oscuro basado en clases
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores del modo oscuro
        dark: {
          primary: '#3b82f6', // Azul brillante como color principal en modo oscuro
          text: '#ffffff', // Texto principal en blanco
          body: '#111827', // Fondo general oscuro
          secondaryBg: '#1b2840', // Fondo secundario oscuro
          secondaryBorderSubtle: '#4b5563', // Bordes secundarios
          tertiaryBg: '#2b3050', // Fondo terciario oscuro
          tertiaryBorder: '#343a40', // Bordes terciarios
          link: '#ff0077', // Color de enlaces
          linkHover: '#2563eb', // Color de enlaces al pasar el cursor
        },
        // Colores del modo claro
        light: {
          primary: '#1e3a8a', // Azul oscuro como color principal en modo claro
          text: '#000000', // Texto principal en negro
          body: '#ffffff', // Fondo general claro
          secondaryBg: '#f3f5f6', // Fondo secundario claro
          secondaryBorderSubtle: '#e5e7eb', // Bordes secundarios
          tertiaryBg: '#fff3c7', // Fondo terciario claro
          tertiaryBorder: '#e2e8f0', // Bordes terciarios
          link: '#1e3a8a', // Color de enlaces
          linkHover: '#1f5a8a', // Color de enlaces al pasar el cursor
        },
      },
    },
  },
  plugins: [],
};