import React, { useState } from "react";
import { X, Sparkles, Send, Leaf, CheckCircle, ExternalLink } from "lucide-react";
import { REGISTRATION_DETAILS } from "../data";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    identity: "家長",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate interactive step
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const identities = ["家長", "教育工作者", "實驗教育工作者/學生", "關心教育之一般公民", "其他"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/85 backdrop-blur-md transition-all">
      
      {/* Centered Modal Box */}
      <div className="relative w-full max-w-xl bg-white border border-earth/10 rounded-3xl overflow-hidden shadow-2xl transition-all">
        
        {/* Top Header color bar */}
        <div className="h-2 bg-gradient-to-r from-forest via-moss to-earth" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-forest p-2 rounded-full hover:bg-ivory transition-colors z-10 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal content */}
        <div className="p-6 sm:p-10 text-left">
          {!isSubmitted ? (
            <div className="space-y-6">
              {/* Header Titles */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1 bg-[#F2F4E8] text-forest px-2.5 py-0.5 rounded-full text-xs font-semibold border border-moss/15">
                  <Leaf className="h-3 w-3" />
                  <span>自主學習生態系 ALE 報名</span>
                </div>
                <h3 className="text-2xl font-bold text-forest-dark font-serif">開啟您的自主學習探索旅程</h3>
                <p className="text-slate-600 text-sm">
                  九大模組精緻小班（限額 30 人）。請先填寫以下基本資訊，接著將為您導向大會正式問卷以完成註冊與繳費核對！
                </p>
              </div>

              {/* Form body */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-earth font-sans">
                      姓名 / 稱呼 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="您的真實姓名"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-ivory border border-earth/10 rounded-xl px-4 py-2.5 text-slate-700 text-sm focus:outline-none focus:border-forest transition-colors"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-earth font-sans">
                      聯絡電話 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0912-345-678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-ivory border border-earth/10 rounded-xl px-4 py-2.5 text-slate-700 text-sm focus:outline-none focus:border-forest transition-colors"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-earth font-sans">
                    電子信箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-ivory border border-earth/10 rounded-xl px-4 py-2.5 text-slate-700 text-sm focus:outline-none focus:border-forest transition-colors"
                  />
                </div>

                {/* Identity Select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-earth font-sans">
                    參課主要身份定位 <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {identities.map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setFormData({ ...formData, identity: id })}
                        className={`px-3 py-2 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer truncate ${
                          formData.identity === id
                            ? "bg-forest border-forest text-white"
                            : "bg-ivory border-earth/10 text-slate-600 hover:border-moss hover:bg-white"
                        }`}
                      >
                        {id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Note Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-earth font-sans">
                    對本課程的期許或提問 (選填)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="若有特殊期許，或需攜帶孩子上課（以不干擾為原則），請在此備註說明。"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full bg-ivory border border-earth/10 rounded-xl px-4 py-2.5 text-slate-700 text-sm focus:outline-none focus:border-forest transition-colors resize-none"
                  />
                </div>

                {/* Submit action button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group py-3.5 rounded-xl font-bold text-white tracking-wider transition-all duration-300 bg-gradient-to-r from-forest via-moss to-earth shadow-[0_0_15px_rgba(45,74,54,0.25)] hover:shadow-[0_0_25px_rgba(164,172,134,0.45)] active:scale-95 disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? "正在儲存資訊..." : "確認並前往填寫大會表單"}
                      <ExternalLink className="h-4 w-4" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // Success / Redirect step
            <div className="text-center py-8 space-y-6">
              <div className="bg-[#F2F4E8] p-4 rounded-full border border-moss/20 inline-flex mx-auto">
                <CheckCircle className="h-12 w-12 text-forest animate-bounce" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-forest-dark font-serif">感謝您的線上預填！</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  親愛的 <strong className="text-earth font-bold">{formData.name}</strong> 夥伴，您已成功提交第一階段基本資料。接下來請填寫官方正式問卷以完成課程註冊。
                </p>
              </div>

              {/* Direct action to the target URL */}
              <div className="bg-ivory p-6 rounded-2xl border border-earth/10 text-left space-y-4 max-w-md mx-auto">
                <div className="text-xs space-y-1">
                  <p className="text-slate-400 font-bold">大會正式問卷與合約網址：</p>
                  <p className="text-forest font-mono select-all truncate">https://urclass.net/AL/signup/signup.php</p>
                </div>
                
                <a
                  href={REGISTRATION_DETAILS.formUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-forest to-moss text-white hover:from-forest-dark hover:to-forest rounded-xl font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>立即開啟官方報名表單</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-slate-600 font-bold transition-colors"
              >
                關閉視窗，返回網頁
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

