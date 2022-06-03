import React, { useEffect, useState } from "react";
import { useParallax } from "../../helpers/useParallax";

export const ContactScreen = ({ e, pic }) => {
  const [wallX, wallY] = useParallax(e, 1000, 1000);
  const [ image, setImage ] = useState(pic);
  
  useEffect(() => {
    setImage(pic)
  }, [pic]);

  return (
    <section
      className="section__contact"
      style={{
        backgroundImage: `url(${image})`,
        transform: `translateX(${wallX}px) translateY(${wallY}px)`,
      }}
    >
      <div className="contact">
        <div className="contact__item">
          <div className="item__head-contact">
            <h1 className="head__title-contact">Hit me out!</h1>
            <div className="head__line animate__animated animate__zoomIn" />
          </div>
          <div className="item__body-contact">
            <a
              className="body__icon-contact in"
              href="https://www.linkedin.com/in/david-caro-a5028621a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" /><strong>Linkedin</strong>
            </a>
            <a
              className="body__icon-contact outlook"
              href="mailto:david.caro.dec@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-envelope-square" /><strong>Hotmail</strong>
            </a>
          </div>
        </div>
        <div className="contact__item">
          <div className="item__head-contact">
            <h1 className="head__title-contact">Repositories</h1>
            <div className="head__line animate__animated animate__zoomIn" />
          </div>
          <div className="item__body-contact">
            <a
              className="body__icon-contact git"
              href="https://github.com/decdabo"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square"></i><strong>Github</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
