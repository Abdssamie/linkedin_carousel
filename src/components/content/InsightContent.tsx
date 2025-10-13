import React from "react";

/**
 * InsightContent - Tweet-style card with profile and personal insight
 * Use for: Personal stories, case studies, lessons learned, testimonials
 */

interface InsightContentProps {
  title: string;
  content: string;
  highlight?: string;
  profileInitials: string;
  theme: "cream" | "dark" | "blue" | "purple";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const InsightContent: React.FC<InsightContentProps> = ({
  title,
  content,
  highlight,
  profileInitials,
  theme,
}) => {
  const colors = themes[theme];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "700px",
          padding: "50px",
          backgroundColor: `${colors.text}10`,
          border: `3px solid ${colors.accent}40`,
          borderRadius: "24px",
          backdropFilter: "blur(10px)",
          boxShadow: `0 12px 40px ${colors.text}15`,
        }}
      >
        {/* Profile photo */}
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            border: `3px solid ${colors.accent}`,
            backgroundColor: colors.text,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8em",
            fontWeight: 700,
            color: colors.accent,
            marginBottom: "28px",
            boxShadow: `0 4px 12px ${colors.text}30`,
          }}
        >
          {profileInitials}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "1.4em",
            fontWeight: 700,
            color: colors.accent,
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </div>

        {/* Content */}
        <div
          style={{
            fontSize: "1.6em",
            fontWeight: 500,
            color: colors.text,
            lineHeight: 1.6,
            marginBottom: "20px",
            opacity: 0.85,
          }}
        >
          {content}
        </div>

        {/* Highlight */}
        {highlight && (
          <div
            style={{
              fontSize: "1.4em",
              fontWeight: 600,
              color: colors.accent,
              lineHeight: 1.5,
            }}
          >
            → {highlight}
          </div>
        )}
      </div>
    </div>
  );
};
