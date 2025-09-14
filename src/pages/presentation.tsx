import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import "../styles/presentation.scss";
import { SlideItem } from "../components/slide-item";
import { Heading } from "../components/heading";
import { SectionTitle } from "../components/section-title";
import { graphql, PageProps } from "gatsby";

export const Head = () => (
  <SEO
    title="PRESENTATION"
    description="デザインから実装までを手がけるWeb開発者・小倉 且也の紹介です。"
  />
);

export default function Presentation({
  data,
}: PageProps<Queries.PresentationQuery>) {
  const slides = data.allContentfulPresentation.edges;
  const slides_general = slides
    .filter(({ node }) => node.category === "general")
    .map(({ node }) => node);
  const slides_cybozu = slides
    .filter(({ node }) => node.category === "cybozu")
    .map(({ node }) => node);

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="page-title-container">
          <Heading title="PRESENTATION" subTitle="過去の登壇の記録" />
        </div>
      </div>
      <main>
        <div className="presentation">
          <section>
            <div className="wrapper">
              <SectionTitle title="一般的な話題" />
              <div className="slide-list">
                {slides_general.map((slide, index) => (
                  <SlideItem
                    key={index}
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
            </div>
          </section>
          <section>
            <div className="wrapper">
              <SectionTitle title="サイボウズでの取り組み" />
              <div className="slide-list">
                {slides_cybozu.map((slide, index) => (
                  <SlideItem
                    key={index}
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
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const query = graphql`
  query Presentation {
    allContentfulPresentation(sort: { date: DESC }) {
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
  }
`;
