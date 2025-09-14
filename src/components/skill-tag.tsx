import React from "react";
import "../styles/skill-tag.scss";

type Props = {
  label: string;
  iconUrl: string;
};

export const SkillTag: React.FC<Props> = ({ label, iconUrl }) => {
  return (
    <div className="skill-tag">
      <img className="icon" src={iconUrl} alt="" />
      <div className="name">{label}</div>
    </div>
  );
};
