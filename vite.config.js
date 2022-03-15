import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		cssCodeSplit: false
	},
	root: path.join(process.cwd(), "src")
});