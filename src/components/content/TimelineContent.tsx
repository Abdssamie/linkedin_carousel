import React from "react";

/**
 * TimelineContent - Process steps or timeline visualization
 * Use for: Step-by-step processes, journey maps, progress indicators
 */

interface TimelineStep {
  label: string;
  description: string;
}

interface TimelineContentProps {
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

export const TimelineContent: React.FC<TimelineContentProps> = ({
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
          gap: "40px",
        }}
      >
        {title && (
          <h2
            style={{
              fontSize: "3.5em",
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
            gap: "24px",
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
                  gap: "16px",
                  flex: 1,
                }}
              >
                {/* Number circle */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: colors.accent,
                    color: colors.text === "#FFFFFF" ? "#1A1A1A" : "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5em",
                    fontWeight: 900,
                  }}
                >
                  {index + 1}
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: "1.6em",
                    fontWeight: 700,
                    color: colors.text,
                    textAlign: "center",
                  }}
                >
                  {step.label}
                </div>

                {/* Description */}
                <div
                  style={{
                    fontSize: "1.2em",
                    fontWeight: 500,
                    color: colors.text,
                    opacity: 0.7,
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {step.description}
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    fontSize: "2.5em",
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

  // Vertical orientation
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "32px",
        maxWidth: "750px",
      }}
    >
      {title && (
        <h2
          style={{
            fontSize: "3.5em",
            fontWeight: 900,
            color: colors.text,
            margin: 0,
            marginBottom: "16px",
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
            gap: "24px",
            alignItems: "flex-start",
          }}
        >
          {/* Number circle */}
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
              fontSize: "2.2em",
              fontWeight: 900,
              flexShrink: 0,
            }}
          >
            {index + 1}
          </div>

          {/* Content */}
          <div style={{ flex: 1, paddingTop: "8px" }}>
            <div
              style={{
                fontSize: "2em",
                fontWeight: 700,
                color: colors.text,
                marginBottom: "8px",
              }}
            >
              {step.label}
            </div>
            <div
              style={{
                fontSize: "1.5em",
                fontWeight: 500,
                color: colors.text,
                opacity: 0.7,
                lineHeight: 1.4,
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
