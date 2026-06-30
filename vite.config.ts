import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SuryaConnect/', // 👈 ADD THIS LINE (Replace with your actual GitHub repo name)
})
