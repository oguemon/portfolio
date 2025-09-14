import React from "react";
import { Link } from "gatsby";
import "../styles/learn-more.scss";

type Props = {
  label: string;
  path: string;
};

export const LearnMore: React.FC<Props> = ({ label, path }) => {
  return (
    <Link to={path} className="learn-more">
      {label}
    </Link>
  );
};
