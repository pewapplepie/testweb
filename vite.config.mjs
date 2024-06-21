// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   build: {
//     outDir: "build",
//   },
//   plugins: [react()],
//   base: process.env.NODE_ENV === 'production' ? '/your-repository-name/' : '/', // Only set base for production
// });

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
    outDir: 'build',
  },
  base: process.env.NODE_ENV === 'production' ? '/testweb/' : '/',
});
