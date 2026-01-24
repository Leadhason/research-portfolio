import { groq } from "next-sanity";

export const portfolioQuery = groq`*[_type == "portfolio"][0]{
  hero {
    ...,
    "image": image.asset->url
  },
  sidebar {
    ...,
    "photo": photo.asset->url
  },
  about,
  experience,
  education,
  research,
  skills,
  awards
}`;
