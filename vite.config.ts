import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Optimisations de production
        minify: 'esbuild', // Minification rapide et efficace
        // Splitting intelligent du code
        rollupOptions: {
          output: {
            manualChunks: {
              // Séparer les grosses dépendances pour un meilleur cache
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'framer-motion': ['framer-motion'],
              'lucide-icons': ['lucide-react'],
            },
          },
        },
        // Optimisation des chunks
        chunkSizeWarningLimit: 1000,
        // Sourcemaps désactivées en production pour réduire la taille
        sourcemap: false,
      },
      // Optimisations des assets
      assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.webp'],
    };
});
