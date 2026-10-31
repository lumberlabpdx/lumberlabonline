// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: lumberlabpdx.github.io/lumberlabonline/
  // Swap for the real domain (and drop base) when the site moves.
  site: "https://lumberlabpdx.github.io",
  base: "/lumberlabonline",
  // Match how GitHub Pages serves folders; also keeps the sitemap to one URL per page
  trailingSlash: "always",

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
