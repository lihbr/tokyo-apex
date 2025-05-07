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
						<header class="md:col-start-2 col-span-2 grid grid-cols-2 gap-y-4 slide-enter">
							<h1 class="slide-enter-1">${Logomark({ class: "px-2 h-auto w-auto max-h-12 max-w-full" })}</h1>
							<div class="px-2 space-y-4 col-start-1">
								<p class="slide-enter-2">
									In February 2025, I embarked on a 3-month journey to Tokyo, Japan. I wanted to explore the city, meet friends, and learn about local life.
								</p>
								<p class="slide-enter-3">
									As a hobbyist photographer, I tried capturing things that caught my attention. This website is a collection of my best shots from this trip.
								</p>
								<p class="slide-enter-4">
									<a href="#start" class="after:content-['_→']"><span class="underline">Start</span></a>
								</p>
							</div>
							${Figure(11, { class: "slide-enter-5 self-start" })}
						</header>
					</section>
				`

				const nav = /* html */ `
					<section class="grid grid-cols-2 md:grid-cols-4 min-h-screen content-center py-16">
						<nav class="md:col-start-2 px-2">
							<ul class="list-decimal list-inside">
								<li><a href="#meeting-the-tokyoite" class="underline">Meeting the Tokyoite</a></li>
								<li><a href="#from-above" class="underline">From above...</a></li>
								<li><a href="#and-below" class="underline">...and below</a></li>
								<li><a href="#night-life" class="underline">Night life</a></li>
								<li><a href="#time-for-a-trip" class="underline">Time for a trip</a></li>
								<li><a href="#lets-ride" class="underline">Let's ride</a></li>
								<li><a href="#when-the-rain-begins-to-fall" class="underline">When the rain begins to fall</a></li>
								<li><a href="#shelters-to-rest" class="underline">Shelters to rest</a></li>
								<li><a href="#prepping-for-lights-out" class="underline">Prepping for lights out</a></li>
								<li><a href="#sinking-into-the-scene" class="underline">Sinking into the scene...</a></li>
								<li><a href="#and-lingering-in-fragments" class="underline">...and lingering in fragments</a></li>
							</ul>
						</nav>
						<aside id="start" class="col-start-2 row-start-2 md:col-start-3 px-2 space-y-4 pt-16 mt-16">
							<p>
								i. While browsing, <em class="not-italic underline decoration-dotted">tap any picture</em> to display it full screen. Tap it again to get back to the gallery.</li>
							</p>
						</aside>
					</section>
				`

				const meeting = /* html */ `
					<section class="grid grid-cols-2 md:grid-cols-4 items-start py-16">
						<header class="col-start-2 md:col-start-auto px-2 space-y-4 mb-4">
							<h2 id="meeting-the-tokyoite" class="underline">Meeting the Tokyoite</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, iusto magni. Dolorem, sint? Eum vitae, reprehenderit cumque neque autem voluptatibus! Magni voluptatum id error saepe sequi quibusdam in, hic asperiores?</p>
						</header>
						${Figure(7, { class: "md:-order-1 col-span-2" })}
						${Figure(6, { class: "row-span-2 self-center" })}
						${Figure(12, { class: "row-span-2 self-center" })}
						${Figure(8, { class: "col-span-2" })}
						${Figure(5, { class: "col-span-2 md:col-span-1" })}
						${Figure(9, { class: "row-span-2 self-center col-span-2" })}
						${Figure(10, { class: "col-span-2" })}
					</section>
				`

				const main = /* html */ `<main class="dialog-fade">${[hero, nav, meeting].join("\n")}</main>`

				const dialog = /* html */ `
					<dialog id="image-preview" closedby="any">
						<figure class="md:flex md:justify-center my-4">
							<button type="button" class="block max-h-[calc(100vh-2rem)]" aria-label="Close full screen image">
								${Picture(5)}
							</button>
							<figcaption class="text-sm px-2 mt-4 md:mt-0 md:shrink-0 max-w-1/2">
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
