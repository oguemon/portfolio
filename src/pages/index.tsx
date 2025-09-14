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
            Web開発者。サイトのデザインから設計・実装まで幅広く手がけています。
            阪大基礎工学部3年次修了後に、同大学院へ飛び入学。修士（情報科学）。
            個人サイト「おぐえもん.com」にて記事執筆やWebサービス開発をしており、その中のコンテンツ「大学1年生もバッチリ分かる線形代数入門」は、460万以上のPVを誇り書籍化されました。
            個人開発メインですが、WEB開発・広報物作成（画像・動画・印刷物）のお仕事の募集もしてます！
          </div>
          <div className="learn-more-container">
            <LearnMore path="/profile" label="詳しいプロフィールを見る" />
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
          {data.allContentfulPresentation.edges.map(({node: slide}) => (
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
