import React from "react";

export const AboutItem = ({ data }) => {
  const { title, icon, text } = data;
  return (
    <div className="about__item">
      <div className="item__head">
        <h1 className="head__text">
          {title} <i className={icon} />
        </h1>
        <div className="head__line animate__animated animate__zoomIn animate__slower" />
      </div>
      <div className="item__body">
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};
