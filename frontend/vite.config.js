import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  
  server: {
    host: '0.0.0.0', // Allows external connections (like your phone)
    port: 5173,      // Default Vite port (change if needed)
  },
});