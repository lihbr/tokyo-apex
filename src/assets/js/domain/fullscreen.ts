import { getPicture, PictureMeta } from "../../../components/Picture"

const $dialog = document.querySelector("#image-preview") as HTMLDialogElement
const $dialogCloseButton = $dialog.querySelector("figure>button") as HTMLButtonElement
const $dialogImg = $dialog.querySelector("figure>button>img") as HTMLImageElement
const $dialogFigcaption = $dialog.querySelector("figure>figcaption") as HTMLElement
const $dialogOpenButtons = document.querySelectorAll("section figure>button") as NodeListOf<HTMLButtonElement>

$dialogOpenButtons.forEach(($dialogOpenButton) => {
	$dialogOpenButton.addEventListener("click", () => {
		const id = ($dialogOpenButton.children[0] as HTMLImageElement).dataset.id!
		const picture = getPicture(id)

		$dialogImg.width = picture.dimensions.width
		$dialogImg.height = picture.dimensions.height
		$dialogImg.src = picture.url
		$dialogImg.dataset.id = id
		$dialogCloseButton.style.aspectRatio = `${picture.dimensions.width}/${picture.dimensions.height}`
		$dialogFigcaption.innerHTML = PictureMeta(id)

		// Update scrollbar width as opening the dialog will lock scroll
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
		document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`)

		$dialog.showModal()
		$dialog.scrollTo({ top: 0, behavior: "instant" })
	})
})

$dialogCloseButton.addEventListener("click", () => {
	$dialog.close()
})

