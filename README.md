# TanStack Start + React Three Fiber template

Starter for 3D web apps: [TanStack Start](https://tanstack.com/start) (React, file-based routing, SSR) with
[React Three Fiber](https://r3f.docs.pmnd.rs/), [drei](https://drei.docs.pmnd.rs/) and Tailwind CSS 4.

## Use this template

Click **Use this template** on GitHub, or:

```bash
npx degit mikespineu/tanstack-start-r3f-template my-app
cd my-app
```

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
- `AGENTS.md` – TanStack skill mappings for AI coding agents

## Notes

- Dependencies are pinned to exact versions.
- Devtools are stripped from production builds.
