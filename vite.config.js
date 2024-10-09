import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // If needed, you can explicitly add paths to node modules here
    }
  },
  css: {
    preprocessorOptions: {
      css: {
        // Enable support for CSS imports from node modules
        additionalData: `@import 'react-vertical-timeline-component/style.min.css';`
      }
    }
  }
})
