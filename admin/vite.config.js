import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',   // bind to loopback
    port: 5174,          // match your script
    strictPort: true     // fail early if 5174 is taken
  }
})
