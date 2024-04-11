import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { cdn } from 'vite-plugin-cdn2'
// import { Plugin as importToCDN, autoComplete } from 'vite-plugin-cdn-import2'
import externalGlobals from "rollup-plugin-external-globals";
import commonjs from "rollup-plugin-commonjs";
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postcss from "./postcss_config.js";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 3000
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/var.scss";`
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  build: {
    rollupOptions: {
      external: ["vue"],
      plugins: [
        commonjs(),
        externalGlobals({
          vue: "Vue",
        }),
      ],
    },
  }
})
