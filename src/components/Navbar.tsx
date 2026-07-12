import React, { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "活動特色", id: "highlights" },
    { name: "定位契合", id: "marketing" },
    { name: "精彩課次", id: "syllabus" },
    { name: "導師團隊", id: "lecturers" },
    { name: "報名資訊", id: "faq" },
  ];

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "eco-gradient shadow-lg py-3 border-b border-forest/20 text-white"
          : "eco-gradient md:bg-transparent md:shadow-none py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-[#D4E09B] p-1.5 rounded-full shadow-inner transition-all duration-300 group-hover:scale-110">
              <Leaf className="h-4.5 w-4.5 text-forest-dark animate-pulse" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-white tracking-widest">
                ALE 自主學習生態系
              </span>
              <span className="ml-2 text-[10px] font-mono text-forest-dark font-bold uppercase tracking-wider bg-sap px-1.5 py-0.5 rounded-full">
                政大九梯
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="text-sm font-medium text-white/90 hover:text-[#D4E09B] transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </button>
            ))}

            <a
              href="https://urclass.net/AL/signup/signup.php"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-2 bg-[#D4E09B] text-forest-dark hover:bg-white hover:text-forest font-bold text-xs rounded-full tracking-widest transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-center cursor-pointer"
            >
              立即報名
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#D4E09B] p-2 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden eco-gradient border-t border-forest/30 px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-white hover:text-[#D4E09B] hover:bg-white/10 transition-all"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-3 px-3">
            <a
              href="https://urclass.net/AL/signup/signup.php"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-xl font-bold text-sm bg-[#D4E09B] text-forest-dark shadow-md cursor-pointer"
            >
              立即報名
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
