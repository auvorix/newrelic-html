import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        'dom-viewer': resolve(__dirname, 'dom-viewer.html'),
        'console-lab': resolve(__dirname, 'console-lab.html'),
      }
    }
  }
})
