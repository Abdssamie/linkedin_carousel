import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import "../fonts.css";
import { getTheme, typography, spacing, ThemeKey } from "../styles/themes";

interface SlideLayoutProps {
  theme?: ThemeKey;
  brandName: string;
  tagline?: string;
  website: string;
  address?: string; // Company/personal address
  slideNumber?: number;
  totalSlides?: number;
  profileInitials?: string;
  profileImage?: string; // NEW: Support for actual profile images/logos
  children: React.ReactNode;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  theme = "dark", // Default to dark theme per optimization plan
  brandName,
  tagline,
  website,
  address,
  slideNumber,
  totalSlides,
  profileInitials = "AS",
  profileImage,
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
  };

  const layoutContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: spacing['2xl'], // Optimized spacing - 64px for better canvas usage
  };

  // HEADER STYLES
  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: spacing.lg,
    marginBottom: spacing['2xl'], // 48px - optimized for carousel format
    position: "relative",
  };

  const profilePhoto: React.CSSProperties = {
    width: 80, // Slightly larger for better presence
    height: 80,
    borderRadius: "50%",
    border: `4px solid ${colors.accent}`,
    backgroundColor: profileImage ? 'transparent' : colors.text,
    backgroundImage: profileImage ? `url(${profileImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: typography.sizes.h3,
    fontWeight: typography.weights.bold,
    color: colors.bg,
    flexShrink: 0,
    overflow: 'hidden',
  };

  const brandInfo: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
  };

  const brandNameStyle: React.CSSProperties = {
    fontSize: typography.sizes.h2,
    fontWeight: typography.weights.bold,
    color: colors.text,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.lineHeights.tight,
  };

  const taglineStyle: React.CSSProperties = {
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.medium,
    color: colors.accent,
    letterSpacing: typography.letterSpacing.wide,
    textTransform: "uppercase",
    lineHeight: typography.lineHeights.tight,
  };

  // MAIN CONTENT AREA

  const mainContent: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    padding: `${spacing.md} 0`, // Optimized vertical padding for carousel format
  };

  // FOOTER STYLES
  const footerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: (website || address) ? "space-between" : "flex-end",
    alignItems: "center",
    marginTop: spacing['2xl'], // Optimized for carousel format
  };

  const footerLeftStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xs,
  };

  const websiteStyle: React.CSSProperties = {
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.semibold,
    color: colors.text,
    textShadow: `0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6)`,
  };

  const addressStyle: React.CSSProperties = {
    fontSize: typography.sizes.small,
    fontWeight: typography.weights.medium,
    color: colors.textSecondary,
    textShadow: `0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6)`,
  };

  const slideIndicator: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    padding: `${spacing.sm} ${spacing.lg}`,
    backgroundColor: colors.overlay,
    borderRadius: "30px",
    border: `2px solid ${colors.border}`,
    backdropFilter: 'blur(10px)', // Modern glass effect
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
    <AbsoluteFill style={absContainer}>
      {/* Background image */}
      <Img
        src={staticFile("bgs/bg_recommeneded_for_slides_with_header.png")}
        style={backgroundImageStyle}
      />

      <div style={layoutContainer}>
        {/* HEADER */}
        <header style={headerStyle}>
          <div style={profilePhoto}>
            {!profileImage && <span>{profileInitials}</span>}
          </div>
          <div style={brandInfo}>
            <div style={brandNameStyle}>{brandName}</div>
            {tagline && <div style={taglineStyle}>{tagline}</div>}
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main style={mainContent}>{children}</main>

        {/* FOOTER */}
        <footer style={footerStyle}>
          {(website || address) && (
            <div style={footerLeftStyle}>
              {website && <div style={websiteStyle}>{website}</div>}
              {address && <div style={addressStyle}>{address}</div>}
            </div>
          )}

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
