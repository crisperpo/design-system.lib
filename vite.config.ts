import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import { peerDependencies } from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ insertTypesEntry: true, exclude: ['**/*.stories.ts', '**/*.test.ts'] })
  ],
  build: { 
    lib: { 
      entry: './src/index.ts', 
      name: 'ui', 
      fileName: (format) => `ui.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    }, 
    rollupOptions: { 
      external: Object.keys(peerDependencies), 
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } } 
    }
  },
})
