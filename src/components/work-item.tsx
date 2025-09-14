import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import "../styles/work-item.scss";

type Props = {
  title: string;
  abstract: string;
  category: string;
  year: string;
  client: string;
  url: string;
  thumbnailData: IGatsbyImageData;
};

export const WorkItem: React.FC<Props> = ({
  title,
  abstract,
  category,
  year,
  client,
  url,
  thumbnailData,
}) => {
  return (
    <Link to={url} className="work-item">
      <GatsbyImage image={thumbnailData} alt="" className="thumnail" />
      <h2 className="title">{title}</h2>
      <p className="description">{abstract}</p>
      <p className="detail">
        {category}・{year}・{client}
      </p>
    </Link>
  );
};
