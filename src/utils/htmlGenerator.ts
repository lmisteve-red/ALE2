export function generateSingleFileHTML(): string {
  return `<!DOCTYPE html>
<html lang="zh-TW" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>自主學習生態系 - 課程活動網頁</title>
    <!-- Tailwind CSS Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts Inter & JetBrains Mono -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    colors: {
                        emerald: {
                            50: '#f0fdf4',
                            100: '#dcfce7',
                            200: '#bbf7d0',
                            300: '#86efac',
                            400: '#4ade80',
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                            800: '#166534',
                            950: '#022c22',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Inter', system-ui, sans-serif;
            background-color: #0c0a09; /* stone-950 */
        }
        /* Gradient Glow effect for buttons */
        .glow-btn {
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.35);
            transition: all 0.3s ease;
        }
        .glow-btn:hover {
            box-shadow: 0 0 25px rgba(245, 158, 11, 0.5);
            transform: scale(1.02);
        }
        /* Hover card lift effect */
        .card-lift {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.12);
            border-color: rgba(16, 185, 129, 0.3);
        }
    </style>
</head>
<body class="text-stone-100 min-h-screen relative overflow-x-hidden bg-stone-950">

    <!-- DECORATIVE LIGHTS -->
    <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/20 blur-[120px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-900/10 blur-[120px]"></div>
    </div>

    <!-- NAVIGATION BAR -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-stone-900/90 backdrop-blur-md border-b border-emerald-900/20 py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="flex items-center space-x-2 cursor-pointer group">
                    <div class="bg-emerald-800 p-1.5 rounded-lg">
                        <!-- Leaf Icon SVG -->
                        <svg class="h-5 w-5 text-amber-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <span class="font-sans font-bold text-lg text-stone-100 tracking-wide">自主學習生態系</span>
                        <span class="ml-1 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-900/40">ALE</span>
                    </div>
                </div>

                <!-- Desktop Nav -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#highlights" class="text-sm font-medium text-stone-300 hover:text-emerald-400 transition-colors">活動特色</a>
                    <a href="#marketing" class="text-sm font-medium text-stone-300 hover:text-emerald-400 transition-colors">定位契合</a>
                    <a href="#syllabus" class="text-sm font-medium text-stone-300 hover:text-emerald-400 transition-colors">精彩課次</a>
                    <a href="#lecturers" class="text-sm font-medium text-stone-300 hover:text-emerald-400 transition-colors">導師團隊</a>
                    <a href="#faq" class="text-sm font-medium text-stone-300 hover:text-emerald-400 transition-colors">報名資訊</a>
                    <a href="https://urclass.net/AL/signup/signup.php" target="_blank" rel="noreferrer" class="glow-btn px-5 py-2 rounded-full font-semibold text-xs tracking-wider uppercase bg-gradient-to-r from-emerald-600 to-amber-600 text-stone-100 text-center inline-block">
                        立即報名
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button onclick="toggleMobileMenu()" class="text-stone-300 hover:text-emerald-400 p-2 focus:outline-none">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu container -->
        <div id="mobile-menu" class="hidden md:hidden bg-stone-900/95 border-b border-emerald-900/20 px-4 pt-2 pb-4 space-y-2">
            <a href="#highlights" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-md text-base font-medium text-stone-300 hover:text-emerald-400 hover:bg-stone-800/50">活動特色</a>
            <a href="#marketing" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-md text-base font-medium text-stone-300 hover:text-emerald-400 hover:bg-stone-800/50">定位契合</a>
            <a href="#syllabus" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-md text-base font-medium text-stone-300 hover:text-emerald-400 hover:bg-stone-800/50">精彩課次</a>
            <a href="#lecturers" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-md text-base font-medium text-stone-300 hover:text-emerald-400 hover:bg-stone-800/50">導師團隊</a>
            <a href="#faq" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-md text-base font-medium text-stone-300 hover:text-emerald-400 hover:bg-stone-800/50">報名資訊</a>
            <div class="pt-3 px-3">
                <a href="https://urclass.net/AL/signup/signup.php" target="_blank" rel="noreferrer" onclick="toggleMobileMenu();" class="w-full text-center py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-600 to-amber-600 text-stone-100 glow-btn block">
                    立即報名
                </a>
            </div>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <div id="hero" class="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Hero Left Info -->
                <div class="lg:col-span-7 space-y-8 text-left">
                    <div class="inline-flex items-center gap-2 bg-emerald-950/85 border border-emerald-800/40 px-3.5 py-1.5 rounded-full text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                        <svg class="h-3.5 w-3.5 text-amber-400 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span>政大九梯 實驗教育工作者培力</span>
                    </div>

                    <div class="space-y-4">
                        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-100 tracking-tight leading-tight">
                            自主學習 <br class="hidden sm:inline">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-200 to-amber-500">
                                生態系 ALE
                            </span>
                        </h1>
                        <p class="text-lg text-stone-300 max-w-2xl leading-relaxed">
                            在 AI 顛覆教育的時代，真正的挑戰不是工具，而是孩子是否保有
                            <strong class="text-emerald-400"> 獨立思考、辨認真實與攜手協作 </strong>
                            的能力。這不只是一系列課程，而是一群關心教育的行動者共同實作、思辨、翻轉生活的學習旅程。
                        </p>
                    </div>

                    <!-- Facts Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-stone-900/80 border border-stone-800/60 p-5 rounded-2xl">
                        <div>
                            <div class="text-emerald-400 text-xs font-semibold">精選課次</div>
                            <p class="text-lg font-bold text-stone-200">共 9 堂課</p>
                        </div>
                        <div class="border-l border-stone-800 pl-4">
                            <div class="text-amber-400 text-xs font-semibold">人數限額</div>
                            <p class="text-lg font-bold text-stone-200">10~30 人</p>
                        </div>
                        <div class="border-l border-stone-800 pl-4">
                            <div class="text-emerald-400 text-xs font-semibold">開課日期</div>
                            <p class="text-lg font-bold text-stone-200">8/1 開課</p>
                        </div>
                        <div class="border-l border-stone-800 pl-4">
                            <div class="text-amber-400 text-xs font-semibold">授課方式</div>
                            <p class="text-lg font-bold text-stone-200">實體 + 線上</p>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="https://urclass.net/AL/signup/signup.php" target="_blank" rel="noreferrer" class="glow-btn px-8 py-4 rounded-xl text-stone-950 font-bold tracking-wide bg-gradient-to-r from-emerald-400 via-amber-300 to-amber-500 text-center inline-block">
                            立即報名參加
                        </a>
                        <a href="#syllabus" class="flex items-center justify-center px-8 py-4 rounded-xl border border-stone-700 hover:border-emerald-500/50 text-stone-300 hover:bg-emerald-950/10 transition-all">
                            探索課次大綱
                        </a>
                    </div>
                </div>

                <!-- Hero Right: Custom generated visual mockup -->
                <div class="lg:col-span-5 flex justify-center">
                    <div class="relative w-full max-w-sm sm:max-w-md">
                        <div class="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-600 via-amber-500 to-emerald-800 opacity-60 blur-md"></div>
                        <div class="relative bg-stone-900 rounded-3xl overflow-hidden border border-stone-850">
                            <div class="aspect-[4/5] bg-stone-950 relative flex flex-col justify-between p-8 text-left">
                                <div class="space-y-4">
                                    <span class="text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase">Course Visual Poster</span>
                                    <h2 class="text-2xl sm:text-3xl font-black text-stone-100 tracking-tight">自主學習<br>生態系 ALE</h2>
                                </div>
                                <div class="border-t border-stone-800/80 pt-6 space-y-2">
                                    <p class="text-xs text-stone-400 leading-relaxed font-sans">
                                        以有機、多層次的林下生態系，象徵多元、協同、富含彈性與養分的自主學習系統。
                                    </p>
                                    <div class="flex gap-1">
                                        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                                        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                                        <span class="w-2 h-2 rounded-full bg-stone-600"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- HIGHLIGHTS SECTION -->
    <section id="highlights" class="py-24 bg-stone-900 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 class="text-3xl sm:text-4xl font-bold text-stone-100">三大活動特色：從政策到心靈，建立有機學習</h2>
                <p class="text-stone-400 text-sm">這不是單向灌輸的講座，而是循序漸進的生態探索。我們從探討教育大環境的公共性，收攏至內心自我安頓，最終攜手跨向真實人群與承擔風險的實踐。</p>
            </div>

            <!-- 3 Columns -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Col 1 -->
                <div class="bg-stone-950/60 p-8 rounded-2xl border border-stone-850 hover:border-emerald-500/20 card-lift">
                    <div class="bg-stone-950 p-4 rounded-xl inline-flex mb-6 border border-stone-800">
                        <svg class="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div class="mb-2 text-xs font-mono font-bold text-amber-500">教育公共性</div>
                    <h3 class="text-xl font-bold text-stone-100 mb-3">一、教育公共性與政策保障</h3>
                    <p class="text-stone-300 text-sm leading-relaxed">回到教育最根本的起點，不只空談理念！我們帶領你思索教育經費的政策保障、權益分配。深入社區大學與偏鄉學校，看見地方創生如何將文化底蘊、自然元素轉化為活生生的校本教材。</p>
                </div>
                <!-- Col 2 -->
                <div class="bg-stone-950/60 p-8 rounded-2xl border border-stone-850 hover:border-emerald-500/20 card-lift">
                    <div class="bg-stone-950 p-4 rounded-xl inline-flex mb-6 border border-stone-800">
                        <svg class="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l92-7-9-7-9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9M9 12H4M4 12V9m0 3h5m11-3V9m0 3H15" />
                        </svg>
                    </div>
                    <div class="mb-2 text-xs font-mono font-bold text-amber-500">自我探索</div>
                    <h3 class="text-xl font-bold text-stone-100 mb-3">二、深度自我探索與焦慮釋放</h3>
                    <p class="text-stone-300 text-sm leading-relaxed">陪伴家長與教育者梳理數位時代帶來的深深焦慮。引入薩提爾（Satir）感官覺察，解鎖每個人與生俱來的多元智能；搭配哲學思辨桌遊，培養孩子反思、探討真實與深度表達的核心能力。</p>
                </div>
                <!-- Col 3 -->
                <div class="bg-stone-950/60 p-8 rounded-2xl border border-stone-850 hover:border-emerald-500/20 card-lift">
                    <div class="bg-stone-950 p-4 rounded-xl inline-flex mb-6 border border-stone-800">
                        <svg class="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div class="mb-2 text-xs font-mono font-bold text-amber-500">走向人群與風險</div>
                    <h3 class="text-xl font-bold text-stone-100 mb-3">三、跨越安全區承擔合理風險</h3>
                    <p class="text-stone-300 text-sm leading-relaxed">為何不冒險反而是最大的學習危機？深入探討冒險教育對孩子發展的影響。透過家庭支持團體的協同、互補共學。在安全、充滿同理心的夥伴關係中嘗試微小的冒險，轉化動能為具體改變。</p>
                </div>
            </div>
        </div>
    </section>

    <!-- MARKETING TABS -->
    <section id="marketing" class="py-24 bg-stone-950 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 class="text-3xl sm:text-4xl font-bold text-stone-100">這門課，是不是寫給你的信？</h2>
                <p class="text-stone-400 text-sm">我們針對不同立場與身份的夥伴，寫下了五封真摯的邀請。點選與你最貼近的角色，看看這堂課能如何陪伴你。</p>
            </div>

            <!-- Tab Controls -->
            <div class="flex flex-wrap justify-center gap-2 mb-12">
                <button onclick="switchTab('parent')" id="btn-parent" class="tab-btn px-5 py-3 rounded-full text-sm font-semibold transition-all border bg-emerald-900 border-emerald-600 text-amber-200">如果你是【家長】</button>
                <button onclick="switchTab('educator')" id="btn-educator" class="tab-btn px-5 py-3 rounded-full text-sm font-semibold transition-all border bg-stone-900 border-stone-800 text-stone-300 hover:border-emerald-800/40">如果你是【教育工作者】</button>
                <button onclick="switchTab('experimental')" id="btn-experimental" class="tab-btn px-5 py-3 rounded-full text-sm font-semibold transition-all border bg-stone-900 border-stone-800 text-stone-300 hover:border-emerald-800/40">如果你是【實驗教育興趣者】</button>
                <button onclick="switchTab('change')" id="btn-change" class="tab-btn px-5 py-3 rounded-full text-sm font-semibold transition-all border bg-stone-900 border-stone-800 text-stone-300 hover:border-emerald-800/40">如果你是【想改變自己的人】</button>
                <button onclick="switchTab('general')" id="btn-general" class="tab-btn px-5 py-3 rounded-full text-sm font-semibold transition-all border bg-stone-900 border-stone-800 text-stone-300 hover:border-emerald-800/40">致【所有關心教育的你】</button>
            </div>

            <!-- Tab Content -->
            <div class="max-w-4xl mx-auto bg-stone-900 border border-stone-800 p-8 sm:p-12 rounded-3xl relative overflow-hidden">
                <div id="tab-content" class="space-y-6">
                    <!-- Parent Default Content -->
                    <div class="space-y-2">
                        <span class="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">家長專屬導引</span>
                        <h3 id="tab-headline" class="text-2xl sm:text-3xl font-extrabold text-stone-100 leading-tight">「當你開始擔心，AI 會比你更會教孩子時…」</h3>
                    </div>
                    <p id="tab-intro" class="text-stone-300 text-base leading-relaxed border-l-2 border-emerald-600 pl-4">
                        孩子遇到問題，第一個不是問老師，也不是問爸媽，而是打開 AI。那我們真正該教孩子的是什麼？是背更多知識？還是學會判斷真假？是避免使用 AI？還是學會與 AI 合作？
                    </p>
                    <div class="space-y-3">
                        <h4 class="text-stone-200 font-bold text-sm">🌱 這堂課如何回應你：</h4>
                        <ul id="tab-bullets" class="space-y-3 text-stone-300 text-sm">
                            <li class="flex items-start gap-2">✔ <span>真正的挑戰不是 AI，而是孩子是否保有：獨立思考、判斷、行動與人際協作的能力。</span></li>
                            <li class="flex items-start gap-2">✔ <span>不談工具操作，而是探討 AI 如何成為自主學習的夥伴，不綁架大腦。</span></li>
                            <li class="flex items-start gap-2">✔ <span>由陳一慈老師（野可以）與趙逸帆老師共同引導，解開大人形形色色的焦慮，重建未來陪伴心法。</span></li>
                        </ul>
                    </div>
                    <p id="tab-closing" class="text-sm italic text-amber-200 font-medium pt-4 border-t border-stone-800">
                        也許這九堂課，能幫你和孩子找到一條在數位時代安穩成長的道路。歡迎你的加入。
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- SYLLABUS SECTION -->
    <section id="syllabus" class="py-24 bg-stone-900 relative">
        <div class="max-w-4xl mx-auto px-4">
            <div class="text-center mb-16 space-y-4">
                <h2 class="text-3xl sm:text-4xl font-bold text-stone-100">九堂系統化思辨與實踐課程</h2>
                <p class="text-stone-400 text-sm">融合實體深度對話與線上同步學習，四大模組環環相扣，共同建構自主學習生命網。</p>
            </div>

            <!-- Accordion List -->
            <div class="space-y-4">
                <!-- Class 1 -->
                <div class="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden">
                    <div onclick="toggleAccordion(1)" class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xs bg-emerald-900/50 text-amber-300 px-2 py-0.5 rounded font-bold">課次 1</span>
                                <span class="text-xs bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-semibold">教育公共性</span>
                            </div>
                            <h3 class="text-lg font-bold text-stone-100">重建教育經費保障論點整理</h3>
                        </div>
                        <div class="text-right text-xs text-stone-400">
                            <p class="text-emerald-400 font-mono">8/1 14:00-17:00</p>
                            <p>台北小實光 + 線上</p>
                        </div>
                    </div>
                    <div id="acc-1" class="hidden px-6 pb-6 pt-2 border-t border-stone-900 bg-stone-900/20 text-sm text-stone-300 space-y-3">
                        <p>從教育政策與公共政策切入，深度思辨教育經費保障的法理與制度演進，理解國政治理的現實，探討如何實戰參與並推動教育權的具體保障。</p>
                        <p class="text-xs text-emerald-400">引導講師：丁志仁 (教育社運老兵)</p>
                    </div>
                </div>

                <!-- Class 2 -->
                <div class="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden">
                    <div onclick="toggleAccordion(2)" class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xs bg-emerald-900/50 text-amber-300 px-2 py-0.5 rounded font-bold">課次 2</span>
                                <span class="text-xs bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-semibold">教育公共性</span>
                            </div>
                            <h3 class="text-lg font-bold text-stone-100">看見地方元素並展開行動</h3>
                        </div>
                        <div class="text-right text-xs text-stone-400">
                            <p class="text-emerald-400 font-mono">8/29 14:00-17:00</p>
                            <p>台北小實光 + 線上</p>
                        </div>
                    </div>
                    <div id="acc-2" class="hidden px-6 pb-6 pt-2 border-t border-stone-900 bg-stone-900/20 text-sm text-stone-300 space-y-3">
                        <p>分享板橋社大與東北角瓜山國小的合作經驗。在金瓜石礦業消失、人口嚴重流出的偏鄉，社大與國小如何找出地方基因，以文化與地方元素重新翻轉地方。</p>
                        <p class="text-xs text-emerald-400">引導講師：陳書吟 (板橋社大主秘)</p>
                    </div>
                </div>

                <!-- Class 3 -->
                <div class="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden">
                    <div onclick="toggleAccordion(3)" class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xs bg-emerald-900/50 text-amber-300 px-2 py-0.5 rounded font-bold">課次 3</span>
                                <span class="text-xs bg-amber-950 text-amber-400 px-2 py-0.5 rounded font-semibold">自我探索</span>
                            </div>
                            <h3 class="text-lg font-bold text-stone-100">開啟多元智能與自我探索</h3>
                        </div>
                        <div class="text-right text-xs text-stone-400">
                            <p class="text-emerald-400 font-mono">9/19 18:00-21:00</p>
                            <p>台北小實光 + 線上</p>
                        </div>
                    </div>
                    <div id="acc-3" class="hidden px-6 pb-6 pt-2 border-t border-stone-900 bg-stone-900/20 text-sm text-stone-300 space-y-3">
                        <p>透過薩提爾模式，由身體感官的覺察開始，帶領進行深度的內在探索。幫助認識與接納自己的多元智能特質，找回內在的平靜與力量。</p>
                        <p class="text-xs text-emerald-400">引導講師：鍾淑華 (薩提爾帶領人)</p>
                    </div>
                </div>

                <!-- Class 4 -->
                <div class="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden">
                    <div onclick="toggleAccordion(4)" class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xs bg-emerald-900/50 text-amber-300 px-2 py-0.5 rounded font-bold">課次 4</span>
                                <span class="text-xs bg-amber-950 text-amber-400 px-2 py-0.5 rounded font-semibold">自我探索</span>
                            </div>
                            <h3 class="text-lg font-bold text-stone-100">透過桌遊帶領兒童反思、表達、行動</h3>
                        </div>
                        <div class="text-right text-xs text-stone-400">
                            <p class="text-emerald-400 font-mono">10/3 18:00-21:00</p>
                            <p>台北小實光 + 線上</p>
                        </div>
                    </div>
                    <div id="acc-4" class="hidden px-6 pb-6 pt-2 border-t border-stone-900 bg-stone-900/20 text-sm text-stone-300 space-y-3">
                        <p>將思辨趣味化！分享並實際操作哲學桌遊，演示如何透過遊戲引導孩子（與大人）進行深入反思，練習精準表達自我，並轉化為實踐行動。</p>
                        <p class="text-xs text-emerald-400">引導講師：毛西老師 (為什麼兒童哲學)</p>
                    </div>
                </div>

                <!-- Class 5 -->
                <div class="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden">
                    <div onclick="toggleAccordion(5)" class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xs bg-emerald-900/50 text-amber-300 px-2 py-0.5 rounded font-bold">課次 5</span>
                                <span class="text-xs bg-amber-950 text-amber-400 px-2 py-0.5 rounded font-semibold">自我探索</span>
                            </div>
                            <h3 class="text-lg font-bold text-stone-100">解開大人形形色色的焦慮</h3>
                        </div>
                        <div class="text-right text-xs text-stone-400">
                            <p class="text-emerald-400 font-mono">11/7 14:00-17:00</p>
                            <p>台中共生宅 + 線上</p>
                        </div>
                    </div>
                    <div id="acc-5" class="hidden px-6 pb-6 pt-2 border-t border-stone-900 bg-stone-900/20 text-sm text-stone-300 space-y-3">
                        <p>移師「台中共生宅」上課。針對身兼多重角色的教育者與家長，梳理在陪伴孩子自主學習路上所面臨的焦慮根源，提供解套方法與放鬆陪伴心法。</p>
                        <p class="text-xs text-emerald-400">引導講師：陳一慈 (野可以)</p>
                    </div>
                </div>

                <!-- Class 6 -->
                <div class="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden">
                    <div onclick="toggleAccordion(6)" class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xs bg-emerald-900/50 text-amber-300 px-2 py-0.5 rounded font-bold">課次 6</span>
                                <span class="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded font-semibold">走向人群</span>
                            </div>
                            <h3 class="text-lg font-bold text-stone-100">數位時代養大的小孩，探討「真實」</h3>
                        </div>
                        <div class="text-right text-xs text-stone-400">
                            <p class="text-emerald-400 font-mono">11/21 18:00-21:00</p>
                            <p>台北小實光 + 線上</p>
                        </div>
                    </div>
                    <div id="acc-6" class="hidden px-6 pb-6 pt-2 border-t border-stone-900 bg-stone-900/20 text-sm text-stone-300 space-y-3">
                        <p>AI時代，孩子被大量數位資訊包圍。探討何為『真實』、AI如何成為自主學習夥伴，並討論親師如何在混亂資訊洪流中陪伴孩子培養獨立判斷力。</p>
                        <p class="text-xs text-emerald-400">引導講師：趙逸帆 (不帆心家庭教室)</p>
                    </div>
                </div>

                <!-- Class 7 -->
                <div class="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden">
                    <div onclick="toggleAccordion(7)" class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xs bg-emerald-900/50 text-amber-300 px-2 py-0.5 rounded font-bold">課次 7</span>
                                <span class="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded font-semibold">走向人群</span>
                            </div>
                            <h3 class="text-lg font-bold text-stone-100">夥伴間互補與協作經驗談</h3>
                        </div>
                        <div class="text-right text-xs text-stone-400">
                            <p class="text-emerald-400 font-mono">12/12 18:00-21:00</p>
                            <p>台北小實光 + 線上</p>
                        </div>
                    </div>
                    <div id="acc-7" class="hidden px-6 pb-6 pt-2 border-t border-stone-900 bg-stone-900/20 text-sm text-stone-300 space-y-3">
                        <p>沒有人是孤島。實驗教育家長團現身說法，真誠分享多個家庭如何在自主學習與實驗教育體系中互助補位、彼此互補與協作，建立穩固的家長支持網絡。</p>
                        <p class="text-xs text-emerald-400">引導講師：實驗教育家長團 (家長間互聊)</p>
                    </div>
                </div>

                <!-- Class 8 -->
                <div class="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden">
                    <div onclick="toggleAccordion(8)" class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xs bg-emerald-900/50 text-amber-300 px-2 py-0.5 rounded font-bold">課次 8</span>
                                <span class="text-xs bg-teal-950 text-teal-400 px-2 py-0.5 rounded font-semibold">接受合理風險</span>
                            </div>
                            <h3 class="text-lg font-bold text-stone-100">冒險教育對於孩子的影響</h3>
                        </div>
                        <div class="text-right text-xs text-stone-400">
                            <p class="text-emerald-400 font-mono">12/19 18:00-21:00</p>
                            <p>台北小實光 + 線上</p>
                        </div>
                    </div>
                    <div id="acc-8" class="hidden px-6 pb-6 pt-2 border-t border-stone-900 bg-stone-900/20 text-sm text-stone-300 space-y-3">
                        <p>為什麼完美的保護反而限制了學習？本堂課深度解析學習與『風險』的共生關係，理解冒險教育如何刺激孩子的挫折容忍力、應變力與自主行動力。</p>
                        <p class="text-xs text-emerald-400">引導講師：李光莒 (小實光)</p>
                    </div>
                </div>

                <!-- Class 9 -->
                <div class="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden">
                    <div onclick="toggleAccordion(9)" class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none">
                        <div class="space-y-1">
                            <div class="flex items-center gap-2">
                                <span class="text-xs bg-emerald-900/50 text-amber-300 px-2 py-0.5 rounded font-bold">課次 9</span>
                                <span class="text-xs bg-teal-950 text-teal-400 px-2 py-0.5 rounded font-semibold">接受合理風險</span>
                            </div>
                            <h3 class="text-lg font-bold text-stone-100">復盤 1 ~ 8 課次：回顧與行動實踐</h3>
                        </div>
                        <div class="text-right text-xs text-stone-400">
                            <p class="text-emerald-400 font-mono">2027/1/23 18:30-21:00</p>
                            <p>台北小實光 + 線上</p>
                        </div>
                    </div>
                    <div id="acc-9" class="hidden px-6 pb-6 pt-2 border-t border-stone-900 bg-stone-900/20 text-sm text-stone-300 space-y-3">
                        <p>統整前八次課程所學。所有學員分組進行選題報告與行動方案分享。透過共識復盤與互評，探討如何將這段學習歷程轉化為未來在社會、家庭中的持續實踐。</p>
                        <p class="text-xs text-emerald-400">引導講師：全體課主群與學員</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- LECTURERS SECTION -->
    <section id="lecturers" class="py-24 bg-stone-950 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 class="text-3xl sm:text-4xl font-bold text-stone-100">導師團隊：不使用大頭照的自然卡片設計</h2>
                <p class="text-stone-400 text-sm">以深沉、有機的色彩搭配，強調引路人的本質與核心思想，建立富有意境的師資展演。</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Card 1 -->
                <div class="bg-stone-900 p-6 rounded-2xl border border-stone-850 card-lift flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <div class="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-emerald-300 border border-emerald-700/30">丁</div>
                            <span class="text-[10px] text-stone-500 font-mono">LECTURER</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-100">丁志仁</h3>
                        <p class="text-xs text-amber-500 mb-4">教育社運老兵</p>
                        <p class="text-stone-300 text-xs leading-relaxed">深耕台灣教育政策、法令與社運多年。本次將帶領學員看見國政治理的現實面、政策形成的背後邏輯，並分享如何實戰參與，將關懷轉化為制度變革的能量。</p>
                    </div>
                    <div class="pt-4 border-t border-stone-800 mt-6 text-[10px] text-stone-500 font-mono">課次 1 引導者</div>
                </div>

                <!-- Card 2 -->
                <div class="bg-stone-900 p-6 rounded-2xl border border-stone-850 card-lift flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <div class="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl bg-gradient-to-br from-amber-800 to-amber-950 text-amber-300 border border-amber-700/30">陳</div>
                            <span class="text-[10px] text-stone-500 font-mono">LECTURER</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-100">陳書吟</h3>
                        <p class="text-xs text-amber-500 mb-4">板橋社區大學主秘</p>
                        <p class="text-stone-300 text-xs leading-relaxed">長期致力於社區大學教育與地方創生。分享地方元素如何被看見，並探討社大與國小如何透過行動與教育攜手翻轉地方（如金瓜石與瓜山國小協作案例）。</p>
                    </div>
                    <div class="pt-4 border-t border-stone-800 mt-6 text-[10px] text-stone-500 font-mono">課次 2 引導者</div>
                </div>

                <!-- Card 3 -->
                <div class="bg-stone-900 p-6 rounded-2xl border border-stone-850 card-lift flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <div class="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl bg-gradient-to-br from-emerald-850 to-stone-950 text-stone-300 border border-stone-700/30">鍾</div>
                            <span class="text-[10px] text-stone-500 font-mono">LECTURER</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-100">鍾淑華</h3>
                        <p class="text-xs text-amber-500 mb-4">薩提爾帶領人</p>
                        <p class="text-stone-300 text-xs leading-relaxed">專業薩提爾模式帶領者。擅長從身體感官的開啟出發，陪伴學員進行深度的自我探索，進而了解自身的多元智能特質與內在渴望，在寧靜中找回真實的自我連結。</p>
                    </div>
                    <div class="pt-4 border-t border-stone-800 mt-6 text-[10px] text-stone-500 font-mono">課次 3 引導者</div>
                </div>

                <!-- Card 4 -->
                <div class="bg-stone-900 p-6 rounded-2xl border border-stone-850 card-lift flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <div class="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-emerald-300 border border-emerald-700/30">毛</div>
                            <span class="text-[10px] text-stone-500 font-mono">LECTURER</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-100">毛西老師</h3>
                        <p class="text-xs text-amber-500 mb-4">《為什麼兒童哲學》創辦人</p>
                        <p class="text-stone-300 text-xs leading-relaxed">專長於兒童哲學思辨引導。透過特製桌遊與互動情境設計，帶領學員與孩子反思日常、勇敢表達、並轉化為具體行動，將哲學思辨帶入生活日常。</p>
                    </div>
                    <div class="pt-4 border-t border-stone-800 mt-6 text-[10px] text-stone-500 font-mono">課次 4 引導者</div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ & INFO SECTION -->
    <section id="faq" class="py-24 bg-stone-900 relative border-t border-stone-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 class="text-3xl sm:text-4xl font-bold text-stone-100">參課須知與繳費資訊</h2>
                <p class="text-stone-400 text-sm">請在報名前詳細閱讀，我們制定了合理的繳費退費與學習要求規範。</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <!-- Administrative Info -->
                <div class="space-y-6">
                    <div class="bg-stone-950 p-8 rounded-3xl border border-stone-850 space-y-6">
                        <h3 class="text-xl font-bold text-stone-100 border-b border-stone-900 pb-3">學員要求與報名規範</h3>
                        <div class="space-y-4 text-sm text-stone-300">
                            <p><strong>參加者限制：</strong>16 歲以上自然人（家長若攜帶孩子一同參與，以不干擾課程進行為原則）。</p>
                            <p><strong>學習承諾：</strong>參課者必須參加至少一次選題報告，並認真參與。同組夥伴每人皆需上台報告。</p>
                            <p><strong>限額：</strong>10~30 人精緻小班，額滿即止。</p>
                        </div>
                    </div>
                    <div class="bg-stone-950 p-8 rounded-3xl border border-stone-850 space-y-4">
                        <h3 class="text-xl font-bold text-stone-100 border-b border-stone-900 pb-3">學分認定 (政大九梯)</h3>
                        <p class="text-stone-300 text-sm leading-relaxed">
                            對政大九梯學員，達成以下兩項條件者得到一個組課學分：<br>
                            1. 出席達 7 課次以上。<br>
                            2. 選題報告得到當日參課者半數同意通過。
                        </p>
                    </div>
                    <div class="bg-stone-950 p-8 rounded-3xl border border-stone-850 space-y-3 text-sm text-stone-300">
                        <h3 class="text-xl font-bold text-stone-100 border-b border-stone-900 pb-3">上課方式與地點</h3>
                        <p class="font-semibold text-emerald-400">實體 + 線上同步授課</p>
                        <p>台北地點：台北市大安區信義路三段162-16號4樓 (台北市小實光)</p>
                        <p>台中地點：台中市烏日區大同九街73號 (台中共生宅) *11/7 指定地點</p>
                    </div>
                </div>

                <!-- Payment Details -->
                <div class="space-y-6">
                    <div class="bg-gradient-to-b from-stone-950 to-emerald-950/20 p-8 rounded-3xl border border-emerald-900/30 space-y-6">
                        <h3 class="text-xl font-bold text-stone-100 border-b border-stone-900 pb-3">參課費用</h3>
                        <div class="bg-stone-950 p-5 rounded-2xl border border-stone-850 text-center">
                            <span class="text-xs text-stone-500 font-mono block">全九堂優惠價</span>
                            <p class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">NT$ 3,000</p>
                        </div>
                        <p class="text-xs text-stone-400 leading-relaxed">
                            九個課次共 NT 3000 元，請於 7/20 課前繳齊。<br>
                            課前退課者全額退費；8/1 之後退課者不予退費。
                        </p>
                    </div>

                    <div class="bg-stone-950 p-8 rounded-3xl border border-stone-850 space-y-4">
                        <h3 class="text-xl font-bold text-stone-100 border-b border-stone-900 pb-3">匯款資訊</h3>
                        <div class="space-y-3 font-mono text-sm">
                            <div class="flex justify-between border-b border-stone-900 pb-2">
                                <span class="text-stone-500">匯款銀行</span>
                                <span class="text-stone-200">國泰世華銀行 (013) 松山分行</span>
                            </div>
                            <div class="flex justify-between border-b border-stone-900 pb-2">
                                <span class="text-stone-500">匯款帳號</span>
                                <span class="text-stone-200">037-03-100268-1</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-stone-500">戶名</span>
                                <span class="text-stone-200">中華民國振鐸學會</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-stone-950 border-t border-stone-900 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <p class="text-sm text-stone-500">主辦單位：政大九梯說課型組課課主群</p>
            <p class="text-xs text-stone-600">&copy; 2026 自主學習生態系 ALE. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- REGISTRATION MODAL -->
    <div id="signup-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md">
        <div class="relative w-full max-w-xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl">
            <div class="h-2 bg-gradient-to-r from-emerald-500 via-amber-400 to-amber-600"></div>
            <button onclick="closeModal()" class="absolute top-4 right-4 text-stone-400 hover:text-stone-100 p-2 rounded-full hover:bg-stone-850 transition-colors">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="p-6 sm:p-10 text-left space-y-6">
                <div class="space-y-2">
                    <span class="text-xs font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full font-bold">REGISTRATION</span>
                    <h3 class="text-2xl font-bold text-stone-100">即刻加入自主學習生態系</h3>
                    <p class="text-stone-400 text-sm">請點擊下方按鈕，直接前往官方註冊與匯款確認表單：</p>
                </div>
                <div class="bg-stone-950 p-6 rounded-2xl border border-stone-850 space-y-4">
                    <p class="text-xs text-stone-400">大會正式報名連結：</p>
                    <p class="text-emerald-400 font-mono select-all truncate text-sm">https://urclass.net/AL/signup/signup.php</p>
                    <a href="https://urclass.net/AL/signup/signup.php" target="_blank" class="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-emerald-600 to-amber-600 text-stone-100 rounded-xl font-bold tracking-wide transition-all shadow-lg glow-btn">
                        <span>開啟官方報名表單</span>
                        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- JAVASCRIPT FOR STANDALONE INTERACTIONS -->
    <script>
        // Tab switching
        const tabData = {
            parent: {
                target: '家長專屬導引',
                headline: '「當你開始擔心，AI 會比你更會教孩子時…」',
                intro: '孩子遇到問題，第一個不是問老師，也不是問爸媽，而是打開 AI。那我們真正該教孩子的是什麼？是背更多知識？還是學會判斷真假？是避免使用 AI？還是學會與 AI 合作？',
                bullets: [
                    '真正的挑戰不是 AI，而是孩子是否保有：獨立思考、判斷、行動與人際協作的能力。',
                    '不談工具操作，而是探討 AI 如何成為自主學習的夥伴，不綁架大腦。',
                    '由陳一慈老師（野可以）與趙逸帆老師共同引導，解開大人形形色色的焦慮，重建未來陪伴心法。'
                ],
                closing: '也許這九堂課，能幫你和孩子找到一條在數位時代安穩成長的道路。歡迎你的加入。'
            },
            educator: {
                target: '教育工作者導引',
                headline: '「我們真的缺的是教學方法嗎？」',
                intro: '每一年，我們學新的教材、新的教法、新的科技。但孩子真的因此變得更願意學習了嗎？也許真正需要更新的，不是教法，而是我們對教育公共性的理解與實踐。',
                bullets: [
                    '回到最根本：教育的公共價值是什麼？自主學習到底是陪伴還是放任？',
                    '重新思索在 AI 時代下，教師或引導者真正不可被替代的核心定位與溫度。',
                    '不只是聽課！這是一群教育工作者共同思辨、共同實作、共同提出變革行動的孵化場。'
                ],
                closing: '如果你也覺得「教育不能再只是把課上完」，我們誠摯邀請你一同重新定義學習生態。'
            },
            experimental: {
                target: '實驗教育興趣者導引',
                headline: '「沒有背景、沒有很多錢，也能走進實驗教育嗎？」',
                intro: '很多人以為實驗教育只是有錢、有資源家庭的「特權」與理想。但如果一個孩子的未來完全取決於父母的收入與資源，那教育還能稱為公平嗎？我們希望能與你討論的不是哪所學校更好，而是：每個孩子，是否都擁有選擇適合自己教育的權利？',
                bullets: [
                    '丁志仁老師分享：重建教育經費保障論點，探討制度如何實現教育平權與公共保障。',
                    '陳書吟老師分享：板橋社大如何與人口外移小學協作，從地方元素翻轉教育資源弱勢。',
                    '家長團互聊分享：沒有雄厚資源，一般家庭如何透過互助合作與協作夥伴共創溫暖的共學環境。'
                ],
                closing: '教育，不該只留給幸運的人。這九堂課，邀你一起跨越門檻，走入實驗教育的真實溫暖。'
            },
            change: {
                target: '想改變自己的人導引',
                headline: '「也許，你不是沒有能力，只是沒有找到願意行動的方法。」',
                intro: '想做出改變，卻總是卡在『等準備好』、『等有時間』、或『等有人陪』？一眨眼，一年又過去了。自主學習最難的從來不是學什麼，而是如何跨出第一步，並在混亂中持續走下去。',
                bullets: [
                    '學習承擔合理風險：李光莒老師引導我們解構冒險教育，學習擁抱未知並學會微冒險設計。',
                    '思辨與行動：毛西老師透過哲學桌遊，訓練在日常中反思、精準表達、並當下落實行動。',
                    '拒認空談：課程中每位學員都有上台與分組實作機會，在安全、包容的夥伴群體中攜手實踐。'
                ],
                closing: '這不是一門空洞的成功學，而是一段陪你把想法落地成行動的旅程。給自己一個開始的機會。'
            },
            general: {
                target: '所有關心教育的你導引',
                headline: '「如果教育只剩下考試，我們的下一代還剩下什麼？」',
                intro: '教育，不只是孩子的事，它決定了一個社會，未來會長出什麼樣的大人。當我們聚在一起討論，就不只是在尋找解法，而是在親手縫補這片土地的學習網絡。',
                bullets: [
                    '探討教育公共性與經費保障、從地方文化出發看見公民參與的無限可能。',
                    '四大核心板塊：教育公共性、自我探索、走向人群、接受合理風險，全方位覆蓋學習議題。',
                    '在實體小實光空間與台中共生宅進行深度交流，實體加線上同步，消弭地理藩籬。'
                ],
                closing: '真正的學習是離開教室後，開始改變自己的生活，影響身邊的人。讓我們一起加入『自主學習生態系』。'
            }
        };

        function switchTab(tabId) {
            // Update buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.className = "tab-btn px-5 py-3 rounded-full text-sm font-semibold transition-all border bg-stone-900 border-stone-800 text-stone-300 hover:border-emerald-800/40";
            });
            const activeBtn = document.getElementById('btn-' + tabId);
            if (activeBtn) {
                activeBtn.className = "tab-btn px-5 py-3 rounded-full text-sm font-semibold transition-all border bg-emerald-900 border-emerald-600 text-amber-200";
            }

            // Update contents
            const data = tabData[tabId];
            document.getElementById('tab-headline').innerText = data.headline;
            document.getElementById('tab-intro').innerText = data.intro;
            document.getElementById('tab-closing').innerText = data.closing;
            
            // Re-render bullets
            const bulletsContainer = document.getElementById('tab-bullets');
            bulletsContainer.innerHTML = '';
            data.bullets.forEach(b => {
                const li = document.createElement('li');
                li.className = 'flex items-start gap-2';
                li.innerHTML = '✔ <span>' + b + '</span>';
                bulletsContainer.appendChild(li);
            });
        }

        // Accordions
        function toggleAccordion(id) {
            const el = document.getElementById('acc-' + id);
            if (el.classList.contains('hidden')) {
                // close all others
                for (let i = 1; i <= 9; i++) {
                    const acc = document.getElementById('acc-' + i);
                    if (acc) acc.classList.add('hidden');
                }
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }

        // Modal triggers
        function openModal() {
            document.getElementById('signup-modal').classList.remove('hidden');
        }
        function closeModal() {
            document.getElementById('signup-modal').classList.add('hidden');
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }
    </script>
</body>
</html>`;
}
