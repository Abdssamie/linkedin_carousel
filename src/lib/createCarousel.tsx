import React from "react";
import { Still } from "remotion";
import { SlideLayout } from "../components/SlideLayout";
import { MinimalSlideLayout } from "../components/MinimalSlideLayout";
import { CarouselConfig } from "../types/carousel";
import { renderSlideContent } from "../utils/renderSlideContent";

/**
 * Individual slide component
 */
const CarouselSlideComponent: React.FC<{
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
      return "bgs/bg_recommended_for_non_header_content.png";
    }
    if (slide.type === "heavyList") {
      return "bgs/bg_heavy_content.png";
    }
    return "bgs/bg_recommeneded_for_slides_with_header.png";
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
 * Creates Remotion Still compositions for each slide in the carousel
 * 
 * @param config - Carousel configuration
 * @returns Array of Still components
 * 
 * @example
 * ```tsx
 * const myCarousel: NewCarouselConfig = {
 *   id: "ai-tips",
 *   theme: "dark",
 *   brandName: "OPC.AI",
 *   tagline: "One Person Company",
 *   website: "@opc.ai",
 *   profileInitials: "AS",
 *   showSlideNumbers: true,
 *   slides: [
 *     {
 *       type: "hook",
 *       headlineTop: "5 AI Tips",
 *       headlineHighlight: "That Work",
 *     },
 *     {
 *       type: "tip",
 *       number: "01",
 *       title: "Automate Email Responses",
 *       description: "Save 10 hours per week",
 *     },
 *     {
 *       type: "cta",
 *       headline: "Ready to Start?",
 *       action: "Follow for more tips",
 *     },
 *   ],
 * };
 * 
 * const stills = createCarousel(myCarousel);
 * ```
 */
export function createCarousel(config: CarouselConfig): React.ReactElement[] {
  // Validate slide count
  if (config.slides.length < 2 || config.slides.length > 20) {  // TODO: Revert back to 10 max
    throw new Error(
      `Carousel must have 2-10 slides (found ${config.slides.length})`
    );
  }

  // Create a Still for each slide
  return config.slides.map((_, index) => {
    const slideNumber = index + 1;
    const stillId = `${config.id}-slide-${slideNumber}`;

    return (
      <Still
        key={stillId}
        id={stillId}
        component={CarouselSlideComponent}
        width={1080}
        height={1080}
        defaultProps={{
          config,
          slideIndex: index,
        }}
      />
    );
  });
}
