import tech_adobe_ai from "../assets/tech/adobe-ai.svg";
import tech_adobe_id from "../assets/tech/adobe-id.svg";
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

// サイトタイトル
export const site_title = "OGURA KATSUYA";
// サイトURL
export const site_baseurl = "https://ogura.biz";

// SNSのURL
export const sns_url = {
    twitter:   "https://twitter.com/oguemon_com/",
    instagram: "https://instagram.com/oguemon_com/",
    github:    "https://github.com/oguemon/",
};

// 技術のアイコン
export const techIcon = tech_name => {
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
