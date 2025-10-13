import React from "react";

/**
 * TipContent - Standard content slide for tips, steps, insights
 * Use for: List items, tips, steps in a process, key points
 */

interface TipContentProps {
  number?: string; // e.g., "1", "01", "Step 1"
  title: string;
  description?: string;
  theme: "cream" | "dark" | "blue" | "purple";
  showQuotes?: boolean;
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const TipContent: React.FC<TipContentProps> = ({
  number,
  title,
  description,
  theme,
  showQuotes = false,
}) => {
  const colors = themes[theme];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "32px",
        maxWidth: "800px",
      }}
    >
      {showQuotes && (
        <div
          style={{
            fontSize: "6em",
            fontWeight: 700,
            color: colors.text,
            lineHeight: 0.5,
            opacity: 0.15,
          }}
        >
          <b>"</b>
        </div>
      )}

      {number && (
        <div
          style={{
            fontSize: "5.5em",
            fontWeight: 800,
            color: colors.accent,
            letterSpacing: "0.05em",
          }}
        >
          {number}
        </div>
      )}

      <h2
        style={{
          fontSize: "4.5em",
          fontWeight: 900,
          color: colors.text,
          lineHeight: 1.15,
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            fontSize: "1.8em",
            fontWeight: 500,
            color: colors.text,
            opacity: 0.75,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};
