import React from "react";
import { Img, staticFile } from "remotion";
import { getTheme, typography, spacing, ThemeKey } from "../../styles/themes";

/**
 * TwoColumnContent - Image and text side by side
 * Use for: Feature showcases, product demos, visual explanations
 */

interface TwoColumnContentProps {
  imagePath: string;
  imagePosition?: "left" | "right";
  title: string;
  content: string;
  bulletPoints?: string[];
  theme: ThemeKey;
  imageAspectRatio?: "square" | "portrait" | "landscape"; // Simple aspect ratio control
}

export const TwoColumnContent: React.FC<TwoColumnContentProps> = ({
  imagePath,
  imagePosition = "left",
  title,
  content,
  bulletPoints,
  theme,
  imageAspectRatio = "square",
}) => {
  const colors = getTheme(theme);

  // Define aspect ratios
  const aspectRatios = {
    square: "1 / 1",      // 1:1 - Perfect for screenshots, icons
    portrait: "3 / 4",    // 3:4 - Vertical images, mobile screens
    landscape: "4 / 3",   // 4:3 - Horizontal images, dashboards
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: typography.sizes.h2,
    fontWeight: typography.weights.black,
    color: colors.text,
    lineHeight: typography.lineHeights.tight,
    margin: 0,
    letterSpacing: typography.letterSpacing.tight,
    textAlign: "left",
    marginBottom: spacing.md,
    textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
  };

  const columnsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: imagePosition === "left" ? "row" : "row-reverse",
    gap: spacing.xl,
    alignItems: "center",
    width: "100%",
  };

  // Image column with fixed aspect ratio - larger
  const imageColumnStyle: React.CSSProperties = {
    flex: "0 0 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageContainerStyle: React.CSSProperties = {
    width: "100%",
    aspectRatio: aspectRatios[imageAspectRatio],
    borderRadius: "12px",
    border: `3px solid ${colors.border}`,
    backgroundColor: colors.overlay,
    overflow: "hidden",
    position: "relative",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  };

  const textColumnStyle: React.CSSProperties = {
    flex: "1 1 50%",
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
    justifyContent: "center",
  };

  const contentStyle: React.CSSProperties = {
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.regular,
    color: colors.textSecondary,
    lineHeight: typography.lineHeights.relaxed,
    margin: 0,
  };

  const bulletListStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
    marginTop: spacing.sm,
  };

  const bulletItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: spacing.md,
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.medium,
    color: colors.text,
    lineHeight: typography.lineHeights.normal,
  };

  const bulletDotStyle: React.CSSProperties = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: colors.accent,
    flexShrink: 0,
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      {/* Title at the top */}
      <h2 style={titleStyle}>{title}</h2>

      {/* Columns Container */}
      <div style={columnsContainerStyle}>
        {/* Image Column */}
        <div style={imageColumnStyle}>
          <div style={imageContainerStyle}>
            <Img src={staticFile(imagePath)} style={imageStyle} />
          </div>
        </div>

        {/* Text Column */}
        <div style={textColumnStyle}>
          <p style={contentStyle}>{content}</p>

          {bulletPoints && bulletPoints.length > 0 && (
            <div style={bulletListStyle}>
              {bulletPoints.map((point, index) => (
                <div key={index} style={bulletItemStyle}>
                  <div style={bulletDotStyle} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
