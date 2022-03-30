import React from 'react'
import Slider from 'react-slick';
import { SkillComponent } from './SkillComponent';
import { skillsData } from './skillsData';

export const SkillsSlider = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings}>
            {skillsData.map(skills => {
                return <SkillComponent key={skills.title} data={skills} />
            })}
        </Slider>
    )
}   
