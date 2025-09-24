/**
 * Tailwind CSS configuration for the Fleet Manager clone.
 *
 * The palette values mirror the original application’s colour scheme and
 * typography. You can adjust these values in the theme.extend section to
 * fine‑tune the appearance.
 */
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E24308",     // main orange-red
        blue: "#106eea",        // secondary blue
        secondary: "#323232",   // dark gray text
        muted: "#000000",
        success: "#28a745",
        warning: "#ffc107",
        danger: "#dc3545",
        background: "#f8f9fa",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
};
