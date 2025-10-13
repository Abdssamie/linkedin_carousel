import React from "react";
import { AbsoluteFill } from "remotion";
import "../fonts.css";

const fontFamily = "Inter";

// Color themes
const themes = {
  cream: {
    bg: "#F5F1E8",
    text: "#2C2C2C",
    accent: "#F5A623",
    grid: "rgba(200, 190, 170, 0.15)",
    circle: "#E8A419",
  },
  dark: {
    bg: "#1A1A1A",
    text: "#FFFFFF",
    accent: "#00D9FF",
    grid: "rgba(255, 255, 255, 0.05)",
    circle: "#00B8D4",
  },
  blue: {
    bg: "#E8F4F8",
    text: "#0A2540",
    accent: "#0066FF",
    grid: "rgba(0, 102, 255, 0.08)",
    circle: "#0052CC",
  },
  purple: {
    bg: "#F3F0FF",
    text: "#2D1B69",
    accent: "#7C3AED",
    grid: "rgba(124, 58, 237, 0.08)",
    circle: "#6D28D9",
  },
};

type Theme = keyof typeof themes;

interface SlideLayoutProps {
  theme?: Theme;
  brandName: string;
  tagline?: string;
  website: string;
  slideNumber?: number;
  totalSlides?: number;
  profileInitials?: string;
  children: React.ReactNode;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  theme = "cream",
  brandName,
  tagline,
  website,
  slideNumber,
  totalSlides,
  profileInitials = "AS",
  children,
}) => {
  const colors = themes[theme];

  const absContainer: React.CSSProperties = {
    backgroundColor: colors.bg,
    backgroundImage: `
      linear-gradient(${colors.grid} 1px, transparent 1px),
      linear-gradient(90deg, ${colors.grid} 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
    fontFamily,
  };

  const layoutContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "60px 80px",
  };

  // HEADER STYLES
  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginBottom: 60,
    position: "relative",
  };

  const profilePhoto: React.CSSProperties = {
    width: 70,
    height: 70,
    borderRadius: "50%",
    border: `4px solid ${colors.accent}`,
    backgroundColor: colors.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.8em",
    fontWeight: 700,
    color: colors.bg,
    flexShrink: 0,
  };

  const brandInfo: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const brandNameStyle: React.CSSProperties = {
    fontSize: "2em",
    fontWeight: 700,
    color: colors.text,
    letterSpacing: "-0.02em",
    lineHeight: 1,
  };

  const taglineStyle: React.CSSProperties = {
    fontSize: "1.1em",
    fontWeight: 500,
    color: colors.accent,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    lineHeight: 1,
  };

  // DECORATIVE ELEMENTS
  const dotsPattern: React.CSSProperties = {
    position: "absolute",
    top: 60,
    right: 80,
    width: 140,
    height: 140,
    backgroundImage: `radial-gradient(circle, ${colors.accent} 7px, transparent 7px)`,
    backgroundSize: "28px 28px",
    opacity: 0.4,
  };

  const circleAccent: React.CSSProperties = {
    position: "absolute",
    top: "8%",
    right: "5%",
    width: 130,
    height: 130,
    border: `6px solid ${colors.circle}`,
    borderRadius: "50%",
    opacity: 0.5,
  };

  // MAIN CONTENT AREA
  const mainContent: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  };

  // FOOTER STYLES
  const footerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
  };

  const websiteStyle: React.CSSProperties = {
    fontSize: "1.6em",
    fontWeight: 600,
    color: colors.text,
  };

  const slideIndicator: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 24px",
    backgroundColor: `${colors.accent}15`,
    borderRadius: "30px",
    border: `2px solid ${colors.accent}30`,
  };

  const slideNumberStyle: React.CSSProperties = {
    fontSize: "1.4em",
    fontWeight: 700,
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
    fontSize: "1.4em",
    fontWeight: 600,
    color: colors.text,
    opacity: 0.6,
  };

  return (
    <AbsoluteFill style={absContainer}>
      {/* Decorative elements */}
      <div style={dotsPattern} />
      <div style={circleAccent} />

      <div style={layoutContainer}>
        {/* HEADER */}
        <header style={headerStyle}>
          <div style={profilePhoto}>
            <span>{profileInitials}</span>
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
          <div style={websiteStyle}>{website}</div>

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
