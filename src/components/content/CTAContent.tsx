import React from "react";

/**
 * CTAContent - Call-to-action closing slide
 * Use for: Final slide, next steps, contact info, engagement prompt
 */

interface CTAContentProps {
  headline: string;
  subheadline?: string;
  action: string;
  theme: "cream" | "dark" | "blue" | "purple";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const CTAContent: React.FC<CTAContentProps> = ({
  headline,
  subheadline,
  action,
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
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "5em",
          fontWeight: 900,
          color: colors.text,
          lineHeight: 1.15,
          margin: 0,
          letterSpacing: "-0.03em",
        }}
      >
        {headline}
      </h2>

      {subheadline && (
        <p
          style={{
            fontSize: "2em",
            fontWeight: 500,
            color: colors.text,
            opacity: 0.7,
            lineHeight: 1.4,
            margin: 0,
            maxWidth: "700px",
          }}
        >
          {subheadline}
        </p>
      )}

      <div
        style={{
          fontSize: "2.2em",
          fontWeight: 700,
          color: colors.accent,
          padding: "24px 48px",
          border: `4px solid ${colors.accent}`,
          borderRadius: "16px",
          backgroundColor: `${colors.accent}10`,
          marginTop: "20px",
          letterSpacing: "0.02em",
        }}
      >
        {action}
      </div>
    </div>
  );
};
