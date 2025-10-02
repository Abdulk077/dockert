import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    // This is the key change for containerization (Docker, Dev Containers, etc.)
    // It tells Vite to listen on all public network interfaces.
    host: true,
    // You can also explicitly set '0.0.0.0'
    // host: '0.0.0.0',
    ports: 5173, // or whatever port you are using
  },

});
