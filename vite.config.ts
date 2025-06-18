import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Chaitanya-portfolio/', // MUST match GitHub repo name
  plugins: [react()],
});
