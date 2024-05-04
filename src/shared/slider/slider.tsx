import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import style from "./slider.module.scss";


type Project = { portfolio_title: string, portfolio_img: string, portfolio_slug: string }

export default function Slider(featuredProject: Project) {
  console.log(featuredProject)
  const allImages: string[] = [];

  // Iterate over each array in featuredProjects
  Object.values(featuredProject).forEach(projectArray => {
    // Iterate over projects in each array
    projectArray.forEach(project => {
      if (typeof project.portfolio_img === 'string') {
        allImages.push(project.portfolio_img);
      }
    });
  });
  console.log(allImages)

  return (
    <div>
      <SimpleImageSlider
        width={'100vw'}
        height={'100vh'}
        images={allImages}
        showBullets={false}
        showNavs={false}
      />
    </div>

  )
}
