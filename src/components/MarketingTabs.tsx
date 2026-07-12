import React, { useState } from "react";
import { MARKETING_COPIES } from "../data";
import { Sparkles, Check, Heart, GraduationCap, Users, ShieldAlert, ArrowUpRight } from "lucide-react";

export default function MarketingTabs() {
  const [activeTab, setActiveTab] = useState(MARKETING_COPIES[0].id);

  const activeCopy = MARKETING_COPIES.find((item) => item.id === activeTab) || MARKETING_COPIES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "parent":
        return <Heart className="h-4 w-4" />;
      case "educator":
        return <GraduationCap className="h-4 w-4" />;
      case "experimental":
        return <Users className="h-4 w-4" />;
      case "change":
        return <Sparkles className="h-4 w-4" />;
      default:
        return <ShieldAlert className="h-4 w-4" />;
    }
  };

  return (
    <section id="marketing" className="py-24 bg-ivory border-t border-b border-earth/5 relative">
      {/* Light glow overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80%] h-[30%] rounded-full bg-sap/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#F2F4E8] text-forest px-4 py-1 rounded-full text-xs font-semibold tracking-wider border border-moss/20">
            <span>Find Your Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark tracking-tight font-serif">
            這門課，是不是寫給你的信？
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            我們針對不同立場與身份的夥伴，寫下了五封真摯的邀請。點選與你最貼近的角色，看看這堂課能如何陪伴你。
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {MARKETING_COPIES.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeTab === item.id
                  ? "bg-forest text-white border-forest shadow-md"
                  : "bg-white text-earth border-earth/10 hover:border-moss hover:bg-[#F2F4E8]/20"
              }`}
            >
              {getIcon(item.id)}
              <span>{item.target}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display Area */}
        <div className="max-w-4xl mx-auto bg-white border border-earth/10 p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-[0.03]">
            <Sparkles className="h-48 w-48 text-moss" />
          </div>

          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-moss uppercase tracking-widest block font-sans">
                {activeCopy.target} 專屬導引
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-forest-dark leading-tight font-serif">
                {activeCopy.headline}
              </h3>
            </div>

            {/* Intro text */}
            <p className="text-slate-700 text-base leading-relaxed border-l-2 border-forest pl-4">
              {activeCopy.intro}
            </p>

            {/* Bullet points */}
            <div className="space-y-4">
              <h4 className="text-earth font-bold text-sm tracking-wide uppercase">
                🌱 這堂課如何回應你：
              </h4>
              <ul className="grid grid-cols-1 gap-4">
                {activeCopy.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="mt-1 bg-[#F2F4E8] p-1 rounded-full border border-moss/10 flex-shrink-0">
                      <Check className="h-3 w-3 text-forest" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Closing Letter Text */}
            <div className="pt-6 border-t border-earth/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <p className="text-sm italic text-earth font-medium font-serif">
                  {activeCopy.closing}
                </p>
                <p className="text-xs text-slate-400">
                  — 來自政大九梯說課型組課課主群的溫暖邀約
                </p>
              </div>
              
              <a
                href="#faq"
                className="inline-flex items-center gap-1 text-xs font-bold text-forest hover:text-earth transition-colors cursor-pointer"
              >
                <span>查看費用與繳費方式</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

