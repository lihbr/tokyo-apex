import { defineAkteApp, defineAkteFile } from "akte"
import { Layout } from "./Layout"

export const app = defineAkteApp({
	files: [
		defineAkteFile().from({
			path: "/",
			render() {
				const h1 = /* html */ `<h1>Hello world!</h1>`

				return Layout([h1].join("\n"))
			},
		}),
	],
})
