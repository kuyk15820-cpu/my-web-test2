import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ใช้ './' เพื่อให้ Relative Path ของไฟล์ CSS/JS อ้างอิงโฟลเดอร์ปัจจุบัน นำไปวางโฟลเดอร์ไหนบนโฮสต์ก็เปิดได้ทันที
})
