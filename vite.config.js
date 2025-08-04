import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Substitua 'nome-do-repositorio' pelo nome real do seu repositório no GitHub
export default defineConfig({
  base: '/site_infantil/',
  plugins: [react()],
})
