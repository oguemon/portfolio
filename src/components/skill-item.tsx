import React from "react";
import "../styles/skill-item.scss";

type Props = {
  title: string;
  description: string;
  thumbnailUrl: string;
};

export const SkillItem: React.FC<Props> = ({
  title,
  description,
  thumbnailUrl,
}) => {
  return (
    <div className="skill-item">
      <img className="thum" src={thumbnailUrl} alt="" />
      <div className="skill-info">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
