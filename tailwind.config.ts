import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#e8ecff",
          200: "#cbd6ff",
          300: "#9fb4ff",
          400: "#6e8dff",
          500: "#4b6bff",
          600: "#2f4ef1",
          700: "#253ec0",
          800: "#1f3599",
          900: "#1c2f7e"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
} satisfies Config;
