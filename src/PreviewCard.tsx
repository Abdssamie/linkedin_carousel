import React from "react";
import { AbsoluteFill } from "remotion";
import "./fonts.css";
import { z } from "zod";

const fontFamily = "Inter";

// Color themes for variety
const themes = {
  cream: {
    bg: "#F5F1E8",
    text: "#2C2C2C",
    accent: "#F5A623",
    grid: "rgba(200, 190, 170, 0.15)",
    circle: "#E8A419", // Separate color for circle
  },
  dark: {
    bg: "#1A1A1A",
    text: "#FFFFFF",
    accent: "#00D9FF",
    grid: "rgba(255, 255, 255, 0.05)",
    circle: "#00B8D4", // Separate color for circle
  },
  blue: {
    bg: "#E8F4F8",
    text: "#0A2540",
    accent: "#0066FF",
    grid: "rgba(0, 102, 255, 0.08)",
    circle: "#0052CC", // Separate color for circle
  },
  purple: {
    bg: "#F3F0FF",
    text: "#2D1B69",
    accent: "#7C3AED",
    grid: "rgba(124, 58, 237, 0.08)",
    circle: "#6D28D9", // Separate color for circle
  },
};

export const myCompSchema = z.object({
  brandName: z.string(),
  headlineTop: z.string(),
  headlineHighlight: z.string(),
  website: z.string(),
  theme: z.enum(["cream", "dark", "blue", "purple"]).optional(),
  showQuotes: z.boolean().optional(),
  showStats: z.boolean().optional(),
  statLabel: z.string().optional(),
  statValue: z.string().optional(),
  tagline: z.string().optional(),
});

export const PreviewCard: React.FC<z.infer<typeof myCompSchema>> = ({
  brandName,
  headlineTop,
  headlineHighlight,
  website,
  theme = "cream",
  showQuotes = true,
  showStats = false,
  statLabel = "Clients Helped",
  statValue = "500+",
  tagline = "AI-Powered Solutions",
}) => {
  const colors = themes[theme];

  const absContainer: React.CSSProperties = {
    backgroundColor: colors.bg,
    backgroundImage: `
      linear-gradient(${colors.grid} 1px, transparent 1px),
      linear-gradient(90deg, ${colors.grid} 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  };

  const container: React.CSSProperties = {
    flex: 1,
    padding: "80px 100px",
    fontFamily,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  };

  const brandStyle: React.CSSProperties = {
    fontSize: "2.2em",
    fontWeight: 700,
    color: colors.text,
    marginBottom: 20,
    letterSpacing: "-0.02em",
  };

  const taglineStyle: React.CSSProperties = {
    fontSize: "1.3em",
    fontWeight: 500,
    color: colors.accent,
    marginBottom: 40,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  };

  const quoteMarks: React.CSSProperties = {
    fontSize: "5em",
    fontWeight: 700,
    color: colors.text,
    lineHeight: 0.5,
    marginBottom: 40,
    opacity: 0.9,
  };

  const headlineContainer: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "55%", // Leave more space on the right for tweet-style content
    paddingRight: "40px", // Ensure no overlap with tweet box
  };

  const headlineStyle: React.CSSProperties = {
    fontSize: "4.8em",
    fontWeight: 900,
    color: colors.text,
    lineHeight: 1.05,
    margin: 0,
    letterSpacing: "-0.03em",
  };

  const highlightedText: React.CSSProperties = {
    backgroundColor: colors.text,
    color: colors.accent,
    padding: "8px 24px",
    display: "inline-block",
    marginTop: 12,
    boxShadow: `8px 8px 0px ${colors.accent}40`,
  };

  const statsContainer: React.CSSProperties = {
    display: "flex",
    gap: "40px",
    marginTop: 40,
    alignItems: "center",
  };

  const statBox: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: "3em",
    fontWeight: 900,
    color: colors.accent,
    lineHeight: 1,
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: "1.2em",
    fontWeight: 500,
    color: colors.text,
    opacity: 0.7,
  };

  const footerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.8em",
    color: colors.text,
    fontWeight: 600,
  };

  const arrowStyle: React.CSSProperties = {
    fontSize: "2.5em",
    fontWeight: 700,
    color: colors.accent,
  };

  const dotsPattern: React.CSSProperties = {
    position: "absolute",
    top: 80,
    right: 100,
    width: 160,
    height: 160,
    backgroundImage: `radial-gradient(circle, ${colors.accent} 8px, transparent 8px)`,
    backgroundSize: "32px 32px",
    opacity: 0.5,
  };

  const aiAccent: React.CSSProperties = {
    position: "absolute",
    top: "20%", // 20% from top (modern positioning)
    left: "80%", // 80% from left (modern positioning)
    transform: "translate(-50%, -50%)", // Center the circle on the position
    width: 140,
    height: 140,
    border: `6px solid ${colors.circle}`, // Separate color from dots
    borderRadius: "50%",
    opacity: 0.5,
  };

  // Profile photo inside tweet box
  const profilePhoto: React.CSSProperties = {
    width: 60,
    height: 60,
    borderRadius: "50%",
    border: `3px solid ${colors.accent}`,
    backgroundColor: colors.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5em",
    fontWeight: 700,
    color: colors.bg,
    overflow: "hidden",
    marginBottom: 20,
  };

  // Tweet-style content box in center-right (taller, expandable)
  const tweetBox: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    right: 100,
    transform: "translateY(-50%)",
    width: 340,
    minHeight: 280, // Minimum height
    maxHeight: 450, // Can expand to fit more content
    padding: "40px",
    backgroundColor: `${colors.text}10`,
    border: `3px solid ${colors.accent}40`,
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    boxShadow: `0 8px 32px ${colors.text}15`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const tweetTitle: React.CSSProperties = {
    fontSize: "1.2em",
    fontWeight: 700,
    color: colors.accent,
    marginBottom: 16,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  const tweetText: React.CSSProperties = {
    fontSize: "1.3em",
    fontWeight: 500,
    color: colors.text,
    lineHeight: 1.6,
    marginBottom: 12,
    opacity: 0.85,
  };

  const tweetHighlight: React.CSSProperties = {
    fontSize: "1.1em",
    fontWeight: 600,
    color: colors.accent,
    lineHeight: 1.5,
    marginTop: 12,
  };

  return (
    <AbsoluteFill style={absContainer}>
      <div style={dotsPattern} />
      <div style={aiAccent} />
      
      {/* Tweet-style content box with profile photo inside */}
      <div style={tweetBox}>
        {/* Profile photo at top of tweet box */}
        <div style={profilePhoto}>
          <span>AS</span>
        </div>
        
        <div style={tweetTitle}>Key Insight</div>
        <div style={tweetText}>
          AI automation handles repetitive tasks while you focus on strategy and growth.
        </div>
        <div style={tweetHighlight}>
          → Save 20+ hours per week
        </div>
      </div>

      <div style={container}>
        <div>
          <div style={brandStyle}>{brandName}</div>
          <div style={taglineStyle}>{tagline}</div>
          {showQuotes && <div style={quoteMarks}>66</div>}
        </div>

        <div style={headlineContainer}>
          <h1 style={headlineStyle}>
            {headlineTop}
            <br />
            <span style={highlightedText}>{headlineHighlight}</span>
          </h1>

          {showStats && (
            <div style={statsContainer}>
              <div style={statBox}>
                <div style={statValueStyle}>{statValue}</div>
                <div style={statLabelStyle}>{statLabel}</div>
              </div>
            </div>
          )}
        </div>

        <div style={footerStyle}>
          <span>{website}</span>
          <span style={arrowStyle}>→</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
