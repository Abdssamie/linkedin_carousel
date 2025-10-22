import React from "react";
import { getTheme, typography, spacing, createShadow, ThemeKey } from "../../styles/themes";

/**
 * HookContent - Opening slide to grab attention
 * Use for: Title slides, bold statements, main value proposition
 * Optimized for modern tech aesthetic with improved readability
 */

interface HookContentProps {
  headlineTop: string;
  headlineHighlight: string;
  theme: ThemeKey;
  showStats?: boolean;
  statValue?: string;
  statLabel?: string;
}

export const HookContent: React.FC<HookContentProps> = ({
  headlineTop,
  headlineHighlight,
  theme,
  showStats = false,
  statValue,
  statLabel,
}) => {
  const colors = getTheme(theme);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: spacing.xl,
    maxWidth: "900px", // Constraint for better readability
  };

  const headlineStyle: React.CSSProperties = {
    fontSize: typography.sizes.hero,
    fontWeight: typography.weights.black,
    color: colors.text,
    lineHeight: typography.lineHeights.tight,
    margin: 0,
    letterSpacing: typography.letterSpacing.tight,
    fontFamily: typography.fontFamily.primary,
    textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
  };

  const highlightStyle: React.CSSProperties = {
    backgroundColor: colors.text,
    color: colors.bg, // Inverted for contrast
    padding: `${spacing.md} ${spacing.xl}`,
    display: "inline-block",
    marginTop: spacing.lg,
    boxShadow: createShadow(colors.shadow, 0.6),
    borderRadius: '8px', // Modern rounded corners
    border: `3px solid ${colors.accent}`,
  };

  const statsContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: spacing.lg,
    alignItems: "baseline",
    marginTop: spacing.lg,
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: '4.5rem', // Slightly larger for impact
    fontWeight: typography.weights.black,
    color: colors.accent,
    lineHeight: typography.lineHeights.tight,
    fontFamily: typography.fontFamily.primary,
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: typography.sizes.h3,
    fontWeight: typography.weights.medium,
    color: colors.textSecondary,
    lineHeight: typography.lineHeights.normal,
  };

  return (
    <div style={containerStyle}>
      <h1 style={headlineStyle}>
        {headlineTop}
        <br />
        <span style={highlightStyle}>
          {headlineHighlight}
        </span>
      </h1>

      {showStats && statValue && statLabel && (
        <div style={statsContainerStyle}>
          <span style={statValueStyle}>{statValue}</span>
          <span style={statLabelStyle}>{statLabel}</span>
        </div>
      )}
    </div>
  );
};
