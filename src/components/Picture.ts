import type { ImageFieldImage } from "@prismicio/client"
import { asImagePixelDensitySrcSet } from "@prismicio/client"
import pictures from "../../data/pictures.json"

export function getPicture(id: number | string): typeof pictures[keyof typeof pictures] {
	const picture = pictures[id.toString().padStart(4, "0") as keyof typeof pictures]

	if (!picture) {
		throw new Error(`Picture with id ${id} not found`)
	}

	return picture
}

export function Picture(id: number | string, props: { class?: string, height?: number, loading?: "lazy" | "eager" } = {}): string {
	const picture = getPicture(id)

	const { src, srcset } = asImagePixelDensitySrcSet(
		picture as unknown as ImageFieldImage,
		{ auto: ["format"], height: props.height || 600, pixelDensities: [1, 1.5, 2], lossless: true },
	)!
	const maybeClass = props.class ? ` class="${props.class}"` : ""

	return /* html */ `<img src="${src}" srcset="${srcset}" alt="" loading="${props.loading || "lazy"}" width="${picture.dimensions.width}" height="${picture.dimensions.height}" ${maybeClass} data-id="${id}">`
}

export function PictureMeta(id: number | string): string {
	const picture = getPicture(id)

	const camera = /* html */ `<dt class="sr-only">Camera</dt><dd>${picture.camera}</dd>`
	const focalLength = /* html */ `<dt class="sr-only">Focal length</dt><dd>${picture.focalLength}</dd>`
	const aperture = "aperture" in picture
		? /* html */ `<dt class="sr-only">Aperture</dt><dd>${picture.aperture}</dd>`
		: ""
	const film = "film" in picture
		? /* html */ `<dt class="sr-only">Film</dt><dd>${picture.film}</dd>`
		: ""
	const exposure = "exposureTime" in picture
		? /* html */ `<dt class="sr-only">Exposure</dt><dd>${picture.exposureTime}</dd>`
		: ""
	const iso = /* html */ `<div><dt class="inline">ISO</dt> <dd class="inline">${picture.iso}</dd></div>`

	return /* html */ `<dl>${camera}${focalLength}${aperture}${film}${exposure}${iso}</dl>`
}
