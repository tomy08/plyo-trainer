import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
export default defineConfig({
  output: 'server',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  adapter: vercel(),
})
