import React from "react";
import { Img, staticFile } from "remotion";
import { getTheme, typography, spacing, ThemeKey } from "../../styles/themes";

/**
 * TwoRowContent - Image and text stacked vertically
 * Use for: Landscape images, wide screenshots, dashboards
 * Perfect for images that need horizontal space
 */

interface TwoRowContentProps {
  imagePath: string;
  imagePosition?: "top" | "bottom";
  title: string;
  content: string;
  bulletPoints?: string[];
  theme: ThemeKey;
}

export const TwoRowContent: React.FC<TwoRowContentProps> = ({
  imagePath,
  imagePosition = "top",
  title,
  content,
  bulletPoints,
  theme,
}) => {
  const colors = getTheme(theme);
  
  // Determine if imagePath is a URL or local file
  const isExternalUrl = imagePath.startsWith('http://') || imagePath.startsWith('https://');
  const imageSrc = isExternalUrl ? imagePath : staticFile(imagePath);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
    height: "100%",
    width: "100%",
    justifyContent: "center",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: typography.sizes.h2,
    fontWeight: typography.weights.black,
    color: colors.text,
    lineHeight: typography.lineHeights.tight,
    margin: 0,
    letterSpacing: typography.letterSpacing.tight,
    textAlign: "center",
    marginBottom: spacing.xs,
    textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
  };

  const contentRowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: imagePosition === "top" ? "column" : "column-reverse",
    gap: spacing.lg,
    flex: 1,
  };

  // Image row with landscape aspect ratio - smaller and centered
  const imageRowStyle: React.CSSProperties = {
    flex: "0 0 auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  const imageContainerStyle: React.CSSProperties = {
    width: "85%",
    maxWidth: "900px",
    aspectRatio: "16 / 9",
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

  const textRowStyle: React.CSSProperties = {
    flex: "0 0 auto",
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
    justifyContent: "center",
    maxWidth: "900px",
    margin: "0 auto",
    width: "100%",
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
    gap: spacing.sm,
    marginTop: spacing.xs,
  };

  const bulletItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
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
  };

  return (
    <div style={containerStyle}>
      {/* Title at the top */}
      <h2 style={titleStyle}>{title}</h2>

      {/* Content Row with Image and Text */}
      <div style={contentRowStyle}>
        {/* Image Row */}
        <div style={imageRowStyle}>
          <div style={imageContainerStyle}>
            <Img src={imageSrc} style={imageStyle} />
          </div>
        </div>

        {/* Text Row */}
        <div style={textRowStyle}>
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
