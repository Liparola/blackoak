import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        starter: resolve(__dirname, 'starter-page.html'),
        service: resolve(__dirname, 'service-details.html'),
        portfolio: resolve(__dirname, 'portfolio-details.html'),
      }
    }
  }
})
