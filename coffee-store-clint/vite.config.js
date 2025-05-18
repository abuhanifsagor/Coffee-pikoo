import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


// This is the Vite configuration file
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
