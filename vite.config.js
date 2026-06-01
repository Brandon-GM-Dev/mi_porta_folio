import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueDevTools()
  ],
  resolve:{
    alias:{
      // Carpetas src 
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@constants": fileURLToPath(new URL("./src/constants", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      "@plugins": fileURLToPath(new URL("./src/plugins", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      
      // Carpeta public
      "@documents": fileURLToPath(new URL("./public/documents", import.meta.url)),
    },
  },
})