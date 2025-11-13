import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(config => {
  const envDir = "./env";
  const envPrefix = ["ENV"];

  return {
    envDir,
    envPrefix,
    server: {
      host: '0.0.0.0',
      allowedHosts: true
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.js',
          // 对于其他静态资源（如图片、字体等）
          assetFileNames: '[name].[ext]',
          format: 'umd'
        }
      }
    }
  };
});
