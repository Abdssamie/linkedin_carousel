import React from "react";
import { Still } from "remotion";
import { PreviewCard, myCompSchema } from "./PreviewCard";
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
      <Still
        id="PreviewCard"
        component={PreviewCard}
        width={1200}
        height={627}
        schema={myCompSchema}
        defaultProps={{
          title: "Welcome to Remotion" as const,
          description: "Edit Video.tsx to change template" as const,
          color: "#0B84F3" as const,
        }}
      />

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
