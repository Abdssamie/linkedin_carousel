import React from "react";

/**
 * ListContent - Bullet points or checklist items
 * Use for: Key benefits, features, checklist, multiple points
 */

interface ListContentProps {
  title: string;
  items: string[];
  theme: "cream" | "dark" | "blue" | "purple";
  useCheckmarks?: boolean; // Use ✓ instead of bullets
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const ListContent: React.FC<ListContentProps> = ({
  title,
  items,
  theme,
  useCheckmarks = false,
}) => {
  const colors = themes[theme];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "40px",
        maxWidth: "850px",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "4em",
          fontWeight: 900,
          color: colors.text,
          lineHeight: 1.2,
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>

      {/* List items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {/* Bullet or checkmark */}
            <span
              style={{
                fontSize: "2.5em",
                fontWeight: 700,
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
                fontSize: "2em",
                fontWeight: 500,
                color: colors.text,
                lineHeight: 1.4,
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
