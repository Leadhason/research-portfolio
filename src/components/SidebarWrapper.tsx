"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import About from "./About";
import Experience from "./Experience";
import Research from "./Research";
import Skills from "./Skills";
import Awards from "./Awards";
import Footer from "./Footer";

export default function SidebarWrapper({ data }: { data: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#1c1b29] z-[120] flex items-center justify-between px-6 border-b border-white/5">
        <span className="text-white font-heading font-bold text-xl uppercase tracking-wider">
          Portfolio
        </span>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white text-2xl focus:outline-none"
        >
          <i className="fas fa-bars"></i>
        </button>
      </header>

      <Sidebar
        data={data.sidebar}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <div className="flex-1 overflow-visible w-full">
        <About data={data.about} />
        <Experience experience={data.experience} education={data.education} />
        <Research data={data.research} />
        <Skills data={data.skills} />
        <Awards data={data.awards} />
        <Footer />
      </div>
    </>
  );
}
