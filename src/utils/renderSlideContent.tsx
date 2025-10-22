import { CarouselConfig, SlideConfig } from "../types/carousel";
import {
  ComparisonContent,
  CTAContent,
  HeavyListContent,
  HookContent,
  ImageContent,
  InsightContent,
  ListContent,
  QuestionContent,
  QuoteContent,
  StatContent,
  StaticImageContent,
  TimelineContent,
  TipContent,
  TwoColumnContent,
  TwoRowContent,
} from "../components/content";

/**
 * Renders the appropriate content component based on slide type
 */
export const renderSlideContent = (
  slide: SlideConfig,
  theme: CarouselConfig["theme"],
  profileInitials: string,
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

    case "heavyList":
      return (
        <HeavyListContent
          title={slide.title}
          description={slide.description}
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

    case "twoColumn":
      return (
        <TwoColumnContent
          imagePath={slide.imagePath}
          imagePosition={slide.imagePosition}
          title={slide.title}
          content={slide.content}
          bulletPoints={slide.bulletPoints}
          theme={theme}
          imageAspectRatio={slide.imageAspectRatio}
        />
      );

    case "twoRow":
      return (
        <TwoRowContent
          imagePath={slide.imagePath}
          imagePosition={slide.imagePosition}
          title={slide.title}
          content={slide.content}
          bulletPoints={slide.bulletPoints}
          theme={theme}
        />
      );

    default:
      return <div>Unknown slide type</div>;
  }
};
