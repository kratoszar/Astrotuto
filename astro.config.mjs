import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  // Agrega tu URL de Netlify aquí
  site: 'https://astrootuto.netlify.app',

  integrations: [preact()],
});