import React from "react";
import { getTheme, typography, spacing, ThemeKey } from "../../styles/themes";

/**
 * ListContent - Bullet points or checklist items
 * Use for: Key benefits, features, checklist, multiple points
 * Perfect for text-heavy content without images
 */

interface ListContentProps {
  title: string;
  items: string[];
  theme: ThemeKey;
  useCheckmarks?: boolean; // Use ✓ instead of bullets
}

export const ListContent: React.FC<ListContentProps> = ({
  title,
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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: spacing.xl,
        maxWidth: "900px",
        margin: 0,
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
          marginBottom: spacing.xs,
          marginLeft: "10rem",
          letterSpacing: typography.letterSpacing.tight,
          textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
        }}
      >
        {title}
      </h2>



      {/* List items */}
      <div style={{ display: "flex", flexDirection: "column", gap: spacing.md }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: spacing.lg,
              marginLeft: spacing["5xl"]
            }}
          >
            {/* Bullet or checkmark */}
            <span
              style={{
                fontSize: typography.sizes.h2,
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
                fontSize: typography.sizes.h3,
                fontWeight: typography.weights.regular,
                color: colors.text,
                lineHeight: 2,
                paddingTop: "4px",
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
