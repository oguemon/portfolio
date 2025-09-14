import React from "react";
import "../styles/certification-item.scss";

type Props = {
  type: "ap" | "nw" | "db";
  name: string;
  when: string;
  description: string;
  url: string;
};

export const CertificationItem: React.FC<Props> = ({
  type,
  name,
  when,
  description,
  url,
}) => {
  return (
    <div className={`certification-item ${type}`}>
      <div className="name">{name}</div>
      <div className="when">{when}</div>
      <div className="description">{description}</div>
      <div className="links">
        <a href={url} target="_blank">
          試験の公式ページへ進む
        </a>
      </div>
    </div>
  );
};
