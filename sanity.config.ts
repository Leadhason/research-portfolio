import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  // Add and edit the content schema in the './src/sanity/schemaTypes' directory
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton for Portfolio
            S.listItem()
              .title("Portfolio Settings")
              .id("portfolio")
              .child(
                S.document().schemaType("portfolio").documentId("portfolio")
              ),
            // Add other regular types here
            ...S.documentTypeListItems().filter(
              (listItem) => !["portfolio"].includes(listItem.getId()!)
            ),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],
});
