import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// set base to /portfolio/


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio3d/"
})
