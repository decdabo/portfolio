import React from "react";

import { useParallax } from "../../helpers/useParallax";
import { SkillsSlider } from "./SkillsSlider";

export const SkillsScreen = (e) => {
  const [wallX, wallY] = useParallax(e, 1000, 1000);

  return (
    <>
      <section
        className="skills"
        style={{
          backgroundImage: "url(assets/screens/skills.png)",
          transform: `translateX(${wallX}px) translateY(${wallY}px)`,
        }}
      >
        <SkillsSlider />
      </section>
    </>
  );
};
