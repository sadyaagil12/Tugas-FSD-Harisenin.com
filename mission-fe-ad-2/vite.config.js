import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    server: {
      proxy: {
        "/users": {
          target: "https://mockapi.io", // Ganti dengan URL MockAPI Anda
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/users/, ""),
        },
      },
    },
  },
});
