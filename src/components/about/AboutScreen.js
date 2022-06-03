import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { useParallax } from "../../helpers/useParallax";
import { aboutData } from "./aboutData";
import { AboutItem } from "./AboutItem";

export const AboutScreen = ({ e, pic }) => {
  const [wallX, wallY] = useParallax(e, 1000, 1000);
  const [ image, setImage ] = useState(pic);
  
  const settings = {
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2500,
    speed: 1500,
    slidesToScroll: 1,
    verticalSwiping: true,
    infinite: true,
    vertical: true,
  };

  useEffect(() => {
    setImage(pic)
  }, [pic]);
  
  return (
    <section
      className="section__about"
      style={{
        backgroundImage: `url(${ image })`,
        transform: `translateX(${wallX}px) translateY(${wallY}px)`,
      }}
    >
      <div className="about__disclaimer">
        <p>
          You can stop and control the slider putting the mouse inside of this section box
          <i className="fa-solid fa-arrow-pointer"></i>
        </p>
      </div>
      <main className="about">
        <Slider {...settings}>
          {aboutData.map((data, i) => {
            return <AboutItem key={i} data={data} i={i} />;
          })}
        </Slider>
      </main>
    </section>
  );
};
