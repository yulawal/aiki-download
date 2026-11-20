import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { brand: "#F97316", amber: "#F59E0B", ink: "#111827", card: "#1F2937", mute: "#9CA3AF" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } } },
    animation: { float: "float 6s ease-in-out infinite" },
  } },
  plugins: [],
} satisfies Config;
