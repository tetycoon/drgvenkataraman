import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssTarget: 'chrome80',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-v26-[hash].js`,
        chunkFileNames: `assets/[name]-v26-[hash].js`,
        assetFileNames: `assets/[name]-v26-[hash].[ext]`
      }
    }
  }
})
