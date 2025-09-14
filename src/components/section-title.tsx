import React from "react";
import "../styles/section-title.scss";

type Props = {
  title: string;
};

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return <h2 className="section-title">{title}</h2>;
};
