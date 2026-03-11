import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

async function seed() {
  const dataset = "production";
  const projectId = "gtpj1hb9";
  const token =
    "skIUxu6WS6jFtwcKK0Mck1z55vPKFBj003DLceCIez9MorE57ScnR3yQjZ7OLOwGSpkdTlfH00i0gEPab4NGOaG1abYGyUJZmmyCZlALHsk5VUoROTyyvEx0GjJlXIPLhqIyFxT8K8o5aHWTgRB41X1FcDlV6HOJEpDhfkgj2LV58dq30UBz";

  const client = createClient({
    projectId,
    dataset,
    token,
    useCdn: false,
    apiVersion: "2024-01-01",
  });

  const seedFilePath = path.join(process.cwd(), "sanity-seed.json");
  const seedData = JSON.parse(fs.readFileSync(seedFilePath, "utf8"));

  try {
    console.log("Seeding data...");
    const result = await client.createOrReplace(seedData);
    console.log("Data seeded successfully:", result._id);
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
}

seed();
