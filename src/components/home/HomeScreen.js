import React, { useEffect, useState } from "react";
import { useParallax } from "../../helpers/useParallax";

export const HomeScreen = ({ e, pic }) => {
  const [hatX, hatY] = useParallax(e, 100, 100);
  const [wallX, wallY] = useParallax(e, -700, 700);
  const [ image, setImage ] = useState(pic);
  
  useEffect(() => {
    setImage(pic)
  }, [pic]);
  
  return (
    <section
      className="home-container"
      style={{
        backgroundImage: `url(${image})`,
        transform: `translateX(${wallX}px) translateY(${wallY}px)`,
      }}
    >
      <main>
        <div className="main__text">
          <div className="text__name animate__animated animate__slideInLeft animate__delay-1s">
            <h1>David</h1>
            <h3>Caro</h3>
          </div>
          <div className="text__portfolio-box animate__animated animate__slideInRight animate__delay-2s">
              <h2>Portfolio</h2>
          </div>
        </div>
        <div className="main__logo-container animate__animated animate__fadeInUp">
          <img
            className="logo__img"
            src="assets/logo/logo.png"
            alt="logo"
            style={{ transform: `translateX(${hatX}px) translateY(${hatY}px)` }}
          />
        </div>
      </main>
    </section>
  );
};
