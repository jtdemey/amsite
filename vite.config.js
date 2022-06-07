import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    cssCodeSplit: false,
		emptyOutDir: true,
    outDir: path.join(process.cwd(), "dist"),
    rollupOptions: {
      input: {
        home: fileURLToPath(
          new URL("./src/pages/home/index.html", import.meta.url)
        ),
      },
    },
  },
  root: path.join(process.cwd(), "src/pages/home"),
});