import React from "react";

/**
 * ComparisonContent - Before/After or side-by-side comparison
 * Use for: Transformations, problem vs solution, old way vs new way
 */

interface ComparisonContentProps {
  leftLabel: string;
  leftContent: string;
  rightLabel: string;
  rightContent: string;
  theme: "cream" | "dark" | "blue" | "purple";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623", bg: "#F5F1E8" },
  dark: { text: "#FFFFFF", accent: "#00D9FF", bg: "#1A1A1A" },
  blue: { text: "#0A2540", accent: "#0066FF", bg: "#E8F4F8" },
  purple: { text: "#2D1B69", accent: "#7C3AED", bg: "#F3F0FF" },
};

export const ComparisonContent: React.FC<ComparisonContentProps> = ({
  leftLabel,
  leftContent,
  rightLabel,
  rightContent,
  theme,
}) => {
  const colors = themes[theme];

  const columnStyle: React.CSSProperties = {
    flex: 1,
    padding: "40px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "1.6em",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  const contentStyle: React.CSSProperties = {
    fontSize: "2.2em",
    fontWeight: 600,
    lineHeight: 1.4,
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "32px",
        alignItems: "stretch",
        justifyContent: "center",
        maxWidth: "900px",
      }}
    >
      {/* Left side */}
      <div
        style={{
          ...columnStyle,
          backgroundColor: `${colors.text}08`,
          border: `2px solid ${colors.text}20`,
        }}
      >
        <div style={{ ...labelStyle, color: colors.text, opacity: 0.6, textShadow: `0 2px 8px rgba(0, 0, 0, 0.6)` }}>
          {leftLabel}
        </div>
        <div style={{ ...contentStyle, color: colors.text, opacity: 0.7, textShadow: `0 2px 8px rgba(0, 0, 0, 0.6)` }}>
          {leftContent}
        </div>
      </div>

      {/* Arrow or VS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "3em",
          fontWeight: 700,
          color: colors.accent,
        }}
      >
        →
      </div>

      {/* Right side */}
      <div
        style={{
          ...columnStyle,
          backgroundColor: `${colors.accent}15`,
          border: `3px solid ${colors.accent}`,
        }}
      >
        <div style={{ ...labelStyle, color: colors.accent, textShadow: `0 2px 8px rgba(0, 0, 0, 0.6)` }}>
          {rightLabel}
        </div>
        <div style={{ ...contentStyle, color: colors.text, textShadow: `0 2px 8px rgba(0, 0, 0, 0.6)` }}>
          {rightContent}
        </div>
      </div>
    </div>
  );
};
