export interface Lecturer {
  id: string;
  name: string;
  title: string;
  bio: string;
  description: string;
  accentColor: string; // e.g., emerald, amber, stone
}

export interface CourseClass {
  id: number;
  title: string;
  time: string;
  location: string;
  speaker: string;
  section: string; // "教育公共性" | "自我探索" | "走向人群" | "接受合理風險"
  details: string;
}

export interface CourseGoal {
  id: number;
  title: string;
  description: string;
}

export interface MarketingCopy {
  id: string;
  target: string; // e.g., "家長", "教育工作者", "實驗教育興趣者", "想改變自己的人", "所有關心教育的人"
  headline: string;
  intro: string;
  bulletPoints: string[];
  closing: string;
}
