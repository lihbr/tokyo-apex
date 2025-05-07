import { Picture } from "./Picture"

export function Figure(id: number | string, props: { class?: string, slot?: string } = {}): string {
	const maybeClass = props.class ? ` ${props.class}` : ""

	const img = /* html */ `<button type="button" aria-label="Display full screen image">${Picture(id)}</button>`

	const slot = props.slot ? `<figcaption>${props.slot}</figcaption>` : ""

	return /* html */ `<figure class="p-px grid${maybeClass}">${img}${slot}</figure>`
}
