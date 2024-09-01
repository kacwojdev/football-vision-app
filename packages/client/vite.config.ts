import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      emptyOutDir: false,
      outDir: '../server/public'
    },
    plugins: [react()]
  };
});
