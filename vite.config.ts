import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [react()],
  css: {
    // Configurações globais do SASS
    preprocessorOptions: {
      scss: {
        // additionalData: `
        //   @import "src/styles/variables.scss";
        // `,
        // Ativa a compactação do CSS
        outputStyle: "compressed",
        // Ativa a geração de source maps (útil para depuração)
        sourceMap: true,
      },
    },
  },
});
