import React from "react";
import { presentation_slides } from "../components/constant";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import "../styles/presentation.scss";
import { SlideItem } from "../components/slide-item";
import { Heading } from "../components/heading";
import { SectionTitle } from "../components/section-title";

export const Head = () => (
  <SEO
    title="PRESENTATION"
    description="デザインから実装までを手がけるWeb開発者・小倉 且也の紹介です。"
  />
);

export default function Presentation() {
  const slides_general = presentation_slides.filter(
    ({ category }) => category === "general"
  );
  const slides_cybozu = presentation_slides.filter(
    ({ category }) => category === "cybozu"
  );

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="page-title-container">
          <Heading
            title="PRESENTATION"
            subTitle="過去の登壇の記録"
          />
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
                    slideUrl={slide.slideUrl}
                    eventUrl={slide.eventUrl}
                    thumbnailUrl={slide.thumbnailUrl}
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
                    slideUrl={slide.slideUrl}
                    eventUrl={slide.eventUrl}
                    thumbnailUrl={slide.thumbnailUrl}
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
