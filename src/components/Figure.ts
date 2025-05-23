import { Picture } from "./Picture"

export function Figure(
	id: number | string,
	props: {
		class?: string
		imgClass?: string
		caption?: string
		captionClass?: string
		loading?: "lazy" | "eager"
	} = {},
): string {
	const maybeImgClass = props.imgClass ? ` class="${props.imgClass}"` : ""
	const img = /* html */ `<button type="button" aria-label="Display full screen image"${maybeImgClass}>${Picture(id, { height: props.class?.includes("col-span-3") ? 900 : undefined, loading: props.loading })}</button>`

	const caption = props.caption ? `<figcaption class="mb-16 md:mb-0 ${props.captionClass || ""}">${props.caption}</figcaption>` : ""

	const maybeClass = props.caption ? "grid-cols-subgrid" : ""
	return /* html */ `<figure class="p-px grid gap-y-4 ${maybeClass} ${props.class || ""}">${img}${caption}</figure>`
}
