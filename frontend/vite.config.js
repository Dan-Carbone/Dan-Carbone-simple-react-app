import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Necessary to be accessible outside the container
    port: 3000,
    watch: {
      usePolling: true // Useful in Docker for hot reloading
    }
  }
});