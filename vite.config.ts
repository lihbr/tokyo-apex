import * as path from "node:path"

import tailwindcss from "@tailwindcss/vite"
import akte from "akte/vite"
import { defineConfig } from "vite"

import glsl from "vite-plugin-glsl"

import { app } from "./src/akte.app"

export default defineConfig({
	root: path.resolve(__dirname, "src"),
	build: {
		cssCodeSplit: false,
		emptyOutDir: true,
		outDir: path.resolve(__dirname, "dist"),
		rollupOptions: {
			output: {
				entryFileNames(chunkInfo) {
					// Files being the unique user of a script requires special handling
					// of their chunk name for Akte and Vite build to match
					if (chunkInfo.moduleIds.some((id) => id.endsWith(".ts"))) {
						return `assets/js/${chunkInfo.name.replace(".html", "")}.js`
					}

					return "assets/js/[name].js"
				},
				chunkFileNames: "assets/js/[name].js",
				assetFileNames(assetInfo) {
					const extension = assetInfo.name?.split(".").pop()

					switch (extension) {
						case "css":
							return "assets/css/[name][extname]"

						case "woff":
						case "woff2":
							return "assets/fonts/[name][extname]"

						default:
							return "assets/[name][extname]"
					}
				},
			},
		},
	},
	plugins: [akte({ app }), tailwindcss(), glsl({ minify: true })],
})
