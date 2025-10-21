import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Check if we're in Vercel environment
const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  plugins: [react(), runtimeErrorOverlay()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../server/shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  // this config lives inside the `client/` folder so the Vite root should be the folder itself
  root: path.resolve(__dirname),
  build: {
    // For Vercel, output to dist, otherwise to ../dist/public
    outDir: isVercel ? "dist" : path.resolve(__dirname, "../dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
