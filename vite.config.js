import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles')
    }
  },
  server: {
    proxy: {
      '/api/submit-inquiry': {
        target: 'https://script.google.com/macros/s/AKfycbxx-OtMrNtzSPP3xMMsIuRV-61u5G17PfLT7D5jH1g6eLvRU07q_lvE8_smPUSbLXDdVw/exec',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
