import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://dev-accountax.netlify.app/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), prefetch()]
});