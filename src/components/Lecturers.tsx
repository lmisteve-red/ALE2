import React from "react";
import { LECTURERS } from "../data";
import { Sparkles, ArrowUpRight, Leaf } from "lucide-react";

export default function Lecturers() {
  const getBadgeGradient = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-forest text-sap border-forest/20";
      case "amber":
        return "bg-earth text-sap border-earth/20";
      default:
        return "bg-moss text-white border-moss/20";
    }
  };

  return (
    <section id="lecturers" className="py-24 bg-ivory border-t border-b border-earth/5 relative overflow-hidden">
      {/* Decorative background lights */}
      <div className="absolute left-[10%] bottom-[5%] w-80 h-80 opacity-[0.03] pointer-events-none">
        <Leaf className="w-full h-full text-forest transform rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#F2F4E8] text-forest px-4 py-1 rounded-full text-xs font-semibold tracking-wider border border-moss/20">
            <span>Guiding Experts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark tracking-tight font-serif">
            生態系引路人：多元專業講師陣容
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            匯集社運倡議、社區大學、薩提爾探索、兒童哲學、親職教育、數位素養、冒險體驗等多元領域講師，引導我們回歸學習的最根本。
          </p>
        </div>

        {/* Lecturers Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LECTURERS.map((lecturer) => (
            <div
              key={lecturer.id}
              className="card-lift bg-white rounded-3xl p-6 border border-earth/10 transition-all duration-300 hover:shadow-lg hover:border-moss/40 group flex flex-col justify-between"
            >
              <div>
                {/* Monogram/Initials Nature Avatar instead of face photo (Strict constraint) */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl ${getBadgeGradient(lecturer.accentColor)} border shadow-sm transform group-hover:rotate-6 transition-transform duration-300 font-serif`}>
                    {lecturer.name.charAt(0)}
                  </div>
                  
                  <span className="text-[10px] font-bold bg-[#F2F4E8] text-forest border border-moss/10 px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:text-earth transition-colors font-sans">
                    Lecturer
                  </span>
                </div>

                {/* Name & Title */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-lg font-bold text-forest-dark flex items-center gap-1.5 group-hover:text-forest transition-colors font-serif">
                    {lecturer.name}
                  </h3>
                  <p className="text-xs font-bold text-earth">
                    {lecturer.title}
                  </p>
                </div>

                {/* Bio text */}
                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-sans">
                  {lecturer.bio}
                </p>
              </div>

              {/* Course Detail Reference link */}
              <div className="pt-4 border-t border-earth/5 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                <span className="truncate pr-2 group-hover:text-slate-600 transition-colors">{lecturer.description}</span>
                <a href="#syllabus" className="text-forest hover:text-earth transition-colors flex-shrink-0">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

