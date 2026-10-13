# TanStack Start + React Three Fiber template

[![npm version](https://img.shields.io/npm/v/create-tanstack-r3f)](https://www.npmjs.com/package/create-tanstack-r3f) [![npm downloads](https://img.shields.io/npm/dm/create-tanstack-r3f)](https://www.npmjs.com/package/create-tanstack-r3f) [![license: MIT](https://img.shields.io/github/license/mikespineu/tanstack-start-r3f-template)](LICENSE)

Starter for 3D web apps: [TanStack Start](https://tanstack.com/start) (React, file-based routing, SSR) with
[React Three Fiber](https://r3f.docs.pmnd.rs/), [drei](https://drei.docs.pmnd.rs/) and Tailwind CSS 4.

## Use this template

```bash
npm create tanstack-r3f my-app
```

Equivalent: `npx create-tanstack-r3f my-app`. Then:

```bash
cd my-app
npm install
npm run dev
```

Other options:

- Click **Use this template** on GitHub.
- `npx degit mikespineu/tanstack-start-r3f-template my-app`

## Scripts

```bash
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # production build
npm run preview  # preview production build
npm run test     # Vitest
```

## Project layout

- `src/routes/` – file-based routes (`routeTree.gen.ts` is generated)
- `src/components/` – shared components
- `src/router.tsx` – router setup
- `packages/create-tanstack-r3f/` – the `npm create` CLI (not copied into new projects)
- `AGENTS.md` – TanStack skill mappings for AI coding agents

## Notes

- Dependencies are pinned to exact versions.
- Devtools are stripped from production builds.

## Publishing the CLI

```bash
cd packages/create-tanstack-r3f
npm login
npm publish
```

The CLI downloads this repo's `main` branch, so template changes ship without republishing.

## License

[MIT](LICENSE)
