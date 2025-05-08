import { defineAkteApp, defineAkteFile } from "akte"

import { Figure } from "./components/Figure"
import { Logomark } from "./components/Logomark"
import { Layout } from "./Layout"
import { Picture, PictureMeta } from "./components/Picture"
import { Heading, HeadingLink } from "./components/Heading"

export const app = defineAkteApp({
	files: [
		defineAkteFile().from({
			path: "/",
			render() {
				const hero = /* html */ `
					<section id="hero" class="min-h-screen content-center gap-y-4">
						<h1 class="md:col-start-2 slide-enter-1">${Logomark({ class: "h-auto w-auto max-h-12 max-w-full" })}</h1>
						<div class="col-start-1 md:col-start-2 space-y-4">
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
					</section>
				`

				const nav = /* html */ `
					<nav id="nav" class="section">
						<ul class="md:col-start-2 list-[decimal-leading-zero] list-inside">
							<li>${HeadingLink("meeting-the-tokyoite")}</li>
							<li>${HeadingLink("from-above")}</li>
							<li>${HeadingLink("and-below")}</li>
							<li>${HeadingLink("night-life")}</li>
							<li>${HeadingLink("time-for-a-trip")}</li>
							<li>${HeadingLink("lets-ride")}</li>
							<li>${HeadingLink("when-the-rain-begins-to-fall")}</li>
							<li>${HeadingLink("shelters-to-rest")}</li>
							<li>${HeadingLink("prepping-for-lights-out")}</li>
							<li>${HeadingLink("sinking-into-the-scene")}</li>
							<li>${HeadingLink("and-lingering-in-fragments")}</li>
						</ul>
					</nav>
				`

				const start = /* html */ `
					<aside id="start" class="section">
						<p class="col-start-2 md:col-start-3 ">
							i. While browsing, <em class="not-italic underline decoration-dotted">tap any picture</em> to display it full screen. Tap it again to get back to the gallery.</li>
						</p>
					</aside>
				`

				const meeting = /* html */ `
					<section id="meeting-the-tokyoite" class="items-start gap-y-4">
						${Heading("meeting-the-tokyoite", { class: "col-start-2" })}
						<p class="col-start-2 md:col-start-auto md:row-start-2">
							Focused, still, or always in motion. Framed by daily routines, occasional surprises, and the spaces they inhabit.
						</p>
						${Figure(7, { class: "col-span-2 md:col-start-1 md:row-start-2" })}
						${Figure(6, { class: "md:row-span-2 md:self-center md:row-start-2" })}
						${Figure(12, { class: "md:row-span-2 md:self-center" })}
						${Figure(8, {
							class: "col-span-2",
							imgClass: "col-span-2",
							caption: "Flamingos and yound students at Ueno.",
							captionClass: "col-start-2 md:col-start-3"
						})}
						${Figure(5, { class: "col-span-2 md:col-span-1" })}
						${Figure(9, {
							class: "col-span-2 md:row-span-2 md:self-center",
							imgClass: "col-span-2",
							caption: "Train waiting at Suzuka Circuit Inō Station.",
							captionClass: "md:col-start-4"
						})}
						${Figure(10, { class: "col-span-2" })}
					</section>
				`

				const above = /* html */ `
					<section id="from-above" class="items-start gap-y-4">
						${Heading("from-above", { class: "md:col-start-3" })}
						<p class="col-start-1 md:col-start-4 md:row-start-2">
							Elevated paths spans a sea of distant actions, one can only have a small glimpse at.
						</p>
						${Figure(1, { class: "col-span-2 md:col-start-2" })}
						${Figure(2, { class: "col-span-2" })}
						${Figure(3, {
							class: "col-span-2 md:pt-32",
							imgClass: "col-span-2",
							caption: "Kamakura seaside from Goryo shrine.",
							captionClass: "md:col-start-4"
						})}
						${Figure(4, {
							class: "col-span-2 md:col-start-2",
							imgClass: "col-span-2",
							caption: "Tokyo skyline from Ikebukuro Sunshine's City observatory.",
							captionClass: "col-start-2 md:col-start-auto"
						})}
					</section>
				`

				const below = /* html */ `
				<section id="and-below" class="items-start gap-y-4">
					${Heading("and-below", { class: "col-start-2" })}
					<p class="col-start-2">
						Looking upward at silent geometries, drawing the sky and casting shadows from above.
					</p>
					${Figure(18, { class: "col-span-2" })}
					${Figure(19, {
						class: "col-span-2 md:col-start-2",
						imgClass: "col-span-2",
						caption: "View from Kawagoe.",
						captionClass: "col-start-2 md:col-start-3"
					})}
					${Figure(20, { class: "col-span-2" })}
					${Figure(21, { class: "col-span-2 md:pt-32" })}
					${Figure(22, {
						class: "col-span-2 md:col-span-3",
						imgClass: "col-span-2",
						caption: "Nagoya's castle, as part of one of the trips I made during my stay.",
						captionClass: "md:-order-1 md:text-right"
					})}
					${Figure(23, { class: "col-span-2 md:col-start-3" })}
				</section>
				`

				const night = /* html */ `
				<section id="night-life" class="items-start gap-y-4">
					${Heading("night-life", { class: "md:col-start-3" })}
					<p class="col-start-1 md:col-start-3">
						Bathed in thungsten glow, a quiet pulse duets with an electric one.
					</p>
					${Figure(30, { class: "col-span-2 md:row-start-2" })}
					${Figure(31, { class: "col-span-2 md:col-start-2" })}
					${Figure(29, {
						class: "col-span-2 md:col-span-1 md:row-span-2 self-center",
						imgClass: "col-span-2 md:col-span-1",
						caption: "Shibuya Center-Gai."
					})}
					${Figure(32, { class: "col-span-2" })}
				</section>
				`

				const trip = /* html */ `
					<section id="time-for-a-trip" class="items-start gap-y-4">
						${Heading("time-for-a-trip")}
						<p class="col-start-1 md:col-start-3 md:row-start-2">
							A week away in Kawaguchiko and Nikkō: where the days slowed for shrines, lakes, and peaks to emerge.
						</p>
						${Figure(48, {
							class: "col-span-2 md:col-start-1",
							imgClass: "col-span-2",
							caption: "Mount Fuji behind the pines.",
							captionClass: "col-start-2 md:col-start-auto"
						})}
						${Figure(47, { class: "md:col-span-1 md:row-span-2 md:self-center" })}
						${Figure(51, { class: "md:row-span-2 md:self-center" })}
						${Figure(49, { class: "col-span-2 md:col-start-2" })}
						${Figure(50, { class: "col-span-2 md:col-start-3" })}
						${Figure(52, {
							class: "col-span-2 md:col-span-1 md:col-start-2",
							imgClass: "col-span-2 md:col-span-1",
							caption: "Nikkō Tōshogū shrine entrance."
						})}
					</section>
				`

				const main = /* html */ `<main class="dialog-fade">${[
					hero,
					nav,
					start,
					meeting,
					above,
					below,
					night,
					trip,
				].join("\n")}</main>`

				const dialog = /* html */ `
					<dialog id="image-preview" closedby="any">
						<figure class="md:flex md:justify-center my-4">
							<button type="button" class="block max-h-[calc(100vh-2rem)]" aria-label="Close full screen image">
								${Picture(5)}
							</button>
							<figcaption class="px-2 mt-4 md:mt-0 md:shrink-0 max-w-1/2">
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
