import React from "react";

/**
 * PresentationPresentationTeamContent - Team member showcase
 * Use for: Team introductions, speaker bios, about us slides
 */

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

interface PresentationTeamContentProps {
  title?: string;
  members: TeamMember[];
  theme: "cream" | "dark" | "blue" | "purple";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const PresentationTeamContent: React.FC<PresentationTeamContentProps> = ({
  title = "Our Team",
  members,
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
        gap: "56px",
        maxWidth: "1100px",
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

      {/* Team members grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: members.length <= 2 ? `repeat(${members.length}, 1fr)` : "repeat(3, 1fr)",
          gap: "48px",
          width: "100%",
        }}
      >
        {members.map((member, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* Avatar circle with initials */}
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
                fontSize: "3.5em",
                fontWeight: 900,
                border: `4px solid ${colors.accent}40`,
              }}
            >
              {member.initials}
            </div>

            {/* Name */}
            <div
              style={{
                fontSize: "2.2em",
                fontWeight: 700,
                color: colors.text,
                textAlign: "center",
              }}
            >
              {member.name}
            </div>

            {/* Role */}
            <div
              style={{
                fontSize: "1.7em",
                fontWeight: 500,
                color: colors.text,
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              {member.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
