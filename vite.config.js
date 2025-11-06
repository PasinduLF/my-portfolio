import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Remove console.log in production
      jsxRuntime: 'automatic',
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI components chunk
          'ui-components': [
            './src/components/ui/toaster.jsx',
            './src/components/ui/toast.jsx',
            './src/components/ui/loading-fallback.jsx',
            './src/components/ui/skeleton.jsx',
            './src/components/ui/loading-spinner.jsx',
          ],
          // Analytics chunk
          'analytics': ['./src/lib/analytics.js', './src/components/GoogleAnalytics.jsx'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Minification (esbuild is faster than terser)
    minify: 'esbuild',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
