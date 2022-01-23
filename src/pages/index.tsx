import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image'
import { sns_url } from "../components/constant";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import "../styles/top.scss";

export default function Top({ data }) {

  const list = data.allContentfulPortfolio.edges.map(edge => {
    return <>
      <Link to={`/work/${edge.node.slug}/`} className="work-box">
        <GatsbyImage
          image={edge.node.thumnail.gatsbyImageData}
          alt={edge.node.thumnail.title}
          className="thumnail"
        />
        <h2 className="title">{ edge.node.title }</h2>
        <p className="description">{ edge.node.abstract }</p>
        <p className="detail">{ edge.node.category.toUpperCase() }・{ edge.node.year }・{ edge.node.client }</p>
      </Link>
    </>
  });

  return <>
    <SEO title="小倉 且也" description="デザインから実装までを手がけるWeb開発者・小倉 且也のポートフォリオサイトです。" />
    <Header />
    <div className="hero">
      <div className="wrapper">
        <div className="title-container">
          <h1 className="title-main">OGURA KATSUYA</h1>
          <div className="title-sub">Web Designer / Engineer</div>
          <div className="sns-btn-list">
            <a href={sns_url.twitter}   target="_blank" rel="noreferrer" className="sns-btn twitter" aria-label="twitter"></a>
            <a href={sns_url.instagram} target="_blank" rel="noreferrer" className="sns-btn instagram" aria-label="instagram"></a>
            <a href={sns_url.github}    target="_blank" rel="noreferrer" className="sns-btn github" aria-label="github"></a>
          </div>
        </div>
        <ul className="hero-img-list">
          <li className="hero-img"></li>
        </ul>
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
          <Link to="/profile" className="learn-more">詳しいプロフィールを見る</Link>
        </div>
      </div>
      <div className="wrapper">
        <div className="work-list">{ list }</div>
      </div>
    </main>
    <Footer />
  </>
}

export const query = graphql`
  query MyQuery {
    allContentfulPortfolio (
      sort: { fields: year, order: DESC }
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
