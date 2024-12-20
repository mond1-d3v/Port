import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
=======
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
>>>>>>> 4e879b15e3b2abba0c00f7298a6fc725012465ea
})
