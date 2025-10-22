import React from "react";
import { Still } from "remotion";
import { createCarousel } from "./lib/createCarousel";
import { newExampleCarousels } from "./carousels/new-examples";
import { SlideLayout } from "./components/SlideLayout";
import { MinimalSlideLayout } from "./components/MinimalSlideLayout";
import { CarouselConfig } from "./types/carousel";
import { renderSlideContent } from "./utils/renderSlideContent";

/**
 * Dynamic carousel slide component that accepts config via inputProps
 * This is the component that will be rendered by Remotion Lambda
 */
const DynamicCarouselSlide: React.FC<{
  config: CarouselConfig;
  slideIndex: number;
}> = ({ config, slideIndex }) => {
  const slide = config.slides[slideIndex];
  const slideNumber = slideIndex + 1;
  const totalSlides = config.slides.length;

  const content = renderSlideContent(slide, config.theme, config.profileInitials || "AS");

  // Determine background image based on slide type
  const getBackgroundImage = () => {
    if (slide.type === "twoColumn") {
      return "bgs/bg_recommended_for_two_column_content.png";
    }
    if (slide.type === "twoRow") {
      return "bgs/bg_recommended_for_two_row_content.png";
    }
    if (slide.type === "heavyList") {
      return "bgs/bg_heavy_content.png";
    }
    return "bgs/bg_recommended_for_non_header_content.png";
  };

  // Use minimal layout if specified on the slide
  if (slide.useMinimalLayout) {
    return (
      <MinimalSlideLayout
        theme={config.theme}
        website={config.website}
        slideNumber={config.showSlideNumbers ? slideNumber : undefined}
        totalSlides={config.showSlideNumbers ? totalSlides : undefined}
        backgroundImage={getBackgroundImage()}
      >
        {content}
      </MinimalSlideLayout>
    );
  }

  // Default to full layout
  return (
    <SlideLayout
      theme={config.theme}
      brandName={config.brandName}
      tagline={config.tagline}
      website={config.website}
      address={config.address}
      slideNumber={config.showSlideNumbers ? slideNumber : undefined}
      totalSlides={config.showSlideNumbers ? totalSlides : undefined}
      profileInitials={config.profileInitials || "AS"}
    >
      {content}
    </SlideLayout>
  );
};

/**
 * Generic composition that accepts any carousel config and slide index
 * This allows Python backend to render any slide dynamically
 */
const GenericCarouselSlide: React.FC<{
  inputProps: {
    config: CarouselConfig;
    slideIndex: number;
  };
}> = ({ inputProps }) => {
  return (
    <DynamicCarouselSlide
      config={inputProps.config}
      slideIndex={inputProps.slideIndex}
    />
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Generic composition for dynamic rendering from Python backend */}
      <Still
        id="carousel-slide"
        component={GenericCarouselSlide}
        width={1080}
        height={1080}
        defaultProps={{
          inputProps: {
            config: {
              id: "example",
              theme: "cream",
              brandName: "Example",
              website: "@example",
              profileInitials: "EX",
              showSlideNumbers: true,
              slides: [
                {
                  type: "hook",
                  headlineTop: "Example",
                  headlineHighlight: "Slide",
                  useMinimalLayout: true,
                },
              ],
            },
            slideIndex: 0,
          },
        }}
      />

      {/* Pre-configured example carousels */}
      {newExampleCarousels.map((carousel) => createCarousel(carousel))}
          </>
  );
};
