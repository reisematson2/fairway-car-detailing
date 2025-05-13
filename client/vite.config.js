import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    outDir: 'build',
  },
  // Configure image optimization
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // Configure asset handling
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp', '**/*.svg'],
  // Configure server
  server: {
    port: 3000,
    open: true,
  },
});
