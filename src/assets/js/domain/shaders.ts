import backgroundGLSL from "../../glsl/background.glsl"
import "shader-doodle"

const $shader = document.createElement("shader-doodle")
const $script = document.createElement("script")
$script.type = "x-shader/x-fragment"
$script.textContent = backgroundGLSL

$shader.appendChild($script)
document.body.appendChild($shader)
