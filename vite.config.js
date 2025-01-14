// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import forms from '@tailwindcss/forms'
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost', // Базовый URL для вашего API
        changeOrigin: true,         // Для изменения источника запроса на сервере
        secure: false,              // Если ваше API использует HTTPS и у вас самоподписанный сертификат
        rewrite: (path) => path.replace(/^\/api/, ''), // Удаляет префикс /api перед проксированием
      },
    },
  },
});

