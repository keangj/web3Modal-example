import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nodePolyfills from 'rollup-plugin-polyfill-node'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      ...nodePolyfills ({ include: ['node_modules/**/*.js', /node_modules\/.vite\/.*js/] }),
      apply: 'serve'
    }
  ]
})
