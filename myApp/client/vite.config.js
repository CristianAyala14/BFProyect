import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // La URL de tu servidor backend
        changeOrigin: true,
        secure: false,  // Pon esto en false si tu backend no usa HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});