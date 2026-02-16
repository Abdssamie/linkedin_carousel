import React from "react";

/**
 * PresentationTimelineContent - Centered timeline for presentations
 * Use for: Step-by-step processes, journey maps, progress indicators in presentations
 */

interface TimelineStep {
  label: string;
  description: string;
}

interface PresentationTimelineContentProps {
  title?: string;
  steps: TimelineStep[];
  theme: "cream" | "dark" | "blue" | "purple";
  orientation?: "vertical" | "horizontal";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const PresentationTimelineContent: React.FC<PresentationTimelineContentProps> = ({
  title,
  steps,
  theme,
  orientation = "vertical",
}) => {
  const colors = themes[theme];

  if (orientation === "horizontal") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "70px",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        {title && (
          <h2
            style={{
              fontSize: "4.5em",
              fontWeight: 900,
              color: colors.text,
              textAlign: "center",
              margin: 0,
            }}
          >
            {title}
          </h2>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "48px",
            width: "100%",
          }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "28px",
                  flex: 1,
                }}
              >
                {/* Number circle */}
                <div
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    backgroundColor: colors.accent,
                    color: colors.text === "#FFFFFF" ? "#1A1A1A" : "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "5em",
                    fontWeight: 900,
                  }}
                >
                  {index + 1}
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: "3.2em",
                    fontWeight: 700,
                    color: colors.text,
                    textAlign: "center",
                    textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
                  }}
                >
                  {step.label}
                </div>

                {/* Description */}
                <div
                  style={{
                    fontSize: "2em",
                    fontWeight: 500,
                    color: colors.text,
                    opacity: 0.85,
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {step.description}
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    fontSize: "4.5em",
                    fontWeight: 700,
                    color: colors.accent,
                  }}
                >
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Vertical orientation - CENTERED for presentations
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
      {title && (
        <h2
          style={{
            fontSize: "4em",
            fontWeight: 900,
            color: colors.text,
            margin: 0,
            marginBottom: "20px",
            textAlign: "center",
            textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
          }}
        >
          {title}
        </h2>
      )}

      {steps.map((step, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "flex-start",
          }}
        >
          {/* Number circle */}
          <div
            style={{
              width: "95px",
              height: "95px",
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
            {index + 1}
          </div>

          {/* Content */}
          <div style={{ flex: 1, paddingTop: "10px" }}>
            <div
              style={{
                fontSize: "2.6em",
                fontWeight: 700,
                color: colors.text,
                marginBottom: "12px",
                textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
              }}
            >
              {step.label}
            </div>
            <div
              style={{
                fontSize: "1.9em",
                fontWeight: 500,
                color: colors.text,
                opacity: 0.8,
                lineHeight: 1.5,
              }}
            >
              {step.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
