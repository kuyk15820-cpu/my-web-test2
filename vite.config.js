import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin() // เพิ่มตัวนี้เพื่อรวม CSS เข้าไปในไฟล์ JS ทั้งหมด
  ],
  base: './',
})
