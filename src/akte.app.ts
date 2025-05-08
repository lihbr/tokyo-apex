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
					<section id="hero" class="min-h-screen content-center">
						<h1 class="md:col-start-2 slide-enter-1">${Logomark({ class: "h-auto w-auto max-h-12 max-w-full" })}</h1>
						<div class="col-start-1 md:col-start-2 space-y-4">
							<p class="slide-enter-2">
								In February 2025, I embarked on a 3-month journey to Tokyo, Japan. I wanted to explore the city, meet friends, and learn about local life.
							</p>
							<p class="slide-enter-3">
								As a hobbyist photographer, I tried capturing things that caught my attention. This website is a curated collection of my shots from this trip.
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
						<ul class="col-start-2 md:col-start-3 list-[lower-roman] list-inside">
							<li>
								While browsing, <em class="not-italic underline decoration-dotted">tap any picture</em> to display it full screen. Tap it again to get back to the gallery.
							</li>
						</p>
					</aside>
				`

				const meeting = /* html */ `
					<section id="meeting-the-tokyoite" class="items-start">
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
					<section id="from-above" class="items-start">
						${Heading("from-above", { class: "md:col-start-3" })}
						<p class="col-start-1 md:col-start-4 md:row-start-2">
							Elevated paths span a sea of distant actions, one can only have a small glimpse at under a false sense of control.
						</p>
						${Figure(1, { class: "col-span-2 md:col-start-2" })}
						${Figure(2, { class: "col-span-2" })}
						${Figure(3, {
							class: "col-span-2 md:mt-32",
							imgClass: "col-span-2",
							caption: "Kamakura seaside from Goryo shrine.",
							captionClass: "md:col-start-4"
						})}
						${Figure(4, {
							class: "col-span-2 md:col-start-2",
							imgClass: "col-span-2",
							caption: "Tokyo skyline from Ikebukuro Sunshine's City observatory.",
							captionClass: "col-start-2 md:col-start-auto !mb-0"
						})}
					</section>
				`

				const below = /* html */ `
				<section id="and-below" class="items-start">
					${Heading("and-below", { class: "col-start-2" })}
					<p class="col-start-2">
						Now looking upward, silent geometries still bath in sun, drawing the sky and casting shadows from their high ground.
					</p>
					${Figure(18, { class: "col-span-2" })}
					${Figure(19, {
						class: "col-span-2 md:col-start-2",
						imgClass: "col-span-2",
						caption: "View from Kawagoe.",
						captionClass: "col-start-2 md:col-start-3"
					})}
					${Figure(20, { class: "col-span-2" })}
					${Figure(21, { class: "col-span-2 md:mt-32" })}
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
				<section id="night-life" class="items-start">
					${Heading("night-life", { class: "md:col-start-3" })}
					<p class="col-start-1 md:col-start-3">
						Enshadowed with thungsten glow, a quiet pulse duets with an electric one as people wrap up the day.
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
					<section id="time-for-a-trip" class="items-start">
						${Heading("time-for-a-trip")}
						<p class="col-start-1 md:col-start-3 md:row-start-2">
							None are mandatory — during a week, Kawaguchiko and Nikkō slowed days for shrines, lakes, and peaks to emerge.
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
						${Figure(52, {
							class: "col-span-2 md:col-span-1 md:mt-32",
							imgClass: "col-span-2 md:col-span-1",
							caption: "Nikkō Tōshogū shrine entrance."
						})}
						${Figure(50, { class: "col-span-2" })}
					</section>
				`

				const ride = /* html */ `
					<section id="lets-ride" class="items-start">
						${Heading("lets-ride", { class: "col-start-2 md:col-start-1" })}
						<p class="col-start-2 md:col-start-1">
							Wheels spinning, swiftly passing by — challenging silhouettes with only an instant to share with the shutter.
						</p>
						${Figure(38, { class: "col-span-2" })}
						${Figure(39, {
							class: "col-span-2 md:mt-32",
							imgClass: "col-span-2",
							caption: "As seen through the restaurant's windows."
						})}
						${Figure(40, { class: "col-span-2" })}
						${Figure(41, { class: "col-span-2 md:col-start-2" })}
						${Figure(42, { class: "col-span-2" })}
					</section>
				`

				const rain = /* html */ `
					<section id="when-the-rain-begins-to-fall" class="items-start">
						${Heading("when-the-rain-begins-to-fall", { class: "md:col-start-3" })}
						<p class="col-start-1 md:row-start-2">
							Umbrellas bloom under soft skies — while surfaces shimmer, movement narrows, and attires mute.
						</p>
						${Figure(43, {
							class: "col-span-2 md:col-span-3 md:col-start-1 md:row-start-2",
							imgClass: "col-span-2 md:col-span-3",
							caption: "Challenging focus with freezing hands, near Kita-Ikebukuro."
						})}
						${Figure(44, { class: "col-span-2 md:mt-32" })}
						${Figure(45, { class: "col-span-2" })}
					</section>
				`

				const shelters = /* html */ `
					<section id="shelters-to-rest" class="items-start">
						${Heading("shelters-to-rest", { class: "col-start-2" })}
						<p class="col-start-2">
							Impromptu or well-planned — corners of calm between outings, where moments settle and breath returns.
						</p>
						${Figure(33, { class: "col-span-2" })}
						${Figure(34, {
							class: "col-span-2 md:col-start-2",
							imgClass: "col-span-2",
							caption: "Apartment in Ikebukuro and furniture chaos.",
							captionClass: "md:col-start-2"
						})}
						${Figure(35, { class: "col-span-2" })}
						${Figure(36, { class: "col-span-2 md:mt-32" })}
						${Figure(37, {
							class: "col-span-2 md:col-start-2",
							imgClass: "col-span-2",
							caption: "Calm lodging house in Chōfu.",
							captionClass: "col-start-2 md:col-start-1 !mb-0"
						})}
					</section>
				`

				const suzuka = /* html */ `
					<section id="prepping-for-lights-out" class="items-start">
						${Heading("prepping-for-lights-out", { class: "md:col-start-3" })}
						<p class="col-start-1 md:col-start-3">
							A one-of-a-kind gift to myself — buzzing crowds, roaring in anticipation as machines prepare to stretch their legs.
						</p>
						${Figure(53, {
							class: "col-span-2 md:row-start-2",
							imgClass: "col-span-2",
							caption: "Aston Martin F1 team training pit stops."
						})}
						${Figure(55, { class: "col-span-2 md:col-start-2" })}
						${Figure(54, {
							class: "col-span-2",
							imgClass: "col-span-2",
							caption: "Kimi Antonelli says \"hi\"!"
						})}
						${Figure(57, { class: "col-span-2 md:mt-32" })}
						${Figure(56, {
							class: "col-span-2 md:col-span-3 md:col-start-2",
							imgClass: "col-span-2",
							caption: "Long, but organized queue to catch the bus to the circuit.",
							captionClass: "md:self-end"
						})}
						${Figure(58, { class: "col-span-2 md:col-span-3" })}
					</section>
				`

				const sinking = /* html */ `
					<section id="sinking-into-the-scene" class="items-start">
						${Heading("sinking-into-the-scene", { class: "md:col-start-3" })}
						<p class="col-start-1 md:col-start-3">
							WIP
						</p>
						${Figure(13, { class: "col-span-2" })}
						${Figure(14, { class: "col-span-2" })}
						${Figure(15, { class: "col-span-2" })}
						${Figure(16, { class: "col-span-2" })}
						${Figure(17, { class: "col-span-2" })}
					</section>
				`

				const lingering = /* html */ `
					<section id="and-lingering-in-fragments" class="items-start">
						${Heading("and-lingering-in-fragments", { class: "md:col-start-3" })}
						<p class="col-start-1 md:col-start-3">
							WIP
						</p>
						${Figure(24, { class: "col-span-2" })}
						${Figure(25, { class: "col-span-2" })}
						${Figure(26, { class: "col-span-2" })}
						${Figure(27, { class: "col-span-2" })}
						${Figure(28, { class: "col-span-2" })}
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
					ride,
					rain,
					shelters,
					suzuka,
					sinking,
					lingering,
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
