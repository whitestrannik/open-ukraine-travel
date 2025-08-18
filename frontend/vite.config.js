import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Base URL - use relative path for local development, absolute for production
  base: process.env.NODE_ENV === 'production' ? '/open-ukraine-travel/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Ensure assets are properly referenced
    assetsDir: 'assets',
  },
  // Handle client-side routing for GitHub Pages
  server: {
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: '/index.html' }
      ]
    }
  }
})
