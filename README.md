<p align="center">
  <a href="https://lucie.tokyo">
    <img src="./.github/logo.svg" alt="tokyo-apex" height="128" />
  </a>
</p>

# tokyo-apex

[![Netlify Status][netlify-status-src]][netlify-status-href]
[![Conventional Commits][conventional-commits-src]][conventional-commits-href]
[![CalVer][calver-src]][calver-href]
[![License][license-src]][license-href]

Source code of [lucie.tokyo][lihbr-tokyo], an online photography exhibition.

## Local Setup

```bash
pnpm install
pnpm dev
```

## Stack

- [Akte][akte] - A minimal static site (and file) generator.
- [Vite][vite] - Next Generation Frontend Tooling.
- [Tailwind CSS][tailwindcss] - Utility-first CSS framework.
- [Prismic][prismic][^1] - Headless CMS.
- [Plausible][plausible] - Simple and privacy-friendly analytics.

[^1]: Images were fetched from the [Asset API](prismic-asset) and dumped in [`data/pictures.json`](./data/pictures.json) using a script similar to [this one](https://github.com/lihbr/lihbr-apex/blob/4e74f7efe39fa691cec65436e468f9df1524e807/src/akte/prismic.ts#L182-L317).

## License

[MIT][license] License © 2025-PRESENT [Lucie Haberer][lihbr-github]

<!-- Links -->

[license]: ./LICENSE
[lihbr-github]: https://github.com/lihbr
[lihbr-tokyo]: https://lucie.tokyo
[akte]: https://akte.js.org
[vite]: https://vitejs.dev
[tailwindcss]: https://tailwindcss.com/
[prismic]: https://prismic.io
[prismic-asset]: https://prismic.io/docs/asset-api-technical-reference
[plausible]: https://plausible.io

<!-- Badges -->

[netlify-status-src]: https://api.netlify.com/api/v1/badges/76b223e6-a31d-4ce0-9949-499fc9eca326/deploy-status
[netlify-status-href]: https://app.netlify.com/sites/lihbr-tokyo/deploys
[github-actions-ci-src]: https://github.com/lihbr/lihbr-tokyo/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/lihbr/lihbr-tokyo/actions?query=workflow%3Aci
[conventional-commits-src]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?style=flat&colorA=131010&colorB=f27602&logo=conventionalcommits&logoColor=faf1f1
[conventional-commits-href]: https://conventionalcommits.org
[calver-src]: https://img.shields.io/badge/calver-YY.0M.MICRO-ffb005.svg?style=flat&colorA=131010&colorB=ffb005
[calver-href]: https://calver.org
[license-src]: https://img.shields.io/github/license/lihbr/lihbr-tokyo.svg?style=flat&colorA=131010&colorB=759f53
[license-href]: https://github.com/lihbr/lihbr-tokyo/blob/master/LICENSE
