# React UI Components & Mini Apps

A React + TypeScript project built with Vite. The repository contains directories for UI components and mini-apps, including a font tester, QR code generator, and to-do list, plus data display and data entry examples.

> **Project status:** The application source (`src/`), Storybook configuration (`.storybook/`), and public assets (`public/`) were not supplied for this review. The directory names are visible in the project screenshot, but the functioning features and production build have not yet been verified.

## Tech stack

- React 19 and React DOM
- TypeScript 5.9
- Vite 7 with `@vitejs/plugin-react`
- Tailwind CSS 4 with `@tailwindcss/vite`
- Storybook 10 for component development (separate from the production website)
- Vitest and Playwright tooling
- Additional dependencies: Monaco Editor, React Datepicker, `react-qr-code`, React Loader Spinner, and country-data packages

Versions above reflect the provided `package.json` and `package-lock.json`, not necessarily the running environment.

## Project structure

```text
.
├── .storybook/                # Storybook configuration (not uploaded)
├── public/                    # Static assets (not uploaded)
├── src/                       # React application (not uploaded)
│   ├── APPLICATIONS/
│   ├── Apps/
│   │   ├── FontTester/
│   │   ├── QRCode-Generator/
│   │   └── TodoList/
│   ├── DATA DISPLAY/
│   ├── DATA ENTRY/
│   ├── icons/
│   ├── images/
│   ├── style/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.shims.d.ts
├── vercel.json                # Vercel SPA fallback
└── README.md
```

The `src/` and other marked directories are shown in the screenshot but must be present in the actual project folder before building.

## Requirements

- Node.js **20.19 or later on the 20.x line**, or **22.12 or later** (Vite 7's engine requirement; Node 22 LTS is a convenient choice).
- npm (the project includes `package-lock.json`).
- Run commands from the repository root, where `package.json` is located.

Check your environment:

```bash
node --version
npm --version
```

## Install and run locally

```bash
npm ci
npm run dev
```

Visit the URL printed by Vite (usually <http://localhost:5173>).

## Check and create a production build

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` executes the script verified in `package.json`:

```bash
tsc -b && vite build
```

The TypeScript check must succeed before Vite generates `dist/`. The `dist/` directory is the static output that Vercel serves. `npm run preview` opens a local preview of that output; it is not a production server.

**Note:** A build has not been verified for the actual app because the reviewed upload did not include `src/` or locally installed npm dependencies. Please verify this in your complete project directory.

## Storybook (optional)

```bash
npm run start
```

This starts Storybook on port 6006. To build Storybook itself:

```bash
npm run build-storybook
```

The uploaded Storybook log reports that `@storybook/react-vite` and several addons could not be resolved. Although those packages are declared in `package.json` and listed in `package-lock.json`, their installation in the environment that produced the log may have been incomplete or run from an unexpected directory.

First, from the project root, run `npm ci`, then retry `npm run start`. If that fails, inspect `.storybook/main.ts` (or `.storybook/main.js`) and compare the installed packages with the addons referenced there. This Storybook error is not evidence that the main Vite app build must fail.

## Deploy the website to Vercel

### GitHub workflow

1. Make sure the repository includes all application source files, `public/` assets, `package.json`, `package-lock.json`, `index.html`, and configuration files. Never commit `node_modules/` or `dist/`.
2. Run `npm ci` and `npm run build` locally and fix any TypeScript/Vite errors.
3. Commit and push the project to GitHub.
4. Go to <https://vercel.com/new>, select your repository, and create a Vercel project.
5. Verify the settings below, then click **Deploy**.

| Vercel setting | Value |
| --- | --- |
| Framework Preset | **Vite** |
| Root Directory | `./` (or the folder containing `package.json` if this project is in a monorepo) |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js Version | Use a version supported by Vite 7 (e.g. 22.x) |

If the application uses environment variables, set them in the Vercel project settings. Do not store secrets in frontend code or `VITE_` variables, because Vite exposes those values to browser code.

### SPA routing fallback

The accompanying `vercel.json` config is:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

It lets client-side app routes fall back to `index.html` on direct visits or page refreshes. If your site has no client-side routes, it is optional. This is appropriate for a static Vite SPA, not necessarily for an SSR framework.

### Alternative: Vercel CLI

If you prefer to deploy directly from your own computer:

```bash
npx vercel
npx vercel --prod
```

Follow the Vercel CLI authentication/project prompts. This method also requires the full application and successful build.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| `TS18003: No inputs were found` | Ensure `src/` exists and contains your TS/TSX app source. |
| `TS2688: Cannot find type definition file for 'node'` | Run `npm ci` in the project root and ensure dev dependencies, including `@types/node`, are installed. |
| Storybook cannot find `@storybook/react-vite` | Run `npm ci` in the correct project folder and inspect `.storybook/main.ts`. |
| TypeScript reports unused variables | `noUnusedLocals` / `noUnusedParameters` are enabled in the provided TypeScript configuration. Fix the reported source lines before building. |
| Images/favicon missing | Check the `public/` directory and file paths. `index.html` currently references `/vite.svg`, which must exist if kept. |
| Routes return 404 after refresh | Confirm `vercel.json` is in the root of the deployed project. |
| Build works locally but not on Vercel | Check filename capitalization, selected Node.js version, environment variables, and build logs. |

## Deployment checklist

- [ ] Application source (`src/`) and assets (`public/`) are present.
- [ ] `npm ci` completes without errors.
- [ ] `npm run build` succeeds with no TypeScript errors.
- [ ] `npm run preview` shows the intended application.
- [ ] All images and imports work with case-sensitive file paths.
- [ ] The Vercel project points to the correct root directory and outputs `dist/`.
- [ ] Secrets are kept out of the repository and frontend environment variables.

## References

- [Vite](https://vite.dev/guide/)
- [Vercel: Deploying Vite](https://vercel.com/docs/frameworks/frontend/vite)
- [Vercel: `vercel.json`](https://vercel.com/docs/project-configuration/vercel-json)
- [Storybook](https://storybook.js.org/docs)
