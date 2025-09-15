import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import "../styles/top.scss";
import hero from "../assets/hero.mp4";
import { WorkItem } from "../components/work-item";
import { SnsButtonList } from "../components/sns-button-list";
import { Heading } from "../components/heading";
import { SectionTitle } from "../components/section-title";
import { SlideItem } from "../components/slide-item";
import { LearnMore } from "../components/learn-more";
import { contact_url } from "../components/constant";

export const Head = () => <SEO title="小倉 且也" description="デザインから実装までを手がけるWeb開発者・小倉 且也のポートフォリオサイトです。" />

export default function Top({ data }) {
  return <>
      <Header />
      <div className="hero">
        <video src={ hero } autoPlay loop muted playsInline>お使いのブラウザでは再生できません。</video>
        <div className="page-title-container">
        <Heading
          title="OGURA KATSUYA"
          subTitle="Web Designer / Engineer"
        />
          <SnsButtonList />
        </div>
      </div>
      <main>
        <div className="intro">
          <div className="wrapper">
            <div className="lead-sentense">
              東京在住のWeb開発者。サイトのデザインから設計実装まで一貫して担えます。
              本職は長寿プロダクトの開発がメインで、長期間の保守に耐える設計実装のノウハウを鍛えました。
              また、Webのみならず、印刷物や動画など多様な媒体の広報物制作も得意です。
              分かりやすい解説文の執筆にも強みがあり、数学書の企画出版やIT雑誌の記事執筆を経験しています。
              WEB開発・広報物作成・執筆などのお仕事を募集しております！
            </div>
            <div className="learn-more-container">
              <LearnMore path="/profile" label="詳しいプロフィールを見る" />
              <a className="contact-link" href={contact_url} target="_blank">
                お仕事などの依頼をする
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <SectionTitle title="WORK" />
          <div className="work-list">
            {data.allContentfulPortfolio.edges.map(edge => (
              <WorkItem
                key={edge.node.slug}
                title={edge.node.title}
                abstract={edge.node.abstract}
                category={edge.node.category.toUpperCase()}
                year={edge.node.year}
                client={edge.node.client}
                url={`/work/${edge.node.slug}/`}
                thumbnailData={edge.node.thumnail.gatsbyImageData}
              />
            ))}
          </div>
        </div>
        <div className="wrapper">
          <SectionTitle title="PRESENTATION" />
          <div className="work-list">
            {data.allContentfulPresentation.edges.map(({ node: slide }) => (
              <SlideItem
                key={slide.slug}
                title={slide.title}
                eventName={slide.eventName}
                date={slide.date}
                place={slide.place}
                slideUrl={slide.slideUrl ?? ""}
                eventUrl={slide.eventUrl ?? ""}
                thumbnailData={slide.thumbnail.gatsbyImageData}
              />
            ))}
          </div>
          <div className="learn-more-container">
            <LearnMore path="/presentation" label="他の登壇内容を見る" />
          </div>
        </div>
      </main>
      <Footer />
    </>
}

export const query = graphql`
  query Index {
    allContentfulPresentation(sort: { date: DESC }, limit: 6) {
      edges {
        node {
          slug
          category
          title
          eventName
          date
          place
          slideUrl
          eventUrl
          thumbnail {
            title
            gatsbyImageData
          }
        }
      }
    }
    allContentfulPortfolio (
      sort: { year: DESC }
    ) {
      edges {
        node {
          abstract
          category
          client
          slug
          role
          tech
          title
          url
          year
          description {
            description
          }
          thumnail {
            title
            gatsbyImageData
          }
        }
      }
    }
  }
`;
