import React from "react";
import "../styles/slide-item.scss";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

type Props = {
  title: string;
  /** ISO形式の日付 */
  date: string;
  eventName: string;
  place: string;
  eventUrl: string;
  slideUrl: string;
  thumbnailData: IGatsbyImageData;
};

export const SlideItem: React.FC<Props> = ({
  title,
  date,
  eventName,
  place,
  eventUrl,
  slideUrl,
  thumbnailData,
}) => {
  return (
    <article className="slide-item">
      <GatsbyImage className="thumbnail" image={thumbnailData} alt={title} />
      <div className="info">
        <div className="event-name">{eventName}</div>
        <div className="event-date">
          {formatDate(date)}・{place}
        </div>
        <div className="link-list">
          {slideUrl !== "" && (
            <a
              href={slideUrl}
              className="link-icon"
              title="Speaker Deck"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <path
                  className="link-icon-speaker-deck"
                  d="M11.71 16.14H5.38a5.38 5.38 0 0 1 0-10.77h7.38a2.15 2.15 0 1 1 0 4.3H5.33a1.08 1.08 0 0 0 0 2.16h6.33a5.38 5.38 0 0 1 0 10.76H2.15a2.15 2.15 0 1 1 0-4.3h9.56a1.08 1.08 0 0 0 0-2.16Zm4.59 6.48a6.47 6.47 0 0 0 2.79-4.31h3.53c.59 0 1.08-.48 1.08-1.08v-6.46c0-.59-.48-1.08-1.08-1.08h-6.41a3.22 3.22 0 0 0 0-4.3h7.49A4.3 4.3 0 0 1 28 9.7v8.62a4.3 4.3 0 0 1-4.3 4.31h-7.4Z"
                />
              </svg>
            </a>
          )}
          {eventUrl !== "" && (
            <a
              href={eventUrl}
              className="link-icon"
              title="イベントページ"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <path
                  className="link-icon-event"
                  d="M9.61 3c-.82 0-1.47.65-1.47 1.47v1.47H6.67a2.96 2.96 0 0 0-2.93 2.93v2.2h20.53v-2.2a2.96 2.96 0 0 0-2.93-2.93h-1.47V4.47c.01-.8-.63-1.46-1.43-1.47h-.02c-.81 0-1.46.66-1.47 1.47v1.47h-5.87V4.47c0-.83-.65-1.47-1.47-1.47h.02ZM3.74 13.27v8.8A2.96 2.96 0 0 0 6.67 25h14.67a2.96 2.96 0 0 0 2.93-2.93v-8.8H3.74Z"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};
