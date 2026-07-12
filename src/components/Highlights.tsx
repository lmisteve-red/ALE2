import React from "react";
import { ShieldAlert, Compass, Activity, Leaf, ArrowRight } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      icon: <ShieldAlert className="h-6 w-6 text-forest" />,
      title: "一、教育公共性與政策保障",
      badge: "教育公共性",
      description: "回到教育最根本的起點，不只空談理念！我們帶領你思索教育經費的政策保障、權益分配。深入社區大學與偏鄉學校，看見地方創生如何將文化底蘊、自然元素轉化為活生生的校本教材，引導社會變革實踐。"
    },
    {
      icon: <Compass className="h-6 w-6 text-earth" />,
      title: "二、深度自我探索與焦慮釋放",
      badge: "自我探索",
      description: "陪伴家長與教育者梳理數位時代帶來的深深焦慮。引入薩提爾（Satir）感官覺察，解鎖每個人與生俱來的多元智能；搭配哲學思辨桌遊，培養孩子反思、探討真實與深度表達的核心能力，重新安頓身心。"
    },
    {
      icon: <Activity className="h-6 w-6 text-forest" />,
      title: "三、跨越安全區承擔合理風險",
      badge: "走向人群與風險",
      description: "為何不冒險反而是最大的學習危機？深入探討冒險教育對孩子發展的影響。透過家庭支持團體的協同、互補共學。在安全、充滿同理心的夥伴關係中嘗試微小的冒險，將學習動能真正轉化為社會的具體改變。"
    }
  ];

  return (
    <section id="highlights" className="py-24 bg-white border-b border-earth/10 relative overflow-hidden">
      {/* Decorative leaf watermarks */}
      <div className="absolute right-[-5%] top-[10%] w-96 h-96 opacity-[0.03] pointer-events-none">
        <Leaf className="w-full h-full text-forest" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#F2F4E8] text-forest px-4 py-1 rounded-full text-xs font-semibold tracking-wider border border-moss/20">
            <span>Core Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark tracking-tight font-serif">
            三大活動特色：從政策到心靈，建立有機學習
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            這不是單向灌輸的講座，而是循序漸進的生態探索。我們從探討教育大環境的公共性，收攏至內心自我安頓，最終攜手跨向真實人群與承擔風險的實踐。
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card-lift bg-[#FDFDFB] rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                {/* Icon slot */}
                <div className="bg-[#F2F4E8] p-3 rounded-xl inline-flex mb-6 border border-moss/10">
                  {item.icon}
                </div>

                {/* Tag Badge */}
                <div className="mb-2 text-xs font-bold text-moss tracking-wider uppercase font-sans">
                  {item.badge}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-earth mb-4 font-serif">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Hover foot accent */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-forest hover:text-earth transition-colors duration-200 cursor-pointer">
                <span>了解更多</span>
                <ArrowRight className="h-3 w-3 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

