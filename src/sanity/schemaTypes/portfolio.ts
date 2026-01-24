import { defineType, defineField } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio Settings",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "intro", type: "string", title: "Intro Text" }),
        defineField({ name: "name", type: "string", title: "Main Name" }),
        defineField({ name: "bio", type: "text", title: "Short Bio" }),
        defineField({ name: "cta", type: "string", title: "CTA Button Text" }),
        defineField({
          name: "image",
          type: "image",
          title: "Hero Image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "sidebar",
      title: "Sidebar Settings",
      type: "object",
      fields: [
        defineField({ name: "name", type: "string", title: "Display Name" }),
        defineField({
          name: "photo",
          type: "image",
          title: "Profile Photo",
          options: { hotspot: true },
        }),
        defineField({
          name: "contact",
          type: "object",
          fields: [
            defineField({ name: "phone", type: "string" }),
            defineField({ name: "email", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About Me",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "string" }),
        defineField({
          name: "paragraphs",
          type: "array",
          of: [{ type: "text" }],
        }),
        defineField({
          name: "details",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", type: "string" }),
                defineField({ name: "value", type: "string" }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "period", type: "string" }),
            defineField({ name: "company", type: "string" }),
            defineField({ name: "role", type: "string" }),
            defineField({ name: "group", type: "string" }),
            defineField({ name: "description", type: "text" }),
          ],
        },
      ],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "period", type: "string" }),
            defineField({ name: "company", type: "string" }),
            defineField({ name: "role", type: "string" }),
            defineField({ name: "group", type: "string" }),
            defineField({ name: "description", type: "text" }),
          ],
        },
      ],
    }),
    defineField({
      name: "research",
      title: "Research & Publications",
      type: "object",
      fields: [
        defineField({ name: "badge", type: "string" }),
        defineField({
          name: "featured",
          type: "object",
          fields: [
            defineField({ name: "date", type: "string" }),
            defineField({ name: "journal", type: "string" }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "authors", type: "string" }),
            defineField({ name: "abstract", type: "text" }),
            defineField({ name: "link", type: "string" }),
          ],
        }),
        defineField({
          name: "others",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "date", type: "string" }),
                defineField({ name: "title", type: "string" }),
                defineField({ name: "authors", type: "string" }),
                defineField({ name: "journal", type: "string" }),
                defineField({ name: "link", type: "string" }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "category", type: "string" }),
            defineField({
              name: "items",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "awards",
      title: "Awards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "year", type: "string" }),
            defineField({ name: "badge", type: "string" }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text" }),
          ],
        },
      ],
    }),
  ],
});
