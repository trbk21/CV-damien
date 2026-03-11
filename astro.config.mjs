// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Par défaut 'static'. Changez en 'server' si vous avez besoin de SSR.
  adapter: cloudflare({
    mode: 'directory',
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});