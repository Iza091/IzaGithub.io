module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
      colors: {
        dark: {
          primary: '#3b82f6',
          text: '#ffffff',
          body: '#111827',
          secondaryBg: '#1b2840',
          secondaryBorderSubtle: '#4b5563',
          tertiaryBg: '#2b3050',
          tertiaryBorder: '#343a40',
          link: '#ff0077',
          linkHover: '#2563eb',
        },
        light: {
          primary: '#1e3a8a',
          text: '#000000',
          body: '#ffffff',
          secondaryBg: '#f3f5f6',
          secondaryBorderSubtle: '#e5e7eb',
          tertiaryBg: '#fff3c7',
          tertiaryBorder: '#e2e8f0',
          link: '#1e3a8a',
          linkHover: '#1f5a8a',
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
      });
    },
  ],
};
