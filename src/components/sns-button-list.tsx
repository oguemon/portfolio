import React from "react";
import { sns_url } from "../components/constant";
import "../styles/sns-button-list.scss";

export const SnsButtonList: React.FC = () => {
  return (
    <div className="sns-btn-list">
      <a
        href={sns_url.x}
        target="_blank"
        rel="noreferrer"
        className="sns-btn x"
        aria-label="X"
      ></a>
      <a
        href={sns_url.instagram}
        target="_blank"
        rel="noreferrer"
        className="sns-btn instagram"
        aria-label="instagram"
      ></a>
      <a
        href={sns_url.github}
        target="_blank"
        rel="noreferrer"
        className="sns-btn github"
        aria-label="github"
      ></a>
      <a
        href={sns_url.zenn}
        target="_blank"
        rel="noreferrer"
        className="sns-btn zenn"
        aria-label="zenn"
      ></a>
    </div>
  );
};
