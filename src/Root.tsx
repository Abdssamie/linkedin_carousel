import React from "react";
import { Still } from "remotion";
import { createCarousel, CarouselSlideComponent as GenericCarouselSlide } from "./lib/createCarousel";
import { createPresentation } from "./lib/createPresentation";
import { newExampleCarousels } from "./examples/carousels/complete-showcase";
import {
  businessPitchPresentation,
  companyOverviewPresentation,
} from "./examples/presentations";


export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Generic carousel slide composition for dynamic rendering */}
      <Still
        id="carousel-slide"
        component={GenericCarouselSlide}
        width={1080}
        height={1080}
        defaultProps={{
          config: {
            id: "default",
            brandName: "OPC.AI",
            website: "@opc.ai",
            slides: [
              {
                type: "hook",
                headlineTop: "Default",
                headlineHighlight: "Carousel",
              },
              {
                type: "hook",
                headlineTop: "Default",
                headlineHighlight: "Carousel",
              },
            ],
          },
          slideIndex: 0,
        }}
      />

      {/* Pre-configured example carousels */}
      {newExampleCarousels.map((carousel) => createCarousel(carousel))}

      {/* Pre-configured example presentations */}
      {createPresentation(businessPitchPresentation)}
      {createPresentation(companyOverviewPresentation)}
    </>
  );
};
