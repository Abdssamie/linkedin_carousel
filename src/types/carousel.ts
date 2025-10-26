/**
 * Carousel Type System
 * Supports all content components with full configurability
 * Optimized for modern tech aesthetic
 */

import { ThemeKey } from "../styles/themes";

export type ThemeType = ThemeKey;

/**
 * Content type determines which component to render
 */
export type ContentType =
  | "hook"
  | "tip"
  | "insight"
  | "cta"
  | "quote"
  | "stat"
  | "list"
  | "heavyList"
  | "comparison"
  | "question"
  | "timeline"
  | "staticImage"
  | "twoColumn"
  | "twoRow";

/**
 * Base slide configuration (common to all slides)
 */
interface BaseSlideConfig {
  type: ContentType;
}

/**
 * Hook slide - Opening/title slide
 */
export interface HookSlideConfig extends BaseSlideConfig {
  type: "hook";
  headlineTop: string;
  headlineHighlight: string;
  showStats?: boolean;
  statValue?: string;
  statLabel?: string;
}

/**
 * Tip slide - Tips, steps, key points
 */
export interface TipSlideConfig extends BaseSlideConfig {
  type: "tip";
  number?: string;
  title: string;
  description?: string;
  showQuotes?: boolean;
}

/**
 * Insight slide - Personal stories, case studies
 */
export interface InsightSlideConfig extends BaseSlideConfig {
  type: "insight";
  title: string;
  content: string;
  highlight?: string;
}

/**
 * CTA slide - Call-to-action
 */
export interface CTASlideConfig extends BaseSlideConfig {
  type: "cta";
  headline: string;
  subheadline?: string;
  action: string;
}

/**
 * Quote slide - Testimonials, quotes
 */
export interface QuoteSlideConfig extends BaseSlideConfig {
  type: "quote";
  quote: string;
  author: string;
  role?: string;
}

/**
 * Stat slide - Data-driven content
 */
export interface StatSlideConfig extends BaseSlideConfig {
  type: "stat";
  stat: string;
  label: string;
  context?: string;
  source?: string;
}

/**
 * List slide - Bullet points or checklist
 */
export interface ListSlideConfig extends BaseSlideConfig {
  type: "list";
  title: string;
  items: string[];
  useCheckmarks?: boolean;
}

/**
 * Heavy List slide - Text-heavy list with description and many items
 */
export interface HeavyListSlideConfig extends BaseSlideConfig {
  type: "heavyList";
  title: string;
  description: string;
  items: string[];
  useCheckmarks?: boolean;
}

/**
 * Comparison slide - Before/After or side-by-side
 */
export interface ComparisonSlideConfig extends BaseSlideConfig {
  type: "comparison";
  leftLabel: string;
  leftContent: string;
  rightLabel: string;
  rightContent: string;
}


/**
 * Question slide - Engagement question
 */
export interface QuestionSlideConfig extends BaseSlideConfig {
  type: "question";
  question: string;
  options?: string[];
  callToAction?: string;
}

/**
 * Timeline slide - Process steps or timeline
 */
export interface TimelineSlideConfig extends BaseSlideConfig {
  type: "timeline";
  title?: string;
  steps: Array<{ label: string; description: string }>;
  orientation?: "vertical" | "horizontal";
}

/**
 * Static Image slide - Full-screen image
 */
export interface StaticImageSlideConfig extends BaseSlideConfig {
  type: "staticImage";
  imagePath: string;
  fit?: "cover" | "contain" | "fill";
  position?: string;
  hideDecorations?: boolean; // Hide decorative elements for cleaner look
}

/**
 * Two Column slide - Image and text side by side
 */
export interface TwoColumnSlideConfig extends BaseSlideConfig {
  type: "twoColumn";
  imagePath: string;
  title: string;
  content: string;
  bulletPoints?: string[];
  imageAspectRatio?: "square" | "portrait";
}

/**
 * Two Row slide - Image and text stacked vertically
 */
export interface TwoRowSlideConfig extends BaseSlideConfig {
  type: "twoRow";
  imagePath: string;
  imagePosition?: "top" | "bottom";
  title: string;
  content: string;
  bulletPoints?: string[];
  hideDecorations?: boolean; // Hide decorative elements for cleaner look
}

/**
 * Union type of all slide configurations
 */
export type SlideConfig =
  | HookSlideConfig
  | TipSlideConfig
  | InsightSlideConfig
  | CTASlideConfig
  | QuoteSlideConfig
  | StatSlideConfig
  | ListSlideConfig
  | HeavyListSlideConfig
  | ComparisonSlideConfig
  | QuestionSlideConfig
  | TimelineSlideConfig
  | StaticImageSlideConfig
  | TwoColumnSlideConfig
  | TwoRowSlideConfig;

/**
 * Complete carousel configuration
 */
export interface CarouselConfig {
  /** Unique identifier (kebab-case) */
  id: string;

  /** Brand name in header */
  brandName: string;

  /** Optional tagline in header */
  tagline?: string;

  /** Website/handle in footer */
  website: string;

  /** Profile initials */
  profileInitials?: string;

  /** Array of slides (2-10 slides) */
  slides: SlideConfig[];
}
