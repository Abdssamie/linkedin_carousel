/**
 * DiagonalSlideLayout Component
 * Modern geometric layout with diagonal cuts for presentations
 * Features dark blue gradient and black color scheme with dynamic diagonal patterns
 */

import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import "../fonts.css";
import { ThemeKey, typography, spacing } from "../styles/themes";
import { DiagonalPattern } from "../types/presentation";

/**
 * Props for DiagonalSlideLayout component
 */
interface DiagonalSlideLayoutProps {
  /** Visual theme (inherited from presentation config) */
  theme?: ThemeKey;

  /** Brand name for header */
  brandName: string;

  /** Optional tagline */
  tagline?: string;

  /** Website/handle for footer */
  website: string;

  /** Current slide number */
  slideNumber: number;

  /** Total number of slides */
  totalSlides: number;

  /** Diagonal pattern variant */
  diagonalPattern?: DiagonalPattern;

  /** Image path (relative to public folder) */
  imagePath?: string;

  /** Image position */
  imagePosition?: "left" | "right" | "top" | "bottom";

  /** Slide content */
  children: React.ReactNode;
}

/**
 * Color scheme constants - dark to vibrant blue gradient
 */
const COLORS = {
  blueGradient: "linear-gradient(135deg, #000000ff 0%, #05082aff 25%, #14269bff 50%, #2899d1ff 75%, #3dc8ffff 100%)",
  black: "#000000",
  white: "#ffffff",
  lightGray: "#f3f4f6",
  mediumGray: "#e5e7eb",
  accentBlue: "#3b82f6",
} as const;

/**
 * Helper function to generate clip-path based on diagonal pattern
 */
function getClipPaths(pattern: DiagonalPattern, isTextArea: boolean): string {
  switch (pattern) {
    case "left":
      // Content on left, image on right
      return isTextArea
        ? "polygon(0 0, 68% 0, 68% 100%, 0 100%)"
        : "polygon(68% 0, 100% 0, 100% 100%, 68% 100%)";

    case "right":
      // Content on right, image on left
      return isTextArea
        ? "polygon(32% 0, 100% 0, 100% 100%, 32% 100%)"
        : "polygon(0 0, 32% 0, 32% 100%, 0 100%)";

    case "incline-right":
      // Content on bottom, image on top
      return isTextArea
        ? "polygon(37% 0%, 100% 0, 100% 100%, 25% 100% )"
        : "polygon(0 0, 37% 0, 25% 100%, 0 100%)";

    case "incline-left":
      // Vertical split with diagonal edge
      return isTextArea
        ? "polygon(0 0, 58% 0, 68% 100%, 0 100%)"
        : "polygon(58% 0, 100% 0, 100% 100%, 68% 100%)";

    case "none":
      // No diagonal split, content only (full screen)
      return isTextArea
        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        : "polygon(0 0, 0 0, 0 0, 0 0)"; // Hide image area completely

    default:
      // Fallback to left pattern
      return isTextArea
        ? "polygon(0 0, 68% 0, 68% 100%, 0 100%)"
        : "polygon(68% 0, 100% 0, 100% 100%, 68% 100%)";
  }
}

/**
 * Helper function to get bounding box for content area based on pattern
 * Returns the position and size of the smallest rectangle containing the content polygon
 */
function getContentBoundingBox(pattern: DiagonalPattern): {
  top: string;
  left: string;
  right: string;
  bottom: string;
  width: string;
  height: string;
} {
  switch (pattern) {
    case "left":
      // Content on left side: from 0% to 68%
      return {
        top: "0",
        left: "0",
        right: "32%",
        bottom: "0",
        width: "68%",
        height: "100%",
      };
    case "right":
      // Content on right side: from 32% to 100%
      return {
        top: "0",
        left: "32%",
        right: "0",
        bottom: "0",
        width: "68%",
        height: "100%",
      };
    case "incline-right":
      // Content on bottom-right with diagonal: wider area to account for diagonal
      return {
        top: "0",
        left: "30%",
        right: "0",
        bottom: "0",
        width: "70%",
        height: "100%",
      };
    case "incline-left":
      // Content on left with diagonal: from 0% to 58% (narrower to avoid image area)
      return {
        top: "0",
        left: "0",
        right: "42%",
        bottom: "0",
        width: "58%",
        height: "100%",
      };
    case "none":
      // Full screen content
      return {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        width: "100%",
        height: "100%",
      };
    default:
      return {
        top: "0",
        left: "0",
        right: "32%",
        bottom: "0",
        width: "68%",
        height: "100%",
      };
  }
}

/**
 * Helper function to get bounding box for image area based on pattern
 * Returns the position and size of the smallest rectangle containing the image polygon
 */
function getImageBoundingBox(pattern: DiagonalPattern): {
  top: string;
  left: string;
  right: string;
  bottom: string;
  width: string;
  height: string;
} {
  switch (pattern) {
    case "left":
      // Image on right side: from 68% to 100%
      return {
        top: "0",
        left: "68%",
        right: "0",
        bottom: "0",
        width: "32%",
        height: "100%",
      };
    case "right":
      // Image on left side: from 0% to 32%
      return {
        top: "0",
        left: "0",
        right: "68%",
        bottom: "0",
        width: "32%",
        height: "100%",
      };
    case "incline-right":
      // Image on top-left diagonal: from 0% to 37% width
      return {
        top: "0",
        left: "0",
        right: "63%",
        bottom: "0",
        width: "37%",
        height: "100%",
      };
    case "incline-left":
      // Image on right with diagonal: from 58% to 100%
      return {
        top: "0",
        left: "58%",
        right: "0",
        bottom: "0",
        width: "42%",
        height: "100%",
      };
    case "none":
      // No image
      return {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        width: "0",
        height: "0",
      };
    default:
      return {
        top: "0",
        left: "68%",
        right: "0",
        bottom: "0",
        width: "32%",
        height: "100%",
      };
  }
}

/**
 * DiagonalSlideLayout Component
 * Renders presentation slides with modern diagonal geometric layout
 * No header or footer - full-screen content with diagonal sections
 */
export const DiagonalSlideLayout: React.FC<DiagonalSlideLayoutProps> = ({
  theme = "dark",
  brandName,
  tagline,
  website,
  slideNumber,
  totalSlides,
  diagonalPattern = "left",
  imagePath,
  imagePosition = "right",
  children,
}) => {
  // Base container style
  const absContainer: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    backgroundColor: COLORS.black,
  };

  // Image area with black background - full height (lower layer)
  const imageAreaStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: COLORS.black,
    clipPath: getClipPaths(diagonalPattern, false),
    overflow: "hidden",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Text area with dark blue gradient - full height (top layer)
  const textAreaStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: COLORS.blueGradient,
    clipPath: getClipPaths(diagonalPattern, true),
    padding: spacing['3xl'],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    overflow: "hidden",
  };

  // Get bounding boxes for content and image areas
  const contentBoundingBox = getContentBoundingBox(diagonalPattern);
  const imageBoundingBox = getImageBoundingBox(diagonalPattern);

  // Content container positioned at the bounding box of the content polygon
  const contentContainerStyle: React.CSSProperties = {
    position: "absolute",
    top: contentBoundingBox.top,
    left: contentBoundingBox.left,
    right: contentBoundingBox.right,
    bottom: contentBoundingBox.bottom,
    width: contentBoundingBox.width,
    height: contentBoundingBox.height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing['3xl'],
    marginLeft: spacing.md,
    paddingLeft: spacing["5xl"],
    zIndex: 11,
  };

  // Image container positioned at the bounding box of the polygon
  const imageContainerStyle: React.CSSProperties = {
    position: "absolute",
    top: imageBoundingBox.top,
    left: imageBoundingBox.left,
    right: imageBoundingBox.right,
    bottom: imageBoundingBox.bottom,
    width: imageBoundingBox.width,
    height: imageBoundingBox.height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  // Content wrapper with proper text styling
  const contentWrapperStyle: React.CSSProperties = {
    color: COLORS.white,
    width: "100%",
    maxWidth: "100%",
    textAlign: "center",
  };

  return (
    <AbsoluteFill style={absContainer}>
      {/* Image area (lower layer) - render first */}
      {imagePath && (
        <>
          <div style={imageAreaStyle} />
          <div style={imageContainerStyle}>
            <Img
              src={staticFile(imagePath)}
              style={imageStyle}
              onError={(e) => {
                console.warn(`Failed to load image: ${imagePath}`);
              }}
            />
          </div>
        </>
      )}

      {/* Content area with dark blue gradient (top layer) - render last */}
      <div style={textAreaStyle} />
      <div style={contentContainerStyle}>
        <div style={contentWrapperStyle}>
          {children}
        </div>
      </div>
    </AbsoluteFill>
  );
};
