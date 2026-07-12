import React, { useState } from "react";
import { COURSE_CLASSES } from "../data";
import { Calendar, MapPin, User, ChevronDown, ChevronUp, Clock, Filter } from "lucide-react";

export default function Syllabus() {
  const [selectedSection, setSelectedSection] = useState<string>("全部");
  const [expandedClasses, setExpandedClasses] = useState<Record<number, boolean>>({
    1: true, // open the first class by default
  });

  const sections = ["全部", "教育公共性", "自我探索", "走向人群", "接受合理風險"];

  const filteredClasses = selectedSection === "全部"
    ? COURSE_CLASSES
    : COURSE_CLASSES.filter((c) => c.section === selectedSection);

  const toggleExpand = (id: number) => {
    setExpandedClasses((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getSectionBadgeColor = (section: string) => {
    switch (section) {
      case "教育公共性":
        return "bg-forest/10 text-forest-dark border-forest/20";
      case "自我探索":
        return "bg-earth/10 text-earth border-earth/20";
      case "走向人群":
        return "bg-moss/10 text-forest-dark border-moss/20";
      default:
        return "bg-sap/25 text-forest-dark border-sap/30";
    }
  };

  return (
    <section id="syllabus" className="py-24 bg-white border-b border-earth/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#F2F4E8] text-forest px-4 py-1 rounded-full text-xs font-semibold tracking-wider border border-moss/20">
            <span>Syllabus & Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark tracking-tight font-serif">
            九堂系統化思辨與實踐課程
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            融合實體深度對話與線上同步學習，從 2026 年 8 月跨越至 2027 年 1 月，四大模組環環相扣，共同建構自主學習生命網。
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-sans mr-2 hidden sm:flex font-bold">
            <Filter className="h-3.5 w-3.5 text-moss" />
            <span>模組篩選：</span>
          </div>
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer border ${
                selectedSection === section
                  ? "bg-forest text-white border-forest shadow-sm"
                  : "bg-[#FDFDFB] text-earth border-earth/10 hover:border-moss hover:text-forest"
              }`}
            >
              {section === "全部" ? "顯示全部" : section}
            </button>
          ))}
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredClasses.map((item, index) => {
            const isExpanded = !!expandedClasses[item.id];
            return (
              <div
                key={item.id}
                className="bg-[#FDFDFB] rounded-2xl border border-earth/10 overflow-hidden transition-all duration-300 hover:border-moss/40 group shadow-sm hover:shadow-md"
              >
                {/* Header click bar */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-serif bg-[#F2F4E8] text-forest px-2.5 py-0.5 rounded-full font-bold border border-moss/20">
                        課次 {item.id}
                      </span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-bold font-sans ${getSectionBadgeColor(item.section)}`}>
                        {item.section}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-forest-dark group-hover:text-forest transition-colors duration-200 flex items-center gap-2 font-serif">
                      {item.title}
                    </h3>
                  </div>

                  {/* Date and actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-6">
                    <div className="text-left sm:text-right">
                      <p className="text-xs font-mono font-bold text-forest flex items-center gap-1 sm:justify-end">
                        <Calendar className="h-3 w-3 text-moss" />
                        {item.time.split(" ")[0]}
                      </p>
                      <p className="text-xs text-slate-500 font-mono">
                        {item.time.split(" ").slice(1).join(" ")}
                      </p>
                    </div>

                    <div className="text-slate-400 group-hover:text-forest transition-colors">
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </div>
                </div>

                {/* Collapsible Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-earth/5 bg-[#F8F7F2]/40 space-y-4">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.details}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-500 pt-2 font-sans">
                      <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-earth/5">
                        <User className="h-3.5 w-3.5 text-forest flex-shrink-0" />
                        <span>
                          <strong className="text-earth font-bold">主講/引導：</strong>
                          {item.speaker}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-earth/5">
                        <MapPin className="h-3.5 w-3.5 text-earth flex-shrink-0" />
                        <span>
                          <strong className="text-earth font-bold">地點：</strong>
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

