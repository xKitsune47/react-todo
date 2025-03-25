import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), tailwindcss()],
  rules: {
    "react/prop-types": 0,
    "no-unused-vars": "warn",
  },
});
