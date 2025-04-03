import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 동적 프록시 설정 함수
const createProxy = (baseURL) => {
  return {
    "/api": {
      target: baseURL, // 기본 백엔드 URL
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""), // '/api' 유지
    },
  };
};

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: createProxy("http://112.222.157.157:5213/api/"), // 기본 URL 설정
  },
});
