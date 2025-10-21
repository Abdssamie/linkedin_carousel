import React from "react";
import { getTheme, typography, spacing, ThemeKey } from "../../styles/themes";

/**
 * TipContent - Standard content slide for tips, steps, insights
 * Use for: List items, tips, steps in a process, key points
 * Optimized for modern readability and visual hierarchy
 */

interface TipContentProps {
  number?: string; // e.g., "1", "01", "Step 1"
  title: string;
  description?: string;
  theme: ThemeKey;
  showQuotes?: boolean;
}

export const TipContent: React.FC<TipContentProps> = ({
  number,
  title,
  description,
  theme,
  showQuotes = false,
}) => {
  const colors = getTheme(theme);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: spacing.xl,
    maxWidth: "850px", // Optimal reading width
  };

  const quotesStyle: React.CSSProperties = {
    fontSize: '7rem',
    fontWeight: typography.weights.bold,
    color: colors.accent,
    lineHeight: 0.6,
    opacity: 0.3, // More visible than before
    fontFamily: typography.fontFamily.primary,
  };

  const numberStyle: React.CSSProperties = {
    fontSize: '6rem',
    fontWeight: typography.weights.extrabold,
    color: colors.accent,
    letterSpacing: typography.letterSpacing.wide,
    fontFamily: typography.fontFamily.primary,
    lineHeight: typography.lineHeights.tight,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: typography.sizes.h1,
    fontWeight: typography.weights.black,
    color: colors.text,
    lineHeight: typography.lineHeights.normal,
    margin: 0,
    letterSpacing: typography.letterSpacing.tight,
    fontFamily: typography.fontFamily.primary,
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: typography.sizes.body,
    fontWeight: typography.weights.regular,
    color: colors.textSecondary,
    lineHeight: typography.lineHeights.relaxed,
    margin: 0,
    fontFamily: typography.fontFamily.primary,
  };

  return (
    <div style={containerStyle}>
      {showQuotes && (
        <div style={quotesStyle}>
          "
        </div>
      )}

      {number && (
        <div style={numberStyle}>
          {number}
        </div>
      )}

      <h2 style={titleStyle}>
        {title}
      </h2>

      {description && (
        <p style={descriptionStyle}>
          {description}
        </p>
      )}
    </div>
  );
};
