import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// base: '/' works for Vercel/Netlify.
// For GitHub Pages project site, change to '/<repo-name>/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
});
