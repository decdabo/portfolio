import React, { useEffect, useState } from "react";

import { useParallax } from "../../helpers/useParallax";
import { SkillsSlider } from "./SkillsSlider";

export const SkillsScreen = ({ e, pic }) => {
  const [wallX, wallY] = useParallax(e, 1000, 1000);
  const [ image, setImage ] = useState(pic);
  
  useEffect(() => {
    setImage(pic)
  }, [pic]);

  return (
    <>
      <section
        className="skills"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translateX(${wallX}px) translateY(${wallY}px)`,
        }}
      >
        <SkillsSlider />
      </section>
    </>
  );
};
