import { defineAkteApp, defineAkteFile } from "akte"

import { Logomark } from "./components/Logomark"
import { Layout } from "./Layout"

export const app = defineAkteApp({
	files: [
		defineAkteFile().from({
			path: "/",
			render() {
				const hero = /* html */ `
					<section id="hero" class="min-h-screen content-center">
						<h1 class="md:col-start-2 slide-enter-1">${Logomark({ class: "h-auto w-auto max-h-12 max-w-full" })}</h1>
						<div class="col-start-1 md:col-start-2 space-y-4 mb-32">
							<p class="slide-enter-2">
								An online exhibition.
							</p>
							<p class="slide-enter-3">
								Live May 14 (Wed.)
							</p>
							<p class="slide-enter-4 mt-32">
								Stay up-to-date:
							</p>
							<ul class="list-[square] list-inside slide-enter-5">
								<li>
									<a href="https://bsky.app/profile/lihbr.com" class="underline underline-offset-2" target="_blank" rel="noreferrer">Bluesky</a>
								</li>
								<li>
									<a href="https://www.instagram.com/lihbr.png" class="underline underline-offset-2" target="_blank" rel="noreferrer">Instagram</a>
								</li>
								<li>
									<a href="mailto:hello@lihbr.com" class="underline underline-offset-2">Mail</a>
								</li>
							</ul>
						</div>
					</section>
				`

				const main = /* html */ `<main class="dialog-fade relative">${[
					hero,
				].join("\n")}</main>`

				return Layout([main].join("\n"))
			},
		}),
	],
})
