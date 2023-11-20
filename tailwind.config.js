/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#0040E6",
      secondary: "#FFC700",
      light: "#FFFFFF",
      dark: "#000000",  
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {
      backgroundImage: {
        "banner-img": "url('/src/assets/images/banner.jpg')",
      },
    },
    fontFamily: {
      popoins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};

