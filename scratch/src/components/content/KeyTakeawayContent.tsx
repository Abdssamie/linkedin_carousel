import React from "react";

/**
 * KeyTakeawayContent - Highlight key takeaways or main points
 * Use for: Summary slides, key learnings, main points to remember
 */

interface KeyTakeawayContentProps {
  title?: string;
  takeaways: string[];
  theme: "cream" | "dark" | "blue" | "purple";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const KeyTakeawayContent: React.FC<KeyTakeawayContentProps> = ({
  title = "Key Takeaways",
  takeaways,
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
        maxWidth: "1000px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        padding: "0 60px",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "4.5em",
          fontWeight: 900,
          color: colors.text,
          margin: 0,
          textAlign: "center",
          textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
        }}
      >
        {title}
      </h2>

      {/* Takeaways */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          width: "100%",
        }}
      >
        {takeaways.map((takeaway, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "28px",
            }}
          >
            {/* Icon/Bullet */}
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: colors.accent,
                color: colors.text === "#FFFFFF" ? "#1A1A1A" : "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3em",
                fontWeight: 900,
                flexShrink: 0,
              }}
            >
              ✓
            </div>

            {/* Takeaway text */}
            <div
              style={{
                flex: 1,
                fontSize: "2.4em",
                fontWeight: 600,
                color: colors.text,
                lineHeight: 1.5,
                paddingTop: "8px",
              }}
            >
              {takeaway}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
