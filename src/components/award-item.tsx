import React from "react";
import "../styles/award-item.scss";

type Props = {
  name: string;
  when: string;
  description: string;
  links: { label: string; url: string; openTab: boolean }[];
};

export const AwardItem: React.FC<Props> = ({
  name,
  when,
  description,
  links,
}) => {
  return (
    <div className="award-item">
      <div className="name">{name}</div>
      <div className="when">{when}</div>
      <div className="description">{description}</div>
      <div className="links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.openTab ? "_blank" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
