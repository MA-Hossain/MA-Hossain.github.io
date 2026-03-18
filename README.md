# Mohammad Arif Hossain — Academic Website

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![Static Export](https://img.shields.io/badge/output-static_export-green)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub_Pages-181717?logo=github)

Personal academic website for Dr. Mohammad Arif Hossain, Assistant Professor in the Department of Engineering Technology at Middle Tennessee State University.

## Stack

- **Next.js 16** — Pages Router, static export (`output: export`)
- **TypeScript**
- **Tailwind CSS v4**
- **Markdown + gray-matter** — content managed via `content/*.md` files

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All site content lives in `content/`:

| File | Description |
|---|---|
| `publications.md` | Selected publications list |
| `projects.md` | Research projects |
| `collaborations.md` | Academic & industry collaborators |

Edit these YAML/Markdown files to update content without touching code.

## Deploy to GitHub Pages

### 1. Set the base path (if deploying to a project page)

If the site will be at `https://<username>.github.io/<repo>/`, update `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/<repo-name>",
  assetPrefix: "/<repo-name>/",
  // ...
};
```

Skip this step if deploying to a custom domain or user/org page (`https://<username>.github.io/`).

### 2. Enable GitHub Pages (GitHub Actions source)

In the repository **Settings → Pages**:
- Source: **GitHub Actions**

### 3. Push to `main`

The included `.github/workflows/deploy.yml` will automatically:
1. Install dependencies
2. Run `npm run build` (outputs static files to `out/`)
3. Upload and deploy to GitHub Pages

The site will be live at `https://<username>.github.io/<repo>/` (or your custom domain).
