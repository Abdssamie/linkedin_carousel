import {
  AgendaContent,
  ComparisonContent,
  CTAContent,
  HeavyListContent,
  InsightContent,
  KeyTakeawayContent,
  PresentationHookContent,
  PresentationListContent,
  PresentationQuestionContent,
  PresentationQuoteContent,
  PresentationTimelineContent,
  StatContent,
  PresentationTeamContent,
  ThankYouContent,
  TipContent,
  TwoColumnContent,
  TwoRowContent,
} from "../components/content";
import { PresentationSlideConfig } from "../types/presentation";
import { ThemeKey } from "../styles/themes";

/**
 * Renders the appropriate content component for presentations (centered versions)
 */
export const renderPresentationSlideContent = (
  slide: PresentationSlideConfig,
  theme: ThemeKey = "dark",
  profileInitials: string,
) => {
  switch (slide.type) {
    case "hook":
      return (
        <PresentationHookContent
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
        <PresentationQuoteContent
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
        <PresentationListContent
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

    case "question":
      return (
        <PresentationQuestionContent
          question={slide.question}
          options={slide.options}
          callToAction={slide.callToAction}
          theme={theme}
        />
      );

    case "timeline":
      return (
        <PresentationTimelineContent
          title={slide.title}
          steps={slide.steps}
          theme={theme}
          orientation={slide.orientation}
        />
      );

    case "twoColumn":
      return (
        <TwoColumnContent
          imagePath={slide.imagePath}
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

    case "agenda":
      return (
        <AgendaContent
          title={slide.title}
          items={slide.items}
          theme={theme}
        />
      );

    case "keyTakeaway":
      return (
        <KeyTakeawayContent
          title={slide.title}
          takeaways={slide.takeaways}
          theme={theme}
        />
      );

    case "team":
      return (
        <PresentationTeamContent
          title={slide.title}
          members={slide.members}
          theme={theme}
        />
      );

    case "thankYou":
      return (
        <ThankYouContent
          headline={slide.headline}
          subheadline={slide.subheadline}
          contactInfo={slide.contactInfo}
          theme={theme}
        />
      );

    default:
      return <div>Unknown slide type</div>;
  }
};
