import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          BASE_URL: process.env.NODE_ENV === 'production' ? '/testweb/' : '/',
        },
      },
    }),
  ],
  build: {
    outDir: 'dist',
  },
  base: process.env.NODE_ENV === 'production' ? '/testweb/' : '/',
});
