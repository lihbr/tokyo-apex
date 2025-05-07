import { asImagePixelDensitySrcSet, ImageFieldImage } from "@prismicio/client"
import { getPicture, PictureMeta } from "../../../components/Picture"

const $dialog = document.querySelector("#image-preview") as HTMLDialogElement
const $dialogCloseButton = $dialog.querySelector("figure>button") as HTMLButtonElement
const $dialogImg = $dialog.querySelector("figure>button>img") as HTMLImageElement
const $dialogFigcaption = $dialog.querySelector("figure>figcaption") as HTMLElement
const $dialogOpenButtons = document.querySelectorAll("section figure>button") as NodeListOf<HTMLButtonElement>


$dialogOpenButtons.forEach(($dialogOpenButton) => {
	$dialogOpenButton.addEventListener("click", () => {
		const $img = ($dialogOpenButton.children[0] as HTMLImageElement)
		const id = $img.dataset.id!
		const picture = getPicture(id)

		$dialogImg.width = picture.dimensions.width
		$dialogImg.height = picture.dimensions.height
		$dialogImg.style.aspectRatio = `${picture.dimensions.width}/${picture.dimensions.height}`
		$dialogImg.src = $img.src
		$dialogImg.srcset = $img.srcset
		$dialogImg.dataset.id = id
		$dialogCloseButton.style.aspectRatio = `${picture.dimensions.width}/${picture.dimensions.height}`
		$dialogFigcaption.innerHTML = PictureMeta(id)

		// Update scrollbar width as opening the dialog will lock scroll
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
		document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`)

		$dialog.showModal()
		$dialog.scrollTo({ top: 0, behavior: "instant" })
		// Update image again to ensure no flash
		$dialogImg.src = $img.src
		$dialogImg.srcset = $img.srcset

		// Use higher quality image
		const windowAspectRatio = window.innerWidth / window.innerHeight
		const pictureAspectRatio = picture.dimensions.width / picture.dimensions.height

		setTimeout(() => {
			const options = { auto: ["format"], pixelDensities: [1, 1.5, 2] } as Exclude<Parameters<typeof asImagePixelDensitySrcSet>[1], undefined>

			if (windowAspectRatio > pictureAspectRatio) {
				options.height = Math.min(Math.ceil(window.innerHeight / 200) * 200, 2400)
			} else {
				options.width = Math.min(Math.ceil(window.innerWidth / 200) * 200, 2400)
			}

			const { src, srcset } = asImagePixelDensitySrcSet(picture as unknown as ImageFieldImage,options)!

			$dialogImg.src = src
			$dialogImg.srcset = srcset
		}, 0)
	})
})

$dialogCloseButton.addEventListener("click", () => {
	$dialog.close()
})

$dialog.addEventListener("close", () => {
	$dialogImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
	$dialogImg.srcset = ""
})
