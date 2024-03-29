import React, { useState } from "react";
import { Link } from "gatsby";
import { sns_url, techIcon } from "../components/constant";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import "../styles/profile.scss";
import skill_1 from "../assets/skill-1.svg";
import skill_2 from "../assets/skill-2.svg";
import skill_3 from "../assets/skill-3.svg";

export const Head = () => <SEO title="PROFILE" description="デザインから実装までを手がけるWeb開発者・小倉 且也の紹介です。" />

export default function Profile() {

  const skill_names = [
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
  ];

  const skills = skill_names.map(skill_name => {
    return <>
      <div className="skill-item">
        <div className="thum"><img src={ techIcon(skill_name) } alt={ skill_name } /></div>
        <div className="name">{ skill_name }</div>
      </div>
    </>
  });

  const [setActiveSchoolB, setActiveStateSchoolB] = useState(false);
  const [setActiveSchoolM, setActiveStateSchoolM] = useState(false);
  const [setActiveWork1, setActiveStateWork1] = useState(false);
  const [setActiveWork2, setActiveStateWork2] = useState(false);
  const [setActiveWork3, setActiveStateWork3] = useState(false);
  const toggleAccordion = (target) => {
    if (target == "school_b") {
      setActiveStateSchoolB(!setActiveSchoolB);
      return;
    }
    if (target == "school_m") {
      setActiveStateSchoolM(!setActiveSchoolM);
      return;
    }
    if (target == "work1") {
      setActiveStateWork1(!setActiveWork1);
      return;
    }
    if (target == "work2") {
      setActiveStateWork2(!setActiveWork2);
      return;
    }
    if (target == "work3") {
      setActiveStateWork3(!setActiveWork3);
      return;
    }
  };

  return <>
    <Header />
    <div className="wrapper">
      <div className="title-container">
        <h1 className="title-main">OGURA KATSUYA</h1>
        <div className="title-sub">Web Designer / Engineer</div>
        <div className="sns-btn-list">
          <a href={sns_url.x}         target="_blank" rel="noreferrer" className="sns-btn x"></a>
          <a href={sns_url.instagram} target="_blank" rel="noreferrer" className="sns-btn instagram"></a>
          <a href={sns_url.github}    target="_blank" rel="noreferrer" className="sns-btn github"></a>
          <a href={sns_url.zenn}      target="_blank" rel="noreferrer" className="sns-btn zenn"></a>
        </div>
      </div>
    </div>
    <main>
      <div className="profile">
        <section>
          <div className="wrapper">
            <div className="intro">
                <div className="lead-sentense">
                  Web開発者。サイトのデザインから設計・実装まで幅広く手がけています。
                  阪大基礎工学部3年次修了後に、同大学院へ飛び入学。修士（情報科学）。
                  個人サイト「おぐえもん.com」にて記事執筆やWebサービス開発をしており、その中のコンテンツ「大学1年生もバッチリ分かる線形代数入門」は、460万以上のPVを誇り書籍化されました。
                  個人開発メインですが、WEB開発・広報物作成（画像・動画・印刷物）のお仕事の募集もしてます！
                </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrapper">
            <h2 className="profile-section">SKILL</h2>
            <div className="skill-main-list">
              <div className="skill-main-item">
                <img className="thum" src={ skill_1 } alt="UI/UXを前提としたデザイン" />
                <div className="skill-info">
                  <div className="title">UI/UXを前提としたデザイン</div>
                  <div className="description">
                    デザインでは、使い勝手の良さや視認性の高さを常に重視しており、心理学的な知見に基づいてこれを追求します。
                    利用者にとって使いやすいものを作ることに強みを持ちます。
                  </div>
                </div>
              </div>
              <div className="skill-main-item">
                <img className="thum" src={ skill_2 } alt="SEO対策やSNSを考えた実装" />
                <div className="skill-info">
                  <div className="title">SEO対策やSNSを考えた実装</div>
                  <div className="description">
                    Webサイトは訪問されることに意味があります。
                    検索エンジンに正しく情報を伝え、SNS共有時のリンク表示を最適化する。
                    アクセス向上に寄与するこれらの実装ができます。
                  </div>
                </div>
              </div>
              <div className="skill-main-item">
                <img className="thum" src={ skill_3 } alt="デザインもフロント/バックエンドも" />
                <div className="skill-info">
                  <div className="title">デザインもフロント/バックエンドも</div>
                  <div className="description">
                    デザインは、Webサイトのみならず、ロゴや印刷物、広報用画像も手掛けます。
                    さらに、Webサイトの設計実装は、ブラウザ側はもちろん、APIやDBが絡むサーバ側もカバーします。
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-list">{ skills }</div>
          </div>
        </section>
        <section className="certifications">
          <div className="wrapper">
            <h2 className="profile-section">CERTIFICATIONS</h2>
            <div className="certification-list">
              <div className="certification-item ap">
                <div className="name">応用情報技術者</div>
                <div className="when">2019年春期試験</div>
                <div className="description">経済産業大臣が行う国家試験。高度IT人材となるために必要な応用的知識・技能をもち、高度IT人材としての方向性を確立した者を対象とします。</div>
                <div className="links">
                  <Link to="//www.jitec.ipa.go.jp/1_11seido/ap.html" target="_blank">試験の公式ページへ進む</Link>
                </div>
              </div>
              <div className="certification-item nw">
                <div className="name">ネットワークスペシャリスト</div>
                <div className="when">2019年秋期試験</div>
                <div className="description">経済産業大臣が行う国家試験。ネットワークの技術的専門性を持つことを認定する試験で、高度情報処理技術者試験に含まれます。</div>
                <div className="links">
                  <Link to="//www.jitec.ipa.go.jp/1_11seido/nw.html" target="_blank">試験の公式ページへ進む</Link>
                </div>
              </div>
              <div className="certification-item db">
                <div className="name">データベーススペシャリスト</div>
                <div className="when">2021年秋期試験</div>
                <div className="description">経済産業大臣が行う国家試験。データベースの技術的専門性を持つことを認定する試験で、高度情報処理技術者試験に含まれます。</div>
                <div className="links">
                  <Link to="//www.jitec.ipa.go.jp/1_11seido/db.html" target="_blank">試験の公式ページへ進む</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrapper">
            <h2 className="profile-section">AWARDS</h2>
            <div className="award-list">
              <div className="award-item">
                <div className="name">第6回学生スマートフォンアプリコンテスト 最優秀賞</div>
                <div className="when">2018年8月</div>
                <div className="description">地図アプリ「MYLESTONE」。方向音痴な人でも目的地に到達できることを目指して作りました。今までにない直感的な指標とインターフェースが特長です。</div>
                <div className="links">
                  <Link to="/work/mylestone/" target="_blank">MYLESTONEの紹介ページ</Link>
                  <Link to="//contest2018.sig-cds.net/" target="_blank">第6回学生スマートフォンアプリコンテスト公式ページ</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrapper">
            <h2 className="profile-section">CAREER</h2>
            <div className="career-container">
              <div className="career-item">
                <div className="left-box">
                  <div className="period">2014 - 2017</div>
                </div>
                <div className="right-box">
                  <div className={"info school" + (setActiveSchoolB? " open" : "")} onClick={() => toggleAccordion("school_b")}>
                    <div className="name">大阪大学</div>
                    <div className="subname">基礎工学部情報科学科<span className="detail">計算機科学コース</span></div>
                  </div>
                  <div className={"description" + (setActiveSchoolB? " open" : "")}>
                    ハードウェア・ソフトウェア双方の基礎設計を学び、最終的にCPUとコンパイラを実装しました。
                    学業の傍で、大学祭中央実行委員会でDTP・WEB広報を担当。さらに3年次は委員長として大学祭の充実と知名度向上を図りました。
                    3年次に大学院試験に合格したので、年度末をもって大学を退学。大学院に飛び進学しました。
                  </div>
                </div>
              </div>
              <div className="career-item">
                <div className="left-box">
                  <div className="period">2017 - 2019</div>
                </div>
                <div className="right-box">
                  <div className={"info school" + (setActiveSchoolM? " open" : "")} onClick={() => toggleAccordion("school_m")}>
                    <div className="name">大阪大学</div>
                    <div className="subname">大学院情報科学研究科<span className="detail">情報ネットワーク学専攻</span></div>
                  </div>
                  <div className={"description" + (setActiveSchoolM? " open" : "")}>
                    家屋や森林など地上の物体を捉えた3次元データ（3次元点群）から目標物を抽出する手法を研究していました。
                    研究データの取得を通じて培ったドローンの自動制御プログラムの実装ノウハウを活用して、
                    高等専門学校生に対して画像認識に基づくドローン制御プログラムの指導なども行いました。
                    <a className="link" href="https://www-higashi.ist.osaka-u.ac.jp/~k-ogura/" target="_blank">研究室の個人ページ</a>
                  </div>
                </div>
              </div>
              <div className="career-item">
                <div className="left-box">
                  <div className="period">2019 - 2022</div>
                </div>
                <div className="right-box">
                  <div className={"info work" + (setActiveWork1? " open" : "")} onClick={() => toggleAccordion("work1")}>
                    <div className="name">三菱電機株式会社</div>
                    <div className="subname">バックエンドエンジニア</div>
                  </div>
                  <div className={"description" + (setActiveWork1? " open" : "")}>
                    新卒入社以来、数百万人規模の利用者を誇るWebサービスのバックエンド処理の設計実装、プロジェクト進行支援を担当していました。
                    <a className="link" href="https://www.mitsubishielectric.co.jp/saiyo/graduates/philosophy/place/it/" target="_blank">事業部の紹介ページ</a>
                  </div>
                </div>
              </div>
              <div className="career-item now">
                <div className="left-box">
                  <div className="period">2022 -</div>
                </div>
                <div className="right-box">
                  <div className={"info work" + (setActiveWork2? " open" : "")} onClick={() => toggleAccordion("work2")}>
                    <div className="name">サイボウズ株式会社</div>
                    <div className="subname">フロントエンドエンジニア</div>
                  </div>
                  <div className={"description" + (setActiveWork2? " open" : "")}>
                    クラウド型の業務アプリ構築サービス「kintone」のフロントエンド刷新プロジェクト（通称フロリア）に参画しています。
                    <a className="link" href="https://blog.cybozu.io/entry/2022/02/04/171154" target="_blank">プロジェクトの紹介ページ</a>
                  </div>
                </div>
              </div>
              <div className="career-item now">
                <div className="left-box">
                  <div className="period">2023 -</div>
                </div>
                <div className="right-box">
                  <div className={"info work" + (setActiveWork3? " open" : "")} onClick={() => toggleAccordion("work3")}>
                    <div className="name">株式会社Next Finance Tech</div>
                    <div className="subname">フロントエンドエンジニア</div>
                  </div>
                  <div className={"description" + (setActiveWork3? " open" : "")}>
                    業務委託メンバーとして、暗号通貨にまつわる各種レポートを配信する自社メディア「Ledifiリサーチ」をはじめとする各種サービスの設計開発を担当しています。
                    <a className="link" href="https://nxt-fintech.com/" target="_blank">会社の公式ページ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </>
}
