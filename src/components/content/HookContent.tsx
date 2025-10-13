import React from "react";

/**
 * HookContent - Opening slide to grab attention
 * Use for: Title slides, bold statements, main value proposition
 */

interface HookContentProps {
  headlineTop: string;
  headlineHighlight: string;
  theme: "cream" | "dark" | "blue" | "purple";
  showStats?: boolean;
  statValue?: string;
  statLabel?: string;
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const HookContent: React.FC<HookContentProps> = ({
  headlineTop,
  headlineHighlight,
  theme,
  showStats = false,
  statValue,
  statLabel,
}) => {
  const colors = themes[theme];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "5.5em",
          fontWeight: 900,
          color: colors.text,
          lineHeight: 1.1,
          margin: 0,
          letterSpacing: "-0.03em",
        }}
      >
        {headlineTop}
        <br />
        <span
          style={{
            backgroundColor: colors.text,
            color: colors.accent,
            padding: "12px 32px",
            display: "inline-block",
            marginTop: "20px",
            boxShadow: `8px 8px 0px ${colors.accent}40`,
          }}
        >
          {headlineHighlight}
        </span>
      </h1>

      {showStats && statValue && statLabel && (
        <div style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
          <span
            style={{
              fontSize: "4em",
              fontWeight: 900,
              color: colors.accent,
              lineHeight: 1,
            }}
          >
            {statValue}
          </span>
          <span
            style={{
              fontSize: "1.6em",
              fontWeight: 500,
              color: colors.text,
              opacity: 0.7,
            }}
          >
            {statLabel}
          </span>
        </div>
      )}
    </div>
  );
};
