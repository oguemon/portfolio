import tech_adobe_ai from "../assets/tech/adobe-ai.svg";
import tech_adobe_id from "../assets/tech/adobe-id.svg";
import tech_adobe_pr from "../assets/tech/adobe-pr.svg";
import tech_adobe_ps from "../assets/tech/adobe-ps.svg";
import tech_adobe_xd from "../assets/tech/adobe-xd.svg";
import tech_android from "../assets/tech/android.svg";
import tech_css from "../assets/tech/css3.svg";
import tech_gatsby from "../assets/tech/gatsby.svg";
import tech_html from "../assets/tech/html5.svg";
import tech_java from "../assets/tech/java.svg";
import tech_javascript from "../assets/tech/javascript.svg";
import tech_latex from "../assets/tech/latex.svg";
import tech_other from "../assets/tech/other.svg";
import tech_php from "../assets/tech/php.svg";
import tech_react from "../assets/tech/react.svg";
import tech_sass from "../assets/tech/sass.svg";
import tech_typescript from "../assets/tech/typescript.svg";
import tech_wordpress from "../assets/tech/wordpress.svg";
import slide_20230630 from "../assets/slide/2023-06-30.jpg";
import slide_20231031 from "../assets/slide/2023-10-31.jpg";
import slide_20240120 from "../assets/slide/2024-01-20.jpg";
import slide_20240702 from "../assets/slide/2024-07-02.jpg";
import slide_20250201 from "../assets/slide/2025-02-01.jpg";
import slide_20250204 from "../assets/slide/2025-02-04.jpg";
import slide_20250228 from "../assets/slide/2025-02-28.jpg";
import slide_20250321 from "../assets/slide/2025-03-21.jpg";
import slide_20250906 from "../assets/slide/2025-09-06.jpg";

// サイトタイトル
export const site_title = "OGURA KATSUYA";
// サイトURL
export const site_baseurl = "https://ogura.biz";

// SNSのURL
export const sns_url = {
    x:         "https://x.com/oguemon_com",
    instagram: "https://instagram.com/oguemon_com/",
    github:    "https://github.com/oguemon/",
    zenn:      "https://zenn.dev/oguemon",
};

// スキル一覧
export const skill_names = [
  "Android",
  "CSS",
  "Gatsby",
  "HTML",
  "Illustrator",
  "InDesign",
  "Java",
  "JavaScript",
  "LaTeX",
  "Premiere Pro",
  "PhotoShop",
  "PHP",
  "React",
  "SCSS",
  "TypeScript",
  "WordPress",
  "XD",
] as const;

type SkillName = typeof skill_names[number];

// 技術のアイコン
export const techIcon = (tech_name: SkillName) => {
    switch (tech_name) {
        case "Android": return tech_android;
        case "CSS": return tech_css;
        case "Gatsby": return tech_gatsby;
        case "HTML": return tech_html;
        case "Illustrator": return tech_adobe_ai;
        case "InDesign": return tech_adobe_id;
        case "Java": return tech_java;
        case "JavaScript": return tech_javascript;
        case "LaTeX": return tech_latex;
        case "Premiere Pro": return tech_adobe_pr;
        case "PhotoShop": return tech_adobe_ps;
        case "PHP": return tech_php;
        case "React": return tech_react;
        case "SCSS": return tech_sass;
        case "TypeScript": return tech_typescript;
        case "WordPress": return tech_wordpress;
        case "XD": return tech_adobe_xd;
        default: return tech_other;
    }
};

export const presentation_slides = [
  {
    category: "general" as const,
    title: "奥深くて厄介な「改行」と仲良くなる20分",
    eventName: "フロントエンドカンファレンス北海道2025",
    date: "2025年9月6日",
    place: "北海道札幌市",
    slideUrl: "https://speakerdeck.com/oguemon/vs-new-line",
    eventUrl: "https://fortee.jp/frontend-conf-hokkaido-2025/proposal/e4d66f12-5ab8-40ed-bc3b-ec30df268023",
    thumbnailUrl: slide_20250906,
  },
  {
    category: "cybozu" as const,
    title: "ノーコードツールの裏側につきまとう「20分岐」との戦い",
    eventName: "Muddy Web #11 ~Special Edition~",
    date: "2025年3月21日",
    place: "東京都渋谷区",
    slideUrl: "https://speakerdeck.com/oguemon/kintone-vs-numerous-branches",
    eventUrl: "https://cyberagent.connpass.com/event/346502/",
    thumbnailUrl: slide_20250321,
  },
  {
    category: "cybozu" as const,
    title: "kintone開発を効率化するためにチームで試した施策とその結果を大放出！",
    eventName: "サイボウズ x SmartHR アジャイル文化醸成への挑戦～実践と学び～",
    date: "2025年2月28日",
    place: "東京都中央区",
    slideUrl: "https://speakerdeck.com/oguemon/efforts-to-improve-efficiency-of-the-kintone-dev-team",
    eventUrl: "https://cybozu.connpass.com/event/340151/",
    thumbnailUrl: slide_20250228,
  },
  {
    category: "cybozu" as const,
    title: "サイボウズ開運冬まつり2025 フロントエンド&デザインクイズ大会",
    eventName: "サイボウズ開運冬まつり2025",
    date: "2025年2月4日",
    place: "東京都中央区",
    slideUrl: "https://speakerdeck.com/oguemon/cybozu-kaiun-winter-fes-2025-frontend-and-design-quiz",
    eventUrl: "",
    thumbnailUrl: slide_20250204,
  },
  {
    category: "general" as const,
    title: "法律の脱レガシーに学ぶフロントエンド刷新",
    eventName: "BuriKaigi 2025",
    date: "2025年2月1日",
    place: "富山県射水市",
    slideUrl: "https://speakerdeck.com/oguemon/modernizing-law-and-frontend-app",
    eventUrl: "https://fortee.jp/burikaigi-2025/proposal/82c32f4b-b504-412e-a847-383c5b57a178",
    thumbnailUrl: slide_20250201,
  },
  {
    category: "general" as const,
    title: "新しいemoji😄のアイデアを Unicodeが募集中‼️🏃‍♀️💨💨💨 傾向を学んでみんな提案しよう💪",
    eventName: "フロントエンドデー（社内イベント）",
    date: "2024年7月2日",
    place: "東京都中央区",
    slideUrl: "https://speakerdeck.com/oguemon/lets-propose-new-emoji-idea",
    eventUrl: "",
    thumbnailUrl: slide_20240702,
  },
  {
    category: "general" as const,
    title: "1,000年後の未来人に届くWebサイトを作りたい！",
    eventName: "BuriKaigi 2024",
    date: "2024年1月20日",
    place: "富山県射水市",
    slideUrl: "https://speakerdeck.com/oguemon/how-to-preserve-websites-for-1000-years",
    eventUrl: "https://burikaigi.dev/2024/speakers/031/",
    thumbnailUrl: slide_20240120,
  },
  {
    category: "cybozu" as const,
    title: "ページ刷新を誰でも簡単にできるようにするためにやったこと",
    eventName: "BARフロントえんどう #1",
    date: "2023年10月31日",
    place: "東京都中央区",
    slideUrl: "https://speakerdeck.com/oguemon/how-to-make-dev-easier-for-everyone",
    eventUrl: "https://cybozu.connpass.com/event/297123/",
    thumbnailUrl: slide_20231031,
  },
  {
    category: "general" as const,
    title: "誰でも簡単⁉️👀 絵文字ができるまで😃👍",
    eventName: "フロントエンドデー（社内イベント）",
    date: "2023年6月30日",
    place: "東京都中央区",
    slideUrl: "https://speakerdeck.com/oguemon/how-to-propose-a-new-emoji",
    eventUrl: "",
    thumbnailUrl: slide_20230630,
  },
];
