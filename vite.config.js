import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base:'/2400016090_tekwebprak7_ruang_ekspresi/',
  plugins: [react(),tailwindcss()],
  
})
