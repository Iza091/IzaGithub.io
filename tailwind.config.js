/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
      colors: {
        dark: {
          primary: "#3b82f6",
          text: "#ffffff",
          body: "#111827",
          secondaryBg: "#1b2840",
          secondaryBorderSubtle: "#4b5563",
          tertiaryBg: "#2b3050",
          tertiaryBorder: "#343a40",
          link: "#ff0077",
          linkHover: "#2563eb",
        },
        light: {
          primary: "#1d4ed8",
          text: "#1f2937",
          body: "#e5e7eb",
          secondaryBg: "#f9fafb",
          secondaryBorderSubtle: "#cbd5e1",
          tertiaryBg: "#fef9c3",
          tertiaryBorder: "#e2e8f0",
          link: "#1d4ed8",
          linkHover: "#2563eb",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".slick-dots  li button:before": {
          color: "gray",
          fontSize: "12px",
          transition: "color 0.3s ease, transform 0.3s ease",
        },
        ".slick-dots li.slick-active button:before": {
          color: "black",
          transform: "scale(1.3)",
        },

        ".dark .slick-dots li button:before": {
          color: "white",
        },
        ".dark .slick-dots  li.slick-active button:before": {
          color: "yellow",
        },

        "body::-webkit-scrollbar": {
          width: "10px",
        },
        "body::-webkit-scrollbar-thumb": {
          backgroundColor: "var(--tw-scrollbar-thumb)",
          borderRadius: "10px",
        },
        "body::-webkit-scrollbar-track": {
          backgroundColor: "var(--tw-scrollbar-track)",
        },
        ":root": {
          "--tw-scrollbar-thumb": "#1f5a8a",
          "--tw-scrollbar-track": "#f3f5f6",
        },
        ".dark": {
          "--tw-scrollbar-thumb": "#ff0077",
          "--tw-scrollbar-track": "#1b2840",
        },

        ".swiper-pagination": {
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          gap: theme("spacing.2"),
          bottom: `${theme("spacing.8")} !important`,
        },
        ".swiper-pagination-bullet": {
          width: `${theme("spacing.2")} !important`,
          height: `${theme("spacing.2")} !important`,
          backgroundColor: `${theme(
            "colors.light.secondaryBorderSubtle"
          )} !important`,
          opacity: "0.5 !important",
          transition: "all 0.3s !important",
        },
        ".swiper-pagination-bullet-active": {
          width: `${theme("spacing.6")} !important`,
          backgroundColor: `${theme("colors.light.link")} !important`,
          opacity: "1 !important",
          borderRadius: theme("borderRadius.md") + " !important",
        },
        ".dark .swiper-pagination-bullet": {
          backgroundColor: `${theme(
            "colors.dark.secondaryBorderSubtle"
          )} !important`,
        },
        ".dark .swiper-pagination-bullet-active": {
          backgroundColor: `${theme("colors.dark.link")} !important`,
        },

        ".nav-link": {
          position: "relative",
          padding: "0.5rem 0",
        },
        ".nav-link::after": {
          content: '""',
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "0%",
          height: "2px",
          backgroundColor: "#1e3a8a",
          transition: "width 0.3s ease, background-color 0.3s ease",
        },
        ".nav-link:hover::after": {
          width: "100%",
        },
        ".dark .nav-link::after": {
          backgroundColor: "#ff0077",
        },
      });
    },
  ],
};
