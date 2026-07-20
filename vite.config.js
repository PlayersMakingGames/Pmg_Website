import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves this repo from /Pmg_Website/, not the domain root —
  // without this, every asset and route resolves against "/" and 404s.
  base: '/Pmg_Website/',
  plugins: [react(), tailwindcss()],
})
