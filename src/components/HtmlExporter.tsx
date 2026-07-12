import React, { useState } from "react";
import { generateSingleFileHTML } from "../utils/htmlGenerator";
import { Copy, Check, Download, Code, FileCode, CheckCircle, HelpCircle } from "lucide-react";

export default function HtmlExporter() {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const htmlCode = generateSingleFileHTML();

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: "text/html;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "index.html");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="exporter" className="py-20 bg-white border-t border-earth/5 relative overflow-hidden">
      {/* Subtle organic light accent */}
      <div className="absolute top-[50%] right-[10%] w-72 h-72 bg-sap/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Card box */}
        <div className="bg-ivory p-8 sm:p-12 rounded-3xl border border-earth/10 shadow-lg space-y-8 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="bg-[#F2F4E8] p-4 rounded-2xl border border-moss/20 text-forest flex-shrink-0">
              <FileCode className="h-10 w-10 text-forest" />
            </div>
            
            <div className="space-y-3 flex-grow">
              <span className="text-[10px] font-sans font-bold text-moss uppercase tracking-widest block">
                Export to Single-File HTML
              </span>
              <h3 className="text-2xl font-bold text-forest-dark tracking-tight font-serif">
                一鍵匯出 / 複製單一 HTML 檔案
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                我們貼心地為您製作了<strong>完全獨立、內含完整 CSS（Tailwind）與互動 JavaScript</strong> 的 <code>index.html</code> 檔案。
                您可以一鍵複製或直接下載此文字檔，在您的個人電腦中點擊即可直接於瀏覽器開啟！
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4 border-t border-earth/5">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-3.5 bg-forest text-white hover:bg-forest-dark font-bold text-sm rounded-xl tracking-wide transition-all shadow-md cursor-pointer min-w-[140px] justify-center"
            >
              {copied ? (
                <>
                  <Check className="h-4.5 w-4.5 text-sap" />
                  <span>已複製程式碼！</span>
                </>
              ) : (
                <>
                  <Copy className="h-4.5 w-4.5" />
                  <span>複製 HTML 原始碼</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3.5 bg-white border border-earth/10 text-earth hover:text-forest font-bold text-sm rounded-xl tracking-wide transition-all hover:bg-ivory cursor-pointer"
            >
              <Download className="h-4.5 w-4.5 text-moss" />
              <span>直接下載 index.html</span>
            </button>

            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
            >
              <Code className="h-4 w-4" />
              <span>{showCode ? "隱藏程式碼檢視" : "展開程式碼檢視"}</span>
            </button>
          </div>

          {/* Collapsible code viewport */}
          {showCode && (
            <div className="relative mt-6 rounded-2xl border border-earth/10 bg-[#FDFDFB] p-5 text-left overflow-hidden">
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <span className="text-[10px] font-mono text-slate-400">index.html (UTF-8)</span>
              </div>
              <pre className="text-xs font-mono text-slate-500 overflow-x-auto max-h-60 leading-relaxed scrollbar-thin select-all">
                {htmlCode}
              </pre>
            </div>
          )}

          {/* Simple step indicator */}
          <div className="bg-white p-5 rounded-2xl border border-earth/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-500 leading-relaxed text-left">
            <div className="space-y-1">
              <strong className="text-forest font-bold block font-serif">步驟一</strong>
              <span>點擊上方的「複製 HTML 原始碼」按鈕以複製全文。</span>
            </div>
            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-earth/5 pt-2 sm:pt-0 sm:pl-4">
              <strong className="text-forest font-bold block font-serif">步驟二</strong>
              <span>在您的電腦上新建一個純文字檔案，將內容完全貼上。</span>
            </div>
            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-earth/5 pt-2 sm:pt-0 sm:pl-4">
              <strong className="text-forest font-bold block font-serif">步驟三</strong>
              <span>將文字檔副檔名命名為 <code>index.html</code>，按兩下即可在瀏覽器中完美開啟！</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

