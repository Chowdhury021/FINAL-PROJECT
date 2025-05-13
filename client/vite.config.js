// client/vite.config.js
import { defineConfig } from 'vite'
import react              from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',   // force Vite to bind to localhost
    port: 5173,          // your client port
    strictPort: true,    // if 5173 is taken, Vite will error instead of fall back
    proxy: {
      // match any `/api/**` or `/images/**` requests in your React code
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/images': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    }
  }
})
