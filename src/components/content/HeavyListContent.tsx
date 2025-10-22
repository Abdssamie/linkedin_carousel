import React from "react";
import { getTheme, typography, spacing, ThemeKey } from "../../styles/themes";

/**
 * HeavyListContent - Text-heavy list with title, description, and many items
 * Use for: Comprehensive feature lists, detailed specifications, extensive content
 * Optimized for maximum text capacity with smaller font sizes
 */

interface HeavyListContentProps {
  title: string;
  description: string;
  items: string[];
  theme: ThemeKey;
  useCheckmarks?: boolean; // Use ✓ instead of bullets
}

export const HeavyListContent: React.FC<HeavyListContentProps> = ({
  title,
  description,
  items,
  theme,
  useCheckmarks = false,
}) => {
  const colors = getTheme(theme);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: spacing.xl,
        maxWidth: "950px",
        margin: "0 auto",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: typography.sizes.h1,
          fontWeight: typography.weights.black,
          color: colors.text,
          lineHeight: typography.lineHeights.tight,
          margin: 0,
          letterSpacing: typography.letterSpacing.tight,
          textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: typography.sizes.body,
          fontWeight: typography.weights.regular,
          color: colors.textSecondary,
          lineHeight: typography.lineHeights.normal,
          margin: 0,
        }}
      >
        {description}
      </p>

      {/* List items */}
      <div style={{ display: "flex", flexDirection: "column", gap: spacing.md }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: spacing.md,
            }}
          >
            {/* Bullet or checkmark */}
            <span
              style={{
                fontSize: typography.sizes.h3,
                fontWeight: typography.weights.bold,
                color: colors.accent,
                flexShrink: 0,
                lineHeight: 1,
              }}
            >
              {useCheckmarks ? "✓" : "•"}
            </span>

            {/* Item text */}
            <span
              style={{
                fontSize: typography.sizes.body,
                fontWeight: typography.weights.medium,
                color: colors.text,
                lineHeight: typography.lineHeights.normal,
                paddingTop: "2px",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
