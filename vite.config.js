import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  cacheDir: '.vite-cache',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacyPolicy: 'privacy-policy/index.html',
        termsConditions: 'terms-and-conditions/index.html',
      },
    },
  },
})
