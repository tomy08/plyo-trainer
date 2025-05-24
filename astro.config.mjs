import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'server',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
})
