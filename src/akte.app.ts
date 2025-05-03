import { defineAkteApp, defineAkteFile } from "akte"
import { Layout } from "./Layout"

export const app = defineAkteApp({
	files: [
		defineAkteFile().from({
			path: "/",
			async data() {
				return {}
			},
			render(context) {
				const h1 = /* html */ `<h1 class="text-3xl font-bold underline">Hello world!</h1>`

				return Layout([h1].join("\n"))
			}
		})
	]
})
