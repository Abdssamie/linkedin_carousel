import React from "react";
import { Still } from "remotion";
import { createCarousel, CarouselSlideComponent as GenericCarouselSlide } from "./lib/createCarousel";
import { createPresentation, PresentationSlideComponent } from "./lib/createPresentation";
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

      {/* Generic carousel slide composition for dynamic rendering */}
      <Still
        id="presentation-slide"
        component={PresentationSlideComponent}
        width={1920}
        height={1080}
        defaultProps={{
          config: {
            id: "default",
            brandName: "OPC.AI",
            website: "@opc.ai",
            format: "presentation",
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
