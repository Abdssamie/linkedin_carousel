import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import "../fonts.css";
import { getTheme, typography, spacing, ThemeKey } from "../styles/themes";

interface MinimalSlideLayoutProps {
  theme?: ThemeKey;
  website?: string;
  slideNumber?: number;
  totalSlides?: number;
  backgroundImage?: string; // Custom background image path (relative to public folder)
  children: React.ReactNode;
}

export const MinimalSlideLayout: React.FC<MinimalSlideLayoutProps> = ({
  theme = "dark",
  website,
  slideNumber,
  totalSlides,
  backgroundImage = "bgs/bg_recommended_for_non_header_content.png",
  children,
}) => {
  const colors = getTheme(theme);

  const absContainer: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
  };

  const backgroundImageStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  };

  const layoutContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: `${spacing.xl} ${spacing['2xl']} ${spacing.xl} ${spacing['2xl']}`, // Adequate bottom padding for footer
    position: "relative",
    zIndex: 1,
  };

  const mainContent: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    paddingLeft: spacing.md,
    paddingTop: spacing.md, // Add small top padding to move content up slightly
  };

  const footerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: spacing.sm,
    paddingBottom: spacing.xs
  };

  const websiteStyle: React.CSSProperties = {
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    textShadow: `0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6)`,
  };

  const slideIndicator: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    padding: `${spacing.xs} ${spacing.lg}`,
    backgroundColor: colors.overlay,
    borderRadius: "30px",
    border: `2px solid ${colors.border}`,
    backdropFilter: 'blur(10px)',
  };

  const slideNumberStyle: React.CSSProperties = {
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.bold,
    color: colors.accent,
  };

  const slideSeparator: React.CSSProperties = {
    width: "3px",
    height: "3px",
    borderRadius: "50%",
    backgroundColor: colors.accent,
    opacity: 0.5,
  };

  const totalSlidesStyle: React.CSSProperties = {
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.semibold,
    color: colors.textSecondary,
  };

  return (
    <AbsoluteFill style={absContainer} >
      {/* Background image */}
      <Img
        src={staticFile(backgroundImage)}
        style={backgroundImageStyle}
      />

      <div style={layoutContainer}>
        <main style={mainContent}>{children}</main>

        <footer style={footerStyle}>
          {website && <div style={websiteStyle}>{website}</div>}

          {slideNumber && totalSlides && (
            <div style={slideIndicator}>
              <span style={slideNumberStyle}>{slideNumber}</span>
              <div style={slideSeparator} />
              <span style={totalSlidesStyle}>{totalSlides}</span>
            </div>
          )}
        </footer>
      </div>
    </AbsoluteFill>
  );
};
