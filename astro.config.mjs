import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://vtur.com.br",
  adapter: cloudflare(),
});