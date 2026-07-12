import React from "react";
import { Calendar, Users, MapPin, Sparkles, BookOpen } from "lucide-react";
import heroBanner from "../assets/images/course_hero_banner_1783839775298.jpg";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center bg-ivory pt-24 pb-12 overflow-hidden">
      {/* Background Forest/Earthy Overlay elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-moss/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-sap/30 blur-[120px]" />
        {/* Subtle grid pattern of earth dots */}
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(#4E3B31 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Info (Left column) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-[#F2F4E8] border border-moss/30 px-3.5 py-1.5 rounded-full text-xs font-sans text-forest font-bold tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-earth" />
              <span>政大九梯 實驗教育工作者培力</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-forest-dark tracking-tight leading-tight font-serif">
                在 AI 時代，<br className="hidden sm:inline" />
                <span className="text-earth">
                  找回教育的公共價值。
                </span>
              </h1>
              
              <p className="text-lg text-slate-700 max-w-2xl leading-relaxed">
                這不是一門技術課，而是一場關於「人」與「環境」的實驗。
                <strong className="text-forest font-bold font-serif"> 自主學習生態系 ALE </strong>
                結合薩提爾、哲學探討與實踐行動，九堂課，我們一同在生態系中探索自主學習的真實面貌，建立支持網絡。
              </p>
            </div>

            {/* Quick Metadata Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white border border-earth/10 p-5 rounded-2xl shadow-md">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-forest text-xs font-bold">
                  <BookOpen className="h-3.5 w-3.5 text-moss" />
                  <span>精選課次</span>
                </div>
                <p className="text-lg font-black text-earth font-serif">共 9 堂課</p>
              </div>
              <div className="space-y-1 border-l border-earth/10 pl-4">
                <div className="flex items-center gap-1.5 text-forest text-xs font-bold">
                  <Users className="h-3.5 w-3.5 text-moss" />
                  <span>人數限額</span>
                </div>
                <p className="text-lg font-black text-earth font-serif">10~30 人</p>
              </div>
              <div className="space-y-1 border-l border-earth/10 pl-4">
                <div className="flex items-center gap-1.5 text-forest text-xs font-bold">
                  <Calendar className="h-3.5 w-3.5 text-moss" />
                  <span>開課日期</span>
                </div>
                <p className="text-lg font-black text-earth font-serif">8/1 正式課</p>
              </div>
              <div className="space-y-1 border-l border-earth/10 pl-4">
                <div className="flex items-center gap-1.5 text-forest text-xs font-bold">
                  <MapPin className="h-3.5 w-3.5 text-moss" />
                  <span>授課方式</span>
                </div>
                <p className="text-lg font-black text-earth font-serif">實體 + 線上</p>
              </div>
            </div>

            {/* Interactive Call to Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://urclass.net/AL/signup/signup.php"
                target="_blank"
                rel="noreferrer"
                className="btn-glow px-8 py-4 rounded-xl text-white font-bold tracking-widest hover:scale-[1.02] shadow-lg hover:shadow-moss/50 cursor-pointer text-center inline-block"
              >
                立即報名參加
              </a>

              <a
                href="#syllabus"
                className="flex items-center justify-center px-8 py-4 rounded-xl border border-earth/20 text-earth hover:text-forest-dark hover:border-forest hover:bg-[#F2F4E8]/50 font-bold transition-all duration-300"
              >
                探索課次大綱
              </a>
            </div>
          </div>

          {/* Key Visual Poster Card (Right column) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Outer decorative earthy frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-forest to-moss opacity-70 blur-md group-hover:opacity-90 transition duration-500" />
              
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-earth/10 flex flex-col">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={heroBanner}
                    alt="自主學習生態系活動海報"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                
                {/* Embedded quick badge */}
                <div className="p-5 bg-white text-left border-t border-earth/5">
                  <span className="text-xs font-mono font-bold text-forest uppercase tracking-widest block mb-1">
                    Nature & Organic Learning
                  </span>
                  <p className="text-sm text-slate-700 font-sans leading-relaxed">
                    以有機、多層次的林下生態系，象徵多元、協同、富含彈性與養分的自主學習系統。
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

