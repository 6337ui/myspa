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
        target: 'http://localhost', // Адрес вашего backend

      },
    },
  },
});
