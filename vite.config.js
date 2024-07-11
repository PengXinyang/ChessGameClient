import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({

  plugins: [
      vue(),
      AutoImport({ imports: ["vue", "vue-router"] }), // 配置vue、vue-router的API自动加载
  ],
  // transpileDependencies 表示是否转译 node_modules 中的依赖
  transpileDependencies: true,
  define: {
    'process.env': {}
  },
  // Webpack 配置
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx','.js','.json'],
      alias: {
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@':path.resolve(__dirname,'src'),
        '*': resolve(''),
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'plugins': '@/plugins',
      }
    }
  },

  // 开发服务器配置
  devServer: {
    host: '0.0.0.0',
    port: 8081, // 指定开发服务器运行的端口
    open: true, // 项目启动后自动打开默认浏览器

    // 代理配置，用于解决跨域问题
    proxy: {
      "/api": {
        target: "http://localhost:5173",  // 目标后端服务器地址
        changeOrigin: true, // 是否改变请求源，设置为 true 则请求头中的 host 会被设置为 target
        ws: true, // 是否开启 WebSocket 代理
        pathRewrite: {
          "^/api": "" // 路径重写，移除路径中的 /api 前缀
        }
      },
    },

    // 客户端配置
    client: {
      overlay: false, // 关闭客户端全屏错误提示
    },
  },
});
