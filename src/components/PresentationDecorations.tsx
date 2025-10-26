import React from "react";
import { Img, staticFile } from "remotion";
import { DiagonalPattern } from "../types/presentation";

/**
 * PresentationDecorations - Adds modern SVG decorative elements to slide edges
 * Optimized for 1920x1080 presentation format
 * Positioned within the content diagonal area, clipped appropriately
 */

interface PresentationDecorationsProps {
  /** Decoration variant - different combinations of SVG elements */
  variant?: "minimal" | "balanced" | "dynamic" | "geometric";
  /** Opacity of decorations (0-1) */
  opacity?: number;
  /** Diagonal pattern to match the slide layout */
  diagonalPattern?: DiagonalPattern;
}

/**
 * Helper function to get clip-path for decorations based on diagonal pattern
 */
function getDecorationClipPath(pattern: DiagonalPattern): string {
  switch (pattern) {
    case "left":
      return "polygon(0 0, 68% 0, 68% 100%, 0 100%)";
    case "right":
      return "polygon(32% 0, 100% 0, 100% 100%, 32% 100%)";
    case "incline-right":
      return "polygon(37% 0%, 100% 0, 100% 100%, 25% 100%)";
    case "incline-left":
      return "polygon(0 0, 58% 0, 68% 100%, 0 100%)";
    case "none":
      return "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    default:
      return "polygon(0 0, 68% 0, 68% 100%, 0 100%)";
  }
}

export const PresentationDecorations: React.FC<
  PresentationDecorationsProps
> = ({ variant = "balanced", opacity = 0.3, diagonalPattern = "left" }) => {
  const containerStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: getDecorationClipPath(diagonalPattern),
    pointerEvents: "none",
    zIndex: 1, // Between background gradient (0) and content (11)
  };

  const baseStyle: React.CSSProperties = {
    position: "absolute",
    opacity,
    pointerEvents: "none",
  };

  // Minimal variant - subtle corner accents
  if (variant === "minimal") {
    return (
      <div style={containerStyle}>
        {/* Top left corner */}
        <Img
          src={staticFile("graphic-elements/short-line.svg")}
          style={{
            ...baseStyle,
            top: "40px",
            left: "40px",
            width: "80px",
            height: "80px",
          }}
        />

        {/* Bottom left corner */}
        <Img
          src={staticFile("graphic-elements/small-thicker-circle.svg")}
          style={{
            ...baseStyle,
            bottom: "40px",
            left: "40px",
            width: "60px",
            height: "60px",
          }}
        />
      </div>
    );
  }

  // Balanced variant - moderate decoration on edges
  if (variant === "balanced") {
    return (
      <div style={containerStyle}>
        {/* Top left */}
        <Img
          src={staticFile("graphic-elements/upper-left-triangle-stripes.svg")}
          style={{
            ...baseStyle,
            top: "0",
            left: "0",
            width: "200px",
            height: "200px",
          }}
        />

        {/* Top center-right */}
        <Img
          src={staticFile("graphic-elements/plus-sign.svg")}
          style={{
            ...baseStyle,
            top: "60px",
            left: "60%",
            width: "50px",
            height: "50px",
          }}
        />

        {/* Bottom left */}
        <Img
          src={staticFile("graphic-elements/thick-circle.svg")}
          style={{
            ...baseStyle,
            bottom: "80px",
            left: "60px",
            width: "70px",
            height: "70px",
          }}
        />

        {/* Bottom center */}
        <Img
          src={staticFile("graphic-elements/x-symbol.svg")}
          style={{
            ...baseStyle,
            bottom: "40px",
            left: "50%",
            width: "60px",
            height: "60px",
          }}
        />
      </div>
    );
  }

  // Dynamic variant - more energetic with lines and shapes
  if (variant === "dynamic") {
    return (
      <div style={containerStyle}>
        {/* Top left corner */}
        <Img
          src={staticFile("graphic-elements/white-dots-upper-triangle.svg")}
          style={{
            ...baseStyle,
            top: "0",
            left: "0",
            width: "220px",
            height: "220px",
          }}
        />

        {/* Top center accent */}
        <Img
          src={staticFile("graphic-elements/thick-zigzag-line.svg")}
          style={{
            ...baseStyle,
            top: "50px",
            left: "55%",
            width: "120px",
            height: "120px",
          }}
        />

        {/* Middle left */}
        <Img
          src={staticFile("graphic-elements/long-vertical-waves.svg")}
          style={{
            ...baseStyle,
            top: "50%",
            left: "30px",
            transform: "translateY(-50%)",
            width: "40px",
            height: "300px",
          }}
        />

        {/* Bottom center */}
        <Img
          src={staticFile("graphic-elements/lower-trangle-dotted.svg")}
          style={{
            ...baseStyle,
            bottom: "0",
            left: "45%",
            width: "180px",
            height: "180px",
          }}
        />

        {/* Bottom left accent */}
        <Img
          src={staticFile("graphic-elements/x-symbol.svg")}
          style={{
            ...baseStyle,
            bottom: "70px",
            left: "70px",
            width: "60px",
            height: "60px",
          }}
        />
      </div>
    );
  }

  // Geometric variant - bold geometric shapes
  if (variant === "geometric") {
    return (
      <div style={containerStyle}>
        {/* Top left */}
        <Img
          src={staticFile("graphic-elements/oblique-square-dotted.svg")}
          style={{
            ...baseStyle,
            top: "40px",
            left: "40px",
            width: "150px",
            height: "150px",
          }}
        />

        {/* Top center-right */}
        <Img
          src={staticFile("graphic-elements/blue-stripes-sphere.svg")}
          style={{
            ...baseStyle,
            top: "50px",
            left: "58%",
            width: "140px",
            height: "140px",
          }}
        />

        {/* Middle center */}
        <Img
          src={staticFile("graphic-elements/thick-big-x.svg")}
          style={{
            ...baseStyle,
            top: "50%",
            left: "52%",
            transform: "translateY(-50%)",
            width: "80px",
            height: "80px",
          }}
        />

        {/* Bottom left */}
        <Img
          src={staticFile("graphic-elements/white-stripes-sphere-small.svg")}
          style={{
            ...baseStyle,
            bottom: "60px",
            left: "60px",
            width: "100px",
            height: "100px",
          }}
        />

        {/* Bottom center */}
        <Img
          src={staticFile("graphic-elements/inclined-stripes-blue-line.svg")}
          style={{
            ...baseStyle,
            bottom: "40px",
            left: "48%",
            width: "160px",
            height: "160px",
          }}
        />
      </div>
    );
  }

  return null;
};
