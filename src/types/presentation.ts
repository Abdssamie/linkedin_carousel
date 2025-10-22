/**
 * Presentation Type System
 * Extends carousel system for 16:9 presentations with diagonal geometric layouts
 */

import {
  CarouselConfig,
  HookSlideConfig,
  TipSlideConfig,
  InsightSlideConfig,
  CTASlideConfig,
  QuoteSlideConfig,
  StatSlideConfig,
  ListSlideConfig,
  HeavyListSlideConfig,
  ComparisonSlideConfig,
  QuestionSlideConfig,
  TimelineSlideConfig,
  StaticImageSlideConfig,
  TwoColumnSlideConfig,
  TwoRowSlideConfig,
} from "./carousel";

/**
 * Fixed presentation dimensions (16:9 aspect ratio)
 */
export const PRESENTATION_DIMENSIONS = {
  width: 1920,
  height: 1080,
} as const;

/**
 * Diagonal pattern variants for visual variety
 * Creates modern geometric layouts with diagonal cuts
 */
export type DiagonalPattern =
  | "left"          // Content on left, image on right
  | "right"         // Content on right, image on left
  | "incline-right" // Content on bottom-right, image on top-left (diagonal incline)
  | "incline-left"  // Content on left with diagonal edge, image on right
  | "none";         // No diagonal split, content only (no image)

/**
 * Base presentation slide with speaker notes
 * Compatible slide types that don't have their own image handling
 */
type BasePresentationSlide = (
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
) & {
  /**
   * Optional speaker notes (metadata only, not rendered visually)
   * Used by presenters for reference during presentation
   */
  speakerNotes?: string;

  /**
   * Diagonal pattern for this slide
   * Determines the geometric layout of text and image areas
   * @default "left"
   */
  diagonalPattern?: DiagonalPattern;

  /**
   * Image path for diagonal layout (if applicable)
   * Relative to public folder
   */
  imagePath?: string;

  /**
   * Image position in diagonal layout
   * Determines which section contains the image
   * @default "right"
   */
  imagePosition?: "left" | "right" | "top" | "bottom";
};

/**
 * Slide types with existing image handling (used as-is in presentations)
 * These already have imagePath and positioning built-in
 */
type ImageSlideWithNotes = (
  | StaticImageSlideConfig
  | TwoColumnSlideConfig
  | TwoRowSlideConfig
) & {
  /**
   * Optional speaker notes (metadata only, not rendered visually)
   * Used by presenters for reference during presentation
   */
  speakerNotes?: string;
};

/**
 * Presentation-specific slide configuration
 * Union of compatible slide types with speaker notes and optional diagonal layouts
 */
export type PresentationSlideConfig = BasePresentationSlide | ImageSlideWithNotes;

/**
 * Complete presentation configuration
 * Extends CarouselConfig with presentation-specific settings
 */
export interface PresentationConfig extends Omit<CarouselConfig, "slides" | "showSlideNumbers"> {
  /**
   * Format identifier - must be "presentation"
   */
  format: "presentation";

  /**
   * Always true for presentations
   * Page numbers are required for professional presentations
   */
  showPageNumbers: true;

  /**
   * Presentation slides with speaker notes support
   */
  slides: PresentationSlideConfig[];
}
