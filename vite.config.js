import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Keep Vite's generated cache outside the OneDrive-synced project folder.
  cacheDir: join(tmpdir(), 'awwwardwebsite-vite-cache'),
})
