import React from "react";
import { skill_names, techIcon } from "../components/constant";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import "../styles/profile.scss";
import skill_1 from "../assets/skill-1.svg";
import skill_2 from "../assets/skill-2.svg";
import skill_3 from "../assets/skill-3.svg";
import { SnsButtonList } from "../components/sns-button-list";
import { Heading } from "../components/heading";
import { SkillItem } from "../components/skill-item";
import { SkillTag } from "../components/skill-tag";
import { CertificationItem } from "../components/certification-item";
import { AwardItem } from "../components/award-item";
import { CareerItem } from "../components/career-item";
import { SectionTitle } from "../components/section-title";

export const Head = () => <SEO title="PROFILE" description="デザインから実装までを手がけるWeb開発者・小倉 且也の紹介です。" />

export default function Profile() {
  return <>
    <Header />
    <div className="wrapper">
      <div className="page-title-container">
        <Heading
          title="OGURA KATSUYA"
          subTitle="Web Designer / Engineer"
        />
        <SnsButtonList />
      </div>
    </div>
    <main>
      <div className="profile">
        <section>
          <div className="wrapper">
            <div className="intro">
                <div className="lead-sentense">
                  東京在住のWeb開発者。阪大情報科学科3年次修了後に同大学院へ飛び入学。修士（情報科学）。
                  現職では大規模長寿Webサービスのフロントエンド実装をゼロから作り直す挑戦に臨みながら、人材マネジメントにも携わっています。
                  個人サイト「おぐえもん.com」にて記事執筆やWebサービス開発をしており、その中のコンテンツ「大学1年生もバッチリ分かる線形代数入門」は460万以上のPVを誇り書籍化されました。
                  最近はITカンファレンスでの登壇や、IT雑誌の記事執筆も行いました。
                </div>
            </div>
          </div>
        </section>
        <section>
          <div className="wrapper">
            <SectionTitle title="SKILL" />
            <div className="skill-main-list">
              <SkillItem
                title="UI/UXを前提としたデザイン"
                description="デザインでは、使い勝手の良さや視認性の高さを常に重視しており、心理学的な知見に基づいてこれを追求します。利用者にとって使いやすいものを作ることに強みを持ちます。"
                thumbnailUrl={skill_1}
              />
              <SkillItem
                title="SEO対策やSNSを考えた実装"
                description="Webサイトは訪問されることに意味があります。検索エンジンに正しく情報を伝え、SNS共有時のリンク表示を最適化する。アクセス向上に寄与するこれらの実装ができます。"
                thumbnailUrl={skill_2}
              />
              <SkillItem
                title="デザインもフロント/バックエンドも"
                description="デザインは、Webサイトのみならず、ロゴや印刷物、広報用画像も手掛けます。さらに、Webサイトの設計実装は、ブラウザ側はもちろん、APIやDBが絡むサーバ側もカバーします。"
                thumbnailUrl={skill_3}
              />
            </div>
            <div className="skill-list">
              {skill_names.map(skill_name => (
                <SkillTag key={skill_name} label={ skill_name } iconUrl={ techIcon(skill_name) } />
              ))}
            </div>
          </div>
        </section>
        <section className="certifications">
          <div className="wrapper">
            <SectionTitle title="CERTIFICATIONS" />
            <div className="certification-list">
              <CertificationItem
                type="ap"
                name="応用情報技術者"
                when="2019年春期試験"
                description="経済産業大臣が行う国家試験。高度IT人材となるために必要な応用的知識・技能をもち、高度IT人材としての方向性を確立した者を対象とします。"
                url="//www.ipa.go.jp/shiken/kubun/ap.html"
              />
              <CertificationItem
                type="nw"
                name="ネットワークスペシャリスト"
                when="2019年秋期試験"
                description="経済産業大臣が行う国家試験。ネットワークの技術的専門性を持つことを認定する試験で、高度情報処理技術者試験に含まれます。"
                url="//www.ipa.go.jp/shiken/kubun/nw.html"
              />
              <CertificationItem
                type="db"
                name="データベーススペシャリスト"
                when="2021年秋期試験"
                description="経済産業大臣が行う国家試験。データベースの技術的専門性を持つことを認定する試験で、高度情報処理技術者試験に含まれます。"
                url="//www.ipa.go.jp/shiken/kubun/db.html"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="wrapper">
            <SectionTitle title="AWARDS" />
            <div className="award-list">
              <AwardItem
                name="第6回学生スマートフォンアプリコンテスト 最優秀賞"
                when="2018年8月"
                description="地図アプリ「MYLESTONE」。方向音痴な人でも目的地に到達できることを目指して作りました。今までにない直感的な指標とインターフェースが特長です。"
                links={[
                  {
                    label: "MYLESTONEの紹介ページ",
                    url: "/work/mylestone/",
                    openTab: false
                  },
                  {
                    label: "第6回学生スマートフォンアプリコンテスト公式ページ",
                    url: "https://web.archive.org/web/20250613063838/http://contest2018.sig-cds.net/",
                    openTab: true
                  }
                ]}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="wrapper">
            <SectionTitle title="CAREER" />
            <div className="career-list">
              <CareerItem
                type="work"
                name="サイボウズ株式会社"
                position="フロントエンドエンジニア"
                period="2022 -"
                description="クラウド型の業務アプリ構築サービス「kintone」の要である「アプリ」機能におけるフロントエンド刷新のリードと、フロントエンドエンジニアの人材マネジメントなどを手掛けています。"
                link={{ label: "プロジェクトの紹介ページ", url: "https://blog.cybozu.io/entry/2022/02/04/171154" }}
                isNow
              />
              <CareerItem
                type="work"
                name="株式会社Next Finance Tech"
                position="フロントエンドエンジニア"
                period="2023 -"
                description="業務委託メンバーとして、暗号通貨にまつわる各種レポートを配信する自社メディア「Ledifiリサーチ」をはじめとする各種サービスの設計開発を担当しています。"
                link={{ label: "会社の公式ページ", url: "https://nxt-fintech.com/" }}
                isNow
              />
              <CareerItem
                type="work"
                name="三菱電機株式会社"
                position="バックエンドエンジニア"
                period="2019 - 2022"
                description="新卒入社以来、数百万人規模の利用者を誇るWebサービスのバックエンド処理の設計実装、プロジェクト進行支援を担当していました。"
                link={{ label: "事業部の紹介ページ", url: "https://www.mitsubishielectric.co.jp/saiyo/graduates/philosophy/place/it/" }}
              />
              <CareerItem
                type="school"
                name="大阪大学"
                position="大学院情報科学研究科"
                subPosition="情報ネットワーク学専攻"
                period="2017 - 2019"
                description="家屋や森林など地上の物体を捉えた3次元データ（3次元点群）から目標物を抽出する手法を研究していました。研究データの取得を通じて培ったドローンの自動制御プログラムの実装ノウハウを活用して、高等専門学校生に対して画像認識に基づくドローン制御プログラムの指導なども行いました。"
                link={{ label: "研究室の個人ページ", url: "https://www-higashi.ist.osaka-u.ac.jp/~k-ogura/" }}
              />
              <CareerItem
                type="school"
                name="大阪大学"
                position="基礎工学部情報科学科"
                subPosition="計算機科学コース"
                period="2014 - 2017"
                description="ハードウェア・ソフトウェア双方の基礎設計を学び、最終的にCPUとコンパイラを実装しました。学業の傍で、大学祭中央実行委員会でDTP・WEB広報を担当。さらに3年次は委員長として大学祭の充実と知名度向上を図りました。3年次に大学院試験に合格したので、年度末をもって大学を退学。大学院に飛び進学しました。"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </>
}
