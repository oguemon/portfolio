import React, { useState } from "react";
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import { techIcon } from "../components/constant";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import "../styles/workdetail.scss";

export const Head = ({ pageContext }) => {
  const { abstract, title } = pageContext.post;
  const ogp_url = getSrc(getImage(pageContext.post.thumnail));
  return <SEO title={ title } description={ abstract } ogpimg={ ogp_url } />
}

export default function WorkDetail({ pageContext }) {

  const { category, client, role, tech, title, url, year } = pageContext.post;
  const description = pageContext.post.description.description;
  const topimg = pageContext.post.topimg;

  const tech_names = !!tech ? tech.split(",") : [];
  const tech_list = tech_names.map(tech_name => {
    return <>
      <div className="tech-item">
        <div className="thum"><img src={ techIcon(tech_name) } alt={ tech_name } /></div>
        <div className="name">{ tech_name }</div>
      </div>
    </>
  });

  const [descriptionOpened, setDescriptionOpened] = useState(false);
  const openDescription = () => {
    setDescriptionOpened(true);
  };

  return <>
    <Header />
    <main>
      <div className="work-info">
        <div className="wrapper">
          <GatsbyImage
            image={topimg.gatsbyImageData}
            alt={topimg.title}
            className="thumnail"
          />
          <div className="category"><span>{ category.toUpperCase() }</span></div>
          <h1 className="title">{ title }</h1>
          <div className="year">{ year }年</div>
          <div className="client">{ client }</div>
          <a href={ url } target="_blank" rel="noreferrer" className="url">{ url }</a>
          <div className="area">{ role }</div>
          <div className="tech-list">{ tech_list }</div>
          <div className={"description" + (descriptionOpened? " open" : "")} dangerouslySetInnerHTML={ {__html: description } } />
          <div className={"read-more" + (descriptionOpened? " open" : "")} onClick={ openDescription }>続きを読む</div>
        </div>
      </div>
      <div className="imgs">
      {
        pageContext.post.subimgs && pageContext.post.subimgs.map(subimg => {
          return <>
            <div className="img-container">
              <GatsbyImage
                image={subimg.gatsbyImageData}
                alt={subimg.title}
              />
            </div>
          </>
        })
      }
      </div>
    </main>
    <Footer />
  </>
}
