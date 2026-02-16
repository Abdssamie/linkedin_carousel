import React from "react";
import { spacing } from "../../styles/themes";

/**
 * QuoteContent - Large quote display for testimonials and powerful statements
 * Use for: Customer testimonials, expert quotes, motivational content
 */

interface QuoteContentProps {
  quote: string;
  author: string;
  role?: string; // e.g., "CEO at TechCorp", "Solopreneur"
  theme: "cream" | "dark" | "blue" | "purple";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const QuoteContent: React.FC<QuoteContentProps> = ({
  quote,
  author,
  role,
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
        gap: "40px",
        maxWidth: "950px",
        textAlign: "center",
      }}
    >
      {/* Large quote marks */}
      <div
        style={{
          fontSize: "8em",
          fontWeight: 700,
          color: colors.accent,
          lineHeight: 0.2,
          opacity: 0.7,
        }}
      >
        "
      </div>

      {/* Quote text */}
      <blockquote
        style={{
          fontSize: "3.2em",
          fontWeight: 600,
          color: colors.text,
          paddingLeft: spacing.xl,
          lineHeight: 1.4,
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {quote}
      </blockquote>

      {/* Author attribution */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "1.8em",
            fontWeight: 700,
            color: colors.text,
          }}
        >
          — {author}
        </div>
        {role && (
          <div
            style={{
              fontSize: "1.4em",
              fontWeight: 500,
              color: colors.text,
              opacity: 0.6,
            }}
          >
            {role}
          </div>
        )}
      </div>
    </div>
  );
};
