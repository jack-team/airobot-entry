import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(config => {
  return {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.js',
          // 对于其他静态资源（如图片、字体等）
          assetFileNames: '[name].[ext]',
        }
      }
    }
  };
});
