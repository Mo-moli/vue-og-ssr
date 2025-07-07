import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), ssr()],
  ssr: {
    noExternal: ['vite-plugin-ssr'] // 確保 SSR 正常
  }
})
