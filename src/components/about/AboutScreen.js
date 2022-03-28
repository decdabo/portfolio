import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import Slider from "react-slick";

import { useParallax } from "../../helpers/useParallax";
import { aboutData } from "./aboutData";
import { AboutItem } from "./AboutItem";

export const AboutScreen = ({ e, pic }) => {
  // const { about } = useSelector(state => state.bg.images);
  const [wallX, wallY] = useParallax(e, 1000, 1000);
  const [ image, setImage ] = useState(pic);
  
  const settings = {
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
    speed: 500,
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
