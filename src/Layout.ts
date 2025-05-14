const URL = "https://lucie.tokyo"
const TITLE = "lucie→tokyo"
const META_TITLE = TITLE
const META_DESCRIPTION = "An online photography exhibition by Lucie Haberer."
const META_IMAGE = "https://images.prismic.io/lihbr/aB-FaSdWJ-7kR3dj_tokyo-apex.png?auto=format"

const STRUCTURED_DATA: unknown[] = [
	{
		"@context": "http://schema.org",
		"@type": "WebSite",
		"url": URL,
		"name": META_TITLE,
		"alternateName": TITLE,
	},
]

export function Layout(slot: string): string {
	return /* html */ `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="canonical" href="${URL}" />

			<title>${META_TITLE}</title>
			<meta name="description" content="${META_DESCRIPTION}">

			<meta property="og:site_name" content="${TITLE}">
			<meta property="og:type" content="website">
			<meta property="og:url" content="${URL}">

			<meta property="og:title" content="${META_TITLE}">
			<meta property="og:description" content="${META_DESCRIPTION}">
			<meta property="og:image" content="${META_IMAGE}">

			<meta name="twitter:card" content="summary">

			<script type="application/ld+json">${JSON.stringify(STRUCTURED_DATA)}</script>

			<link rel="icon" href="/favicon.png" type="image/png" />

			<link rel="preload" href="/assets/fonts/geistmono.woff2" as="font" type="font/woff2" crossorigin>
			<link rel="stylesheet" href="/assets/css/style.css" />
		</head>
		<body>
			${slot}
			<script type="module" src="/assets/js/index.ts"></script>
		</body>
	`
}
