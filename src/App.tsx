import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import MarketingTabs from "./components/MarketingTabs";
import Syllabus from "./components/Syllabus";
import Lecturers from "./components/Lecturers";
import FAQAndInfo from "./components/FAQAndInfo";
import HtmlExporter from "./components/HtmlExporter";
import RegistrationModal from "./components/RegistrationModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-stone-950 min-h-screen text-stone-100 selection:bg-emerald-800 selection:text-amber-200">
      {/* Sticky Header */}
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* Course Visual & Introduction */}
        <Hero onOpenModal={() => setModalOpen(true)} />

        {/* 3-Column Highlights with Icons */}
        <Highlights />

        {/* Personal Marketing segment */}
        <MarketingTabs />

        {/* Chronological Syllabus Timeline */}
        <Syllabus />

        {/* Lecturer Profile Cards (Strictly No Headshots) */}
        <Lecturers />

        {/* Technical/Administrative FAQs, locations & bank details */}
        <FAQAndInfo />

        {/* One-click Standalone HTML Exporter to copy offline index.html */}
        <HtmlExporter />
      </main>

      {/* Footer Details */}
      <footer className="bg-stone-950 border-t border-stone-900/80 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-sm text-stone-500 font-sans">
            主辦單位：政大九梯說課型組課課主群
          </p>
          <p className="text-xs text-stone-600 font-mono">
            &copy; {new Date().getFullYear()} 自主學習生態系 (ALE). All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Centered Registration popup Modal */}
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

