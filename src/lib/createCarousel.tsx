import React from "react";
import { Still } from "remotion";
import { SlideLayout } from "../components/SlideLayout";
import {
  HookContent,
  TipContent,
  InsightContent,
  CTAContent,
  QuoteContent,
  StatContent,
  ListContent,
  ComparisonContent,
  ImageContent,
  QuestionContent,
  TimelineContent,
  StaticImageContent,
} from "../components/content";
import { CarouselConfig, SlideConfig } from "../types/carousel";

/**
 * Renders the appropriate content component based on slide type
 */
const renderSlideContent = (
  slide: SlideConfig,
  theme: CarouselConfig["theme"],
  profileInitials: string
) => {
  switch (slide.type) {
    case "hook":
      return (
        <HookContent
          headlineTop={slide.headlineTop}
          headlineHighlight={slide.headlineHighlight}
          theme={theme}
          showStats={slide.showStats}
          statValue={slide.statValue}
          statLabel={slide.statLabel}
        />
      );

    case "tip":
      return (
        <TipContent
          number={slide.number}
          title={slide.title}
          description={slide.description}
          theme={theme}
          showQuotes={slide.showQuotes}
        />
      );

    case "insight":
      return (
        <InsightContent
          title={slide.title}
          content={slide.content}
          highlight={slide.highlight}
          profileInitials={profileInitials}
          theme={theme}
        />
      );

    case "cta":
      return (
        <CTAContent
          headline={slide.headline}
          subheadline={slide.subheadline}
          action={slide.action}
          theme={theme}
        />
      );

    case "quote":
      return (
        <QuoteContent
          quote={slide.quote}
          author={slide.author}
          role={slide.role}
          theme={theme}
        />
      );

    case "stat":
      return (
        <StatContent
          stat={slide.stat}
          label={slide.label}
          context={slide.context}
          source={slide.source}
          theme={theme}
        />
      );

    case "list":
      return (
        <ListContent
          title={slide.title}
          items={slide.items}
          theme={theme}
          useCheckmarks={slide.useCheckmarks}
        />
      );

    case "comparison":
      return (
        <ComparisonContent
          leftLabel={slide.leftLabel}
          leftContent={slide.leftContent}
          rightLabel={slide.rightLabel}
          rightContent={slide.rightContent}
          theme={theme}
        />
      );

    case "image":
      return (
        <ImageContent
          imagePath={slide.imagePath}
          caption={slide.caption}
          theme={theme}
          imageSize={slide.imageSize}
        />
      );

    case "question":
      return (
        <QuestionContent
          question={slide.question}
          options={slide.options}
          callToAction={slide.callToAction}
          theme={theme}
        />
      );

    case "timeline":
      return (
        <TimelineContent
          title={slide.title}
          steps={slide.steps}
          theme={theme}
          orientation={slide.orientation}
        />
      );

    case "staticImage":
      return (
        <StaticImageContent
          imagePath={slide.imagePath}
          fit={slide.fit}
          position={slide.position}
        />
      );

    default:
      return <div>Unknown slide type</div>;
  }
};

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

  return (
    <SlideLayout
      theme={config.theme}
      brandName={config.brandName}
      tagline={config.tagline}
      website={config.website}
      slideNumber={config.showSlideNumbers ? slideNumber : undefined}
      totalSlides={config.showSlideNumbers ? totalSlides : undefined}
      profileInitials={config.profileInitials || "AS"}
    >
      {renderSlideContent(slide, config.theme, config.profileInitials || "AS")}
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
  if (config.slides.length < 2 || config.slides.length > 10) {
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
