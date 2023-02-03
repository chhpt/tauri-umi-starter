import { defineConfig } from 'umi'

export default defineConfig({
  npmClient: 'pnpm',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
})
