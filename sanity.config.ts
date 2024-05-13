// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

export default defineConfig({
	name: "Blog", // Can be whatever
	title: "Blog", // Can be whatever
	projectId: projectId,
	dataset: dataset,
	plugins: [structureTool()],
	schema: {
		types: []
	}
});
