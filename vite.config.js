import { defineConfig } from 'vite';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    dotenv.config();
  }

  // Rest of your Vite configuration
});

