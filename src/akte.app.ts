import { defineAkteApp, defineAkteFile } from "akte"

import { Figure } from "./components/Figure"
import { Logomark } from "./components/Logomark"
import { Layout } from "./Layout"
import { Picture, PictureMeta } from "./components/Picture"

export const app = defineAkteApp({
	files: [
		defineAkteFile().from({
			path: "/",
			render() {
				const hero = /* html */ `
					<section class="grid grid-cols-2 md:grid-cols-4 min-h-screen content-center py-16">
						<header class="md:col-start-2 px-2 space-y-4 slide-enter">
							<h1>${Logomark({ class: "h-auto w-auto max-h-12 max-w-full" })}</h1>
							<p>
								In February 2025, I embarked on a 3-month journey to Tokyo, Japan. I wanted to explore the city, meet friends, and learn.
							</p>
							<p>
								As a hobbyist photographer, I tried capturing things that caught my attention. This website is a collection of my best shots from this trip.
							</p>
						</header>
						${Figure(11, { class: "px-px slide-enter slide-enter-delay-4 pt-16" })}
					</section>
				`

				const tutorial = /* html */ `<section>wip</section>`

				const main = /* html */ `<main class="dialog-fade">${[hero, tutorial].join("\n")}</main>`

				const dialog = /* html */ `
					<dialog id="image-preview" closedby="any">
						<figure class="md:flex md:justify-center m-4">
							<button type="button" class="block max-h-[calc(100vh-2rem)]" aria-label="Close full screen image">
								${Picture(5)}
							</button>
							<figcaption class="text-sm mt-4 md:mt-0 md:ml-4 md:shrink-0">
								${PictureMeta(5)}
							</figcaption>
						</figure>
					</dialog>
				`

				return Layout([main, dialog].join("\n"))
			},
		}),
	],
})
