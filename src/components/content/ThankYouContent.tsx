import React from "react";

/**
 * ThankYouContent - Closing thank you slide
 * Use for: End of presentation, contact information, final message
 */

interface ThankYouContentProps {
  headline?: string;
  subheadline?: string;
  contactInfo?: string[]; // e.g., ["email@example.com", "linkedin.com/in/username", "+1 234 567 8900"]
  theme: "cream" | "dark" | "blue" | "purple";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const ThankYouContent: React.FC<ThankYouContentProps> = ({
  headline = "Thank You!",
  subheadline = "Questions?",
  contactInfo,
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
        gap: "48px",
        textAlign: "center",
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Main headline */}
      <h1
        style={{
          fontSize: "7em",
          fontWeight: 900,
          color: colors.text,
          margin: 0,
          letterSpacing: "-0.02em",
          textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
        }}
      >
        {headline}
      </h1>

      {/* Subheadline */}
      {subheadline && (
        <h2
          style={{
            fontSize: "3.5em",
            fontWeight: 700,
            color: colors.text,
            opacity: 0.8,
            margin: 0,
          }}
        >
          {subheadline}
        </h2>
      )}

      {/* Decorative line */}
      <div
        style={{
          width: "200px",
          height: "6px",
          backgroundColor: colors.accent,
          borderRadius: "3px",
        }}
      />

      {/* Contact information */}
      {contactInfo && contactInfo.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "24px",
          }}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              style={{
                fontSize: "2em",
                fontWeight: 600,
                color: colors.accent,
                letterSpacing: "0.01em",
              }}
            >
              {info}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
