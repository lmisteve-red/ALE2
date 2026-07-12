import React from "react";
import { REGISTRATION_DETAILS } from "../data";
import { CreditCard, HelpCircle, AlertCircle, Award, Landmark, MapPin, Users2, ShieldCheck } from "lucide-react";

export default function FAQAndInfo() {
  const d = REGISTRATION_DETAILS;

  return (
    <section id="faq" className="py-24 bg-ivory border-t border-b border-earth/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#F2F4E8] text-forest px-4 py-1 rounded-full text-xs font-semibold tracking-wider border border-moss/20">
            <span>Essential Details</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest-dark tracking-tight font-serif">
            參課須知與繳費資訊
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            為了維護良好、有品質的思辨與共創氛圍，我們制定了以下合理的互動規範與繳費退費標準，請於報名前詳細閱讀。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Course Rules & Location */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Participant limits & Requirements */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-earth/10 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-earth/5 pb-4">
                <Users2 className="h-6 w-6 text-forest" />
                <h3 className="text-xl font-bold text-forest-dark font-serif">學員要求與報名規範</h3>
              </div>
              
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 bg-[#F2F4E8] text-forest px-2.5 py-0.5 rounded-full font-bold text-[10px] flex-shrink-0 border border-moss/10">限制</span>
                  <p>{d.limits.age}</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 bg-[#F2F4E8] text-forest px-2.5 py-0.5 rounded-full font-bold text-[10px] flex-shrink-0 border border-moss/10">要求</span>
                  <p>{d.limits.requirement}</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 bg-[#F2F4E8] text-forest px-2.5 py-0.5 rounded-full font-bold text-[10px] flex-shrink-0 border border-moss/10">人數</span>
                  <p>本課程上限 {d.limits.max} 人，達下限 {d.limits.min} 人即開課。</p>
                </div>
              </div>
            </div>

            {/* NTNU Credits/Assessment */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-earth/10 shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-earth/5 pb-4">
                <Award className="h-6 w-6 text-earth" />
                <h3 className="text-xl font-bold text-forest-dark font-serif">學分評量方式 (政大九梯)</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {d.assessment}
              </p>
            </div>

            {/* Methods & Locations */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-earth/10 shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-earth/5 pb-4">
                <MapPin className="h-6 w-6 text-forest" />
                <h3 className="text-xl font-bold text-forest-dark font-serif">上課方式與地點</h3>
              </div>
              
              <div className="space-y-3 text-sm text-slate-600">
                <p className="font-bold text-forest">{d.methods}</p>
                <div className="space-y-2 pt-2 text-xs">
                  <div className="bg-ivory p-3.5 rounded-xl border border-earth/5">
                    <strong className="text-earth font-bold block mb-1 font-serif">台北實體地點：小實光</strong>
                    <span className="text-slate-500">台北市大安區信義路三段162-16號4樓（近捷運大安站）</span>
                  </div>
                  <div className="bg-ivory p-3.5 rounded-xl border border-earth/5">
                    <strong className="text-earth font-bold block mb-1 font-serif">台中共生宅（11/7 限定）</strong>
                    <span className="text-slate-500">台中市烏日區大同九街73號</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Fee, Payments & Refunds */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Fee & Payment Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-earth/10 shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sap/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 border-b border-earth/5 pb-4">
                <CreditCard className="h-6 w-6 text-earth" />
                <h3 className="text-xl font-bold text-forest-dark font-serif">參課費用與說明</h3>
              </div>

              {/* Huge Price Badge */}
              <div className="bg-ivory p-5 rounded-2xl border border-earth/10 text-center">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest block mb-1">全九堂優惠價</span>
                <p className="text-4xl font-black text-earth font-serif">
                  NT$ {d.price.toLocaleString()}
                </p>
                <span className="text-[10px] text-forest font-bold mt-1 block">限額 {d.limits.max} 人</span>
              </div>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex gap-2.5">
                  <AlertCircle className="h-4 w-4 text-earth flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-forest-dark font-bold">繳費期限：</strong>
                    {d.priceDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Remittance Information */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-earth/10 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-earth/5 pb-4">
                <Landmark className="h-6 w-6 text-forest" />
                <h3 className="text-xl font-bold text-forest-dark font-serif">匯款帳戶資訊</h3>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex justify-between border-b border-earth/5 pb-2">
                  <span className="text-slate-400 font-sans">匯款銀行</span>
                  <span className="text-earth font-bold font-serif">{d.remittance.bank}</span>
                </div>
                <div className="flex justify-between border-b border-earth/5 pb-2">
                  <span className="text-slate-400 font-sans">匯款帳號</span>
                  <span className="text-earth font-bold tracking-wider font-mono">{d.remittance.account}</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-400 font-sans">戶名</span>
                  <span className="text-earth font-bold font-serif">{d.remittance.holder}</span>
                </div>
              </div>

              <div className="bg-[#F2F4E8] p-4 rounded-xl border border-moss/20 flex items-start gap-2 text-xs text-forest leading-relaxed font-sans font-medium">
                <ShieldCheck className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>匯款完成後，請於報名表單填入匯款帳號後五碼，以便主辦單位對帳，感謝您的配合。</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

