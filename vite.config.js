import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			input: {
				home: fileURLToPath(new URL("./src/pages/home/index.html", import.meta.url))
			}
		}
	},
	root: process.cwd()
});