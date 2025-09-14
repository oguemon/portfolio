import React from "react";
import "../styles/heading.scss";

type Props = {
  title: string;
  subTitle: string;
};

export const Heading: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div className="heading">
      <h1 className="title-main">{title}</h1>
      <div className="title-sub">{subTitle}</div>
    </div>
  );
};
