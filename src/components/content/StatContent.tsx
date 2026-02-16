import React from "react";

/**
 * StatContent - Data-driven content with large stat display
 * Use for: Industry stats, results, benchmarks, ROI data, metrics
 */

interface StatContentProps {
  stat: string; // e.g., "10x", "500+", "87%"
  label: string; // e.g., "Faster Automation", "Companies Trust Us"
  context?: string; // Additional explanation
  source?: string; // e.g., "Source: Industry Report 2024"
  theme: "cream" | "dark" | "blue" | "purple";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const StatContent: React.FC<StatContentProps> = ({
  stat,
  label,
  context,
  source,
  theme,
}) => {
  const colors = themes[theme];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        textAlign: "center",
      }}
    >
      {/* Large stat number */}
      <div
        style={{
          fontSize: "10em",
          fontWeight: 900,
          color: colors.accent,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          textShadow: `4px 4px 0px ${colors.accent}20`,
        }}
      >
        {stat}
      </div>

      {/* Label */}
      <h2
        style={{
          fontSize: "3.5em",
          fontWeight: 700,
          color: colors.text,
          lineHeight: 1.2,
          margin: 0,
          maxWidth: "700px",
          letterSpacing: "-0.02em",
          textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
        }}
      >
        {label}
      </h2>

      {/* Context */}
      {context && (
        <p
          style={{
            fontSize: "1.8em",
            fontWeight: 500,
            color: colors.text,
            opacity: 0.7,
            lineHeight: 1.5,
            margin: 0,
            maxWidth: "650px",
          }}
        >
          {context}
        </p>
      )}

      {/* Source */}
      {source && (
        <div
          style={{
            fontSize: "1.3em",
            fontWeight: 500,
            color: colors.text,
            opacity: 0.5,
            marginTop: "20px",
            fontStyle: "italic",
          }}
        >
          {source}
        </div>
      )}
    </div>
  );
};
