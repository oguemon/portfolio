import React, { useState } from "react";
import "../styles/career-item.scss";

type Props = {
  type: "work" | "school";
  name: string;
  position: string;
  subPosition?: string;
  period: string;
  description: string;
  link?: { label: string; url: string };
  isNow?: boolean;
};

export const CareerItem: React.FC<Props> = ({
  type,
  name,
  position,
  subPosition,
  period,
  description,
  link,
  isNow = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`career-item ${isNow ? "now" : ""}`}>
      <div className="left-box">
        <div className="period">{period}</div>
      </div>
      <div className="right-box">
        <div
          className={`info ${type} ` + (isOpen ? " open" : "")}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="name">{name}</div>
          <div className="subname">
            {position}
            {subPosition && <span className="detail">{subPosition}</span>}
          </div>
        </div>
        <div className={"description" + (isOpen ? " open" : "")}>
          {description}
          {link && (
            <a className="link" href={link.url} target="_blank">
              {link.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
