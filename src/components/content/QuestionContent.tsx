import React from "react";

/**
 * QuestionContent - Engagement question with optional choices
 * Use for: Polls, questions, engagement prompts, discussion starters
 */

interface QuestionContentProps {
  question: string;
  options?: string[]; // Optional multiple choice options
  callToAction?: string; // e.g., "Comment your answer below"
  theme: "cream" | "dark" | "blue" | "purple";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const QuestionContent: React.FC<QuestionContentProps> = ({
  question,
  options,
  callToAction,
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
        gap: "32px",
        textAlign: "center",
        maxWidth: "900px",
        padding: "0 40px",
      }}
    >
      {/* Question mark icon */}
      <div
        style={{
          fontSize: "5em",
          fontWeight: 700,
          color: colors.accent,
          opacity: 0.3,
        }}
      >
        ?
      </div>

      {/* Question */}
      <h2
        style={{
          fontSize: question.length > 60 ? "3.2em" : "4.2em",
          fontWeight: 900,
          color: colors.text,
          lineHeight: 1.3,
          margin: 0,
          letterSpacing: "-0.02em",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          textShadow: `0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)`,
        }}
      >
        {question}
      </h2>

      {/* Options */}
      {options && options.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              style={{
                padding: "16px 28px",
                backgroundColor: `${colors.accent}10`,
                border: `2px solid ${colors.accent}40`,
                borderRadius: "12px",
                fontSize: "1.6em",
                fontWeight: 600,
                color: colors.text,
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {String.fromCharCode(65 + index)}. {option}
            </div>
          ))}
        </div>
      )}

      {/* Call to action */}
      {callToAction && (
        <div
          style={{
            fontSize: "1.6em",
            fontWeight: 600,
            color: colors.accent,
            marginTop: "16px",
          }}
        >
          {callToAction}
        </div>
      )}
    </div>
  );
};
