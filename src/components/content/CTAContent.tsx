import React from "react";
import { getTheme, typography, spacing, ThemeKey } from "../../styles/themes";

/**
 * CTAContent - Call-to-action closing slide
 * Use for: Final slide, next steps, contact info, engagement prompt
 * Optimized for conversion with modern design
 */

interface CTAContentProps {
  headline: string;
  subheadline?: string;
  action: string;
  theme: ThemeKey;
}

export const CTAContent: React.FC<CTAContentProps> = ({
  headline,
  subheadline,
  action,
  theme,
}) => {
  const colors = getTheme(theme);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.xl,
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const headlineStyle: React.CSSProperties = {
    fontSize: typography.sizes.hero,
    fontWeight: typography.weights.black,
    color: colors.text,
    lineHeight: typography.lineHeights.normal,
    margin: 0,
    letterSpacing: typography.letterSpacing.tight,
    fontFamily: typography.fontFamily.primary,
  };

  const subheadlineStyle: React.CSSProperties = {
    fontSize: typography.sizes.h3,
    fontWeight: typography.weights.regular,
    color: colors.textSecondary,
    lineHeight: typography.lineHeights.relaxed,
    margin: 0,
    maxWidth: "600px",
  };

  const actionStyle: React.CSSProperties = {
    fontSize: typography.sizes.h3,
    fontWeight: typography.weights.bold,
    color: colors.bg,
    backgroundColor: colors.accent,
    padding: `${spacing.lg} ${spacing['3xl']}`,
    border: `3px solid ${colors.accent}`,
    borderRadius: "12px",
    marginTop: spacing.lg,
    letterSpacing: typography.letterSpacing.normal,
    fontFamily: typography.fontFamily.primary,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headlineStyle}>
        {headline}
      </h2>

      {subheadline && (
        <p style={subheadlineStyle}>
          {subheadline}
        </p>
      )}

      <div style={actionStyle}>
        {action}
      </div>
    </div>
  );
};
