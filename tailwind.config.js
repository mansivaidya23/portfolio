/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F7F5",
        surface: "#FFFFFF",
        border: "#E6E6E2",
        primary: "#202124",
        secondary: "#666666",
        accent: "#2563EB",
        accentHover: "#1D4ED8",
        accentSoft: "#EFF6FF",
        tagBlue: "#EAF2FF",
        tagPurple: "#F0ECFF",
        tagYellow: "#FFF4CC",
        tagGreen: "#E6F4EA",
        tagRed: "#FFE9E6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        workspace: "12px",
        tag: "8px",
        button: "9999px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(32, 33, 36, 0.06)",
        note: "2px 4px 12px rgba(28, 43, 58, 0.08), 0 1px 2px rgba(28, 43, 58, 0.04)",
      },
    },
  },
  plugins: [],
};
