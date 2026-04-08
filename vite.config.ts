import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const packageName = id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0];

            if (packageName.startsWith("@")) {
              const scopedPackage = id
                .toString()
                .split("node_modules/")[1]
                .split("/")[1];
              return `vendor-${packageName.replace("@", "")}-${scopedPackage}`;
            }

            return `vendor-${packageName}`;
          }
        },
      },
    },
    chunkSizeWarningLimit: 2000,
   
    minify: "esbuild",

  },
});
