import React from "react";

/**
 * AgendaContent - Presentation agenda/outline display
 * Use for: Meeting agendas, presentation outlines, session overviews
 */

interface AgendaItem {
  title: string;
  duration?: string; // e.g., "15 min", "30 min"
}

interface AgendaContentProps {
  title?: string;
  items: AgendaItem[];
  theme: "cream" | "dark" | "blue" | "purple";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const AgendaContent: React.FC<AgendaContentProps> = ({
  title = "Agenda",
  items,
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
        maxWidth: "900px",
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

      {/* Agenda items */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              padding: "20px 32px",
              backgroundColor: `${colors.accent}15`,
              borderLeft: `6px solid ${colors.accent}`,
              borderRadius: "8px",
            }}
          >
            {/* Number */}
            <div
              style={{
                fontSize: "2.8em",
                fontWeight: 900,
                color: colors.accent,
                minWidth: "60px",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.2em",
                  fontWeight: 700,
                  color: colors.text,
                }}
              >
                {item.title}
              </div>
              {item.duration && (
                <div
                  style={{
                    fontSize: "1.8em",
                    fontWeight: 600,
                    color: colors.accent,
                    opacity: 0.8,
                  }}
                >
                  {item.duration}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
