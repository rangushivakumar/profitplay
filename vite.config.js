import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/profitplay/",
  server: {
    port: 3000,  // Change the default port to 3000
  },
})
