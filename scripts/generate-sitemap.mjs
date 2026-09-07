// Builds public/sitemap.xml from the pages actually present in the export, so
// the sitemap cannot drift out of sync with the routes the site ships.
import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "out");

// Pages worth ranking above the default. Anything not listed falls back to
// DEFAULT_PRIORITY, so a new route is still included without needing an edit.
const PRIORITY = {
  "/": "1.0",
  "/lab": "0.9",
  "/publications": "0.9",
  "/projects": "0.9",
  "/service": "0.8",
  "/students": "0.7",
  "/contact": "0.6",
};
const DEFAULT_PRIORITY = "0.8";

const CHANGEFREQ = {
  "/contact": "yearly",
};
const DEFAULT_CHANGEFREQ = "monthly";

// Read the origin back out of the built HTML so it always matches the
// canonical tags the site emits, rather than being configured twice.
function resolveSiteUrl() {
  const indexPath = path.join(OUT_DIR, "index.html");
  if (fs.existsSync(indexPath)) {
    const html = fs.readFileSync(indexPath, "utf-8");
    const match = html.match(/<link rel="canonical" href="([^"]+)"/);
    if (match) return match[1].replace(/\/$/, "");
  }
  const fallback =
    process.env.NEXT_PUBLIC_SITE_URL || "https://ma-hossain.github.io";
  return fallback.replace(/\/$/, "");
}

function collectRoutes(dir) {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_next") continue;
      routes.push(...collectRoutes(full));
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;
    if (entry.name === "404.html") continue;

    const rel = path.relative(OUT_DIR, full).split(path.sep).join("/");
    const route = "/" + rel.replace(/\.html$/, "").replace(/(^|\/)index$/, "");
    routes.push(route === "" ? "/" : route);
  }
  return routes;
}

if (!fs.existsSync(OUT_DIR)) {
  console.error("sitemap: no out/ directory, run the build first");
  process.exit(1);
}

const siteUrl = resolveSiteUrl();
const routes = [...new Set(collectRoutes(OUT_DIR))].sort((a, b) => {
  if (a === "/") return -1;
  if (b === "/") return 1;
  return a.localeCompare(b);
});

const body = routes
  .map((route) => {
    const loc = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;
    const changefreq = CHANGEFREQ[route] || DEFAULT_CHANGEFREQ;
    const priority = PRIORITY[route] || DEFAULT_PRIORITY;
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${body}

</urlset>
`;

fs.writeFileSync(path.join(OUT_DIR, "sitemap.xml"), xml);
console.log(`sitemap: wrote ${routes.length} routes for ${siteUrl}`);
