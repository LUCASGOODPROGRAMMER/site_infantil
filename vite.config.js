import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/site_infantil/', // <--- isso é essencial!
  plugins: [react()],
});

