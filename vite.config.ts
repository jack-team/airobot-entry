import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig((_) => {
  const envDir = "./env";
  const envPrefix = ["ENV"];

  return {
    envDir,
    envPrefix,
    server: {
      host: '0.0.0.0',
      allowedHosts: true
    },
    css: {
      postcss: {
        plugins: [autoprefixer(["Last 5 versions"])],
      },
    },
    plugins: [
      cssInjectedByJsPlugin()
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, './src/sdk/index.ts'),
        name: 'AiChatbotSdk',
        fileName: 'sdk',
        formats: ['es', 'umd', 'iife']
      },
      sourcemap: true,
      // 清空输出目录
      emptyOutDir: true
    }
  };
});
