import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '::',  // IPv6 wildcard for Burrow Path B
    allowedHosts: true,  // Accept *.burrowapps.com Host header
    hmr: { clientPort: 443, protocol: 'wss' },  // HMR over TLS proxy
  },
})
