import React from "react";
import { Still } from "remotion";
import { PresentationConfig, PRESENTATION_DIMENSIONS } from "../types/presentation";
import { DiagonalSlideLayout } from "../components/DiagonalSlideLayout";
import { renderPresentationSlideContent } from "../utils/renderPresentationSlideContent";

/**
 * Individual presentation slide component
 */
export const PresentationSlideComponent: React.FC<{
  config: PresentationConfig;
  slideIndex: number;
}> = ({ config, slideIndex }) => {
  const slide = config.slides[slideIndex];
  const slideNumber = slideIndex + 1;
  // const totalSlides = config.slides.length;

  const content = renderPresentationSlideContent(slide, "dark", config.profileInitials || "AS");

  // Auto-configure diagonal pattern based on slide type
  // twoColumn and twoRow slides have their own image layout, so they don't use diagonal patterns
  let diagonalPattern: "left" | "right" | "incline-right" | "incline-left" | "none" = "none";
  let imagePath: string | undefined = undefined;

  // Slides that support diagonal patterns (not twoColumn/twoRow)
  if (slide.type !== "twoColumn" && slide.type !== "twoRow") {
    // Alternate patterns for visual variety
    const patternSequence: Array<"left" | "right" | "incline-right" | "incline-left" | "none"> = [
      "left",
      "right", 
      "incline-right",
      "incline-left",
      "none"
    ];
    diagonalPattern = patternSequence[slideIndex % patternSequence.length];
  }

  // Extract image path from slide if it has one (twoColumn/twoRow have their own imagePath)
  if ("imagePath" in slide) {
    imagePath = slide.imagePath;
  }
  // const imagePosition = "imagePosition" in slide ? slide.imagePosition : undefined;

  // Warn if image path is provided but may fail to load
  if (imagePath) {
    // Note: Actual image loading errors will be handled by Remotion's Img component
    // This is just a preventive check for common issues
    if (!imagePath.trim()) {
      console.warn(
        `Empty image path provided on slide ${slideNumber}. Image will not be displayed.`
      );
    }
  }

  return (
    <DiagonalSlideLayout
      diagonalPattern={diagonalPattern}
      imagePath={imagePath}
    >
      {content}
    </DiagonalSlideLayout>
  );
};

/**
 * Creates Remotion Still compositions for presentation slides
 * 
 * @param config - Presentation configuration
 * @returns Array of Still components at 1920x1080
 * 
 * @example
 * ```tsx
 * const myPresentation: PresentationConfig = {
 *   id: "business-pitch",
 *   format: "presentation",
 *   theme: "dark",
 *   brandName: "OPC.AI",
 *   tagline: "One Person Company",
 *   website: "@opc.ai",
 *   profileInitials: "AS",
 *   showPageNumbers: true,
 *   slides: [
 *     {
 *       type: "hook",
 *       headlineTop: "Welcome to",
 *       headlineHighlight: "Our Vision",
 *       diagonalPattern: "top-right",
 *       imagePath: "landscape.jpg",
 *       speakerNotes: "Introduce the company and main value proposition.",
 *     },
 *     {
 *       type: "stat",
 *       stat: "10x",
 *       label: "Productivity Increase",
 *       context: "With AI automation",
 *       diagonalPattern: "top-left",
 *       speakerNotes: "Highlight the key metric.",
 *     },
 *   ],
 * };
 * 
 * const stills = createPresentation(myPresentation);
 * ```
 */
export function createPresentation(
  config: PresentationConfig
): React.ReactElement[] {
  // Validate format field
  if (config.format !== "presentation") {
    throw new Error(
      `Config format must be "presentation" (found "${config.format}")`
    );
  }

  // Validate required fields
  if (!config.brandName) {
    throw new Error("brandName is required for presentations");
  }
  if (!config.website) {
    throw new Error("website is required for presentations");
  }

  // Validate slide count (presentations typically 2-50 slides)
  if (config.slides.length < 2 || config.slides.length > 50) {
    throw new Error(
      `Presentation must have 2-50 slides (found ${config.slides.length})`
    );
  }

  // Create a Still for each slide at presentation dimensions (1920x1080)
  return config.slides.map((_, index) => {
    const slideNumber = index + 1;
    const stillId = `${config.id}-slide-${slideNumber}`;

    return (
      <Still
        key={stillId}
        id={stillId}
        component={PresentationSlideComponent}
        width={PRESENTATION_DIMENSIONS.width}
        height={PRESENTATION_DIMENSIONS.height}
        defaultProps={{
          config,
          slideIndex: index,
        }}
      />
    );
  });
}
