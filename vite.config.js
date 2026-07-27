import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Root base: the site's real home is now Railway (pmg.cards), served from
  // the domain root, not GitHub Pages' /Pmg_Website/ subpath. If GitHub
  // Pages needs to keep working too, this has to go back to '/Pmg_Website/'
  // (or be made conditional on an env var) — the two hosts need different
  // values, they can't share one.
  plugins: [react(), tailwindcss()],
})
