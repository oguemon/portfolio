import React from "react";
import { presentation_slides, sns_url } from "../components/constant";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import "../styles/presentation.scss";
import { SlideItem } from "../components/slide-item";

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
        <div className="title-container">
          <h1 className="title-main">PRESENTATION</h1>
          <div className="title-sub">過去の登壇の記録</div>
        </div>
      </div>
      <main>
        <div className="presentation">
          <section>
            <div className="wrapper">
              <h2 className="section-name">一般的な話題</h2>
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
              <h2 className="section-name">サイボウズでの取り組み</h2>
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
