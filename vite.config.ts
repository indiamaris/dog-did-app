import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@app': path.resolve(__dirname, './src/app'),
      '@router': path.resolve(__dirname, './src/app/router'),
      '@view': path.resolve(__dirname, './src/view'),
      '@routerRoutes': path.resolve(__dirname, './src/app/router/routes'),
      '@pages': path.resolve(__dirname, './src/view/pages'),
      '@components': path.resolve(__dirname, './src/view/components'),
      'services': path.resolve(__dirname, './src/services'),
      'src': path.resolve(__dirname, './src'),
      '@theme': path.resolve(__dirname, './src/theme'),
      'lib': path.resolve(__dirname, './src/lib'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@context': path.resolve(__dirname, './src/context'),
    },
  },
})
