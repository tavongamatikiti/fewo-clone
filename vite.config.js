import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Automatically find all HTML files in the 'pages' directory
const pagesDir = resolve(__dirname, 'pages');
const entries = Object.fromEntries(
  fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.html'))
    .map(file => [file.replace('.html', ''), resolve(pagesDir, file)])
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: entries
    }
  }
});
