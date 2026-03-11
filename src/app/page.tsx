import Hero from "@/components/Hero";
import SidebarWrapper from "@/components/SidebarWrapper";
import { client } from "@/sanity/lib/client";
import { portfolioQuery } from "@/sanity/lib/queries";
import { portfolioData as fallbackData } from "@/data/portfolio";

export default async function Home() {
  let data;
  try {
    data = await client.fetch(portfolioQuery);
  } catch (error) {
    console.error("Failed to fetch from Sanity, using fallback:", error);
  }

  const portfolio = data || fallbackData;

  return (
    <div className="flex flex-col min-h-screen">
      <Hero data={portfolio.hero} />
      <main className="bg-white relative z-10 w-full">
        <div className="flex max-w-[1400px] mx-auto relative min-h-screen">
          <SidebarWrapper data={portfolio} />
        </div>
      </main>
    </div>
  );
}
