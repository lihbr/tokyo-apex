const headings = {
	"meeting-the-tokyoite": "Meeting the Tokyoite",
	"from-above": "From above...",
	"and-below": "...and below",
	"night-life": "Night life",
	"time-for-a-trip": "Time for a trip",
	"lets-ride": "Let's ride",
	"when-the-rain-begins-to-fall": "When the rain begins to fall",
	"shelters-to-rest": "Shelters to rest",
	"prepping-for-lights-out": "Prepping for lights out",
	"sinking-into-the-scene": "Sinking into the scene...",
	"and-lingering-in-fragments": "...and lingering in fragments",
} as const

export function Heading(id: keyof typeof headings, props: { class?: string } = {}): string {
	const maybeClass = props.class ? ` class="${props.class}"` : ""

	return /* html */ `<h2${maybeClass}>${headings[id]}</h2>`
}

export function HeadingLink(id: keyof typeof headings): string {
	return /* html */ `<a href="#${id}" class="underline">${headings[id]}</a>`
}
