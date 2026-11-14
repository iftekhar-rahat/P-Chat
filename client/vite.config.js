// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy all /api/* requests to your backend (Render, Render.com, etc.)
    proxy: {
      '/api': {
        target: 'https://your-backend-service.onrender.com', // <-- replace with your actual domain
        changeOrigin: true,
        secure: false,
      },
    },
  },
});