import React from "react";
import { ThemeConfig, createGlow } from "../../styles/themes";

interface ModernElementsProps {
  theme: ThemeConfig;
}

/**
 * Modern decorative elements that replace generic dots and circles
 * with sleeker tech-focused design elements
 */
export const ModernElements: React.FC<ModernElementsProps> = ({ theme }) => {
  // Radial glow element - positioned top-right
  const radialGlowStyle: React.CSSProperties = {
    position: "absolute",
    top: 40,
    right: 40,
    width: 200,
    height: 200,
    background: createGlow(theme.glow, 130),
    opacity: 0.6,
    borderRadius: "50%",
    filter: "blur(2px)",
    pointerEvents: "none",
  };

  // Sharp corner lines - tech aesthetic
  const cornerLinesStyle: React.CSSProperties = {
    position: "absolute",
    top: 80,
    right: 80,
    width: 120,
    height: 120,
    pointerEvents: "none",
  };

  // Grid accent - subtle tech pattern
  const gridAccentStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 100,
    left: 60,
    width: 160,
    height: 160,
    backgroundImage: `
      linear-gradient(${theme.accent}40 1px, transparent 1px),
      linear-gradient(90deg, ${theme.accent}40 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px",
    opacity: 0.3,
    pointerEvents: "none",
  };

  // Circuit-like line pattern
  const circuitPatternStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    right: 0,
    width: 4,
    height: 120,
    background: `linear-gradient(to bottom, transparent, ${theme.accent}, transparent)`,
    opacity: 0.4,
    pointerEvents: "none",
  };

  return (
    <>
      {/* Radial glow for premium feel */}
      <div style={radialGlowStyle} />
      
      {/* Sharp corner lines */}
      <svg style={cornerLinesStyle} viewBox="0 0 120 120">
        <g stroke={theme.accent} strokeWidth="5" fill="none" opacity="0.7">
          {/* Top-right corner */}
          <path d="M 100 0 L 120 0 L 120 20" />
          <path d="M 80 0 L 100 0 L 100 20" strokeWidth="3" opacity="0.5" />
          
          {/* Bottom-left accent */}
          <path d="M 0 100 L 0 120 L 20 120" />
          <path d="M 0 80 L 0 100 L 20 100" strokeWidth="3" opacity="0.5" />
        </g>
      </svg>

      {/* Grid accent */}
      <div style={gridAccentStyle} />
      
      {/* Circuit line */}
      <div style={circuitPatternStyle} />
    </>
  );
};

/**
 * Minimal decorative elements for content-heavy slides
 */
export const MinimalElements: React.FC<ModernElementsProps> = ({ theme }) => {
  const subtleGlowStyle: React.CSSProperties = {
    position: "absolute",
    top: 60,
    right: 60,
    width: 100,
    height: 100,
    background: createGlow(theme.glow, 80),
    opacity: 0.3,
    borderRadius: "50%",
    filter: "blur(3px)",
    pointerEvents: "none",
  };

  const accentLineStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 80,
    left: 0,
    width: 100,
    height: 3,
    background: `linear-gradient(to right, ${theme.accent}, transparent)`,
    opacity: 0.6,
    pointerEvents: "none",
  };

  return (
    <>
      <div style={subtleGlowStyle} />
      <div style={accentLineStyle} />
    </>
  );
};
