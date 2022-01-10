import React from "react";

export const SkillComponent = ({ data }) => {
  const { title, gif, libraries, link } = data;
  return (
    <div className="skills__slider-component">
      <a className="slider__img" href={link} target="_blank" rel="noreferrer">
        <img className="img__img" src={gif} alt={gif} />
      </a>
      <div className="slider__body">
        <div className="body__head">
          <h1>{title}</h1>
          <div className="head__line animate__animated animate__zoomIn animate__slower" />
          <h5>Esta página contiene las siguientes librerías:</h5>
        </div>
        <div className="body__libraries">
          {libraries.map((tech) => {
            return <strong key={tech}>{tech}</strong>;
          })}
        </div>
      </div>
    </div>
  );
};
