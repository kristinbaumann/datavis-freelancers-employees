module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
      serif: ["Source Serif Pro", "ui-serif"],
    },
    extend: {
      colors: {
        freelancer: "#1D6996",
        employee: "#d59b03",
      },
    },
  },
  plugins: [],
};
