import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";

import tailwind from "@astrojs/tailwind";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  "",
);

const projectId = PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: projectId,
      dataset: dataset,
      useCdn: false,
      apiVersion: "2024-05-16",
      studioBasePath: "/admin",
    }),
    react(),
    tailwind(),
  ],
});
