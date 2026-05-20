import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    plugins: [react()],
    server: isDev ? {
      watch: {
        usePolling: true,
      },
      host: true,
      port: 5173,
    } : {},
  }
})