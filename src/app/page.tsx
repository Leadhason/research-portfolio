import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";
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
          <Sidebar data={portfolio.sidebar} />
          <div className="flex-1 overflow-visible">
            <About data={portfolio.about} />
            <Experience
              experience={portfolio.experience}
              education={portfolio.education}
            />
            <Research data={portfolio.research} />
            <Skills data={portfolio.skills} />
            <Awards data={portfolio.awards} />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
