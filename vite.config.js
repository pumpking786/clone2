import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const repoName = env.VITE_REPO_NAME || "";

  return {
    // 👉 Use subfolder path only in local or GitHub Pages,
    // but root "/" for production (Vercel)
    // base: mode === "production" ? "/" : `/${repoName}/`,
    base: "/picto/",

    plugins: [react(), tailwindcss()],

    server: {
      open: true,
      host: true,
      // proxy (uncomment if you need it later)
      // proxy: {
      //   "/api": {
      //     target: "http://localhost:5000",
      //     changeOrigin: true,
      //     secure: true,
      //   },
      // },
    },
  };
});
