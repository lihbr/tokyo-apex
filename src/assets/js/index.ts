import backgroundGLSL from "../glsl/background.glsl"
import { trackEvent } from "./lib/plausible"
import "shader-doodle"

// Page view
trackEvent({ event: "pageView" })

// 2-minute page time goal
setTimeout(async () => {
	await trackEvent({ event: "pageTime:120" })
}, 2 * 60 * 1000)

// Outbound links (using custom solution because Plausible implementation has issues)
document.querySelectorAll("a").forEach((node) => {
	if (node.host !== location.host) {
		const trackOutboundLink = (event: MouseEvent) => {
			trackEvent({
				event: "outboundLink:click",
				props: { url: node.href },
			})

			if (!node.target) {
				event.preventDefault()
				setTimeout(() => {
					location.href = node.href
				}, 150)
			}
		}
		node.addEventListener("click", trackOutboundLink)
		node.addEventListener("auxclick", (event) => {
			if (event.button === 1) {
				trackOutboundLink(event)
			}
		})
	}
})

const $shader = document.createElement("shader-doodle")
$shader.classList.add("block", "w-full", "h-screen", "fixed", "inset-0", "-z-1", "pointer-events-none")

const $script = document.createElement("script")
$script.type = "x-shader/x-fragment"
$script.textContent = backgroundGLSL

$shader.appendChild($script)
document.body.appendChild($shader)
