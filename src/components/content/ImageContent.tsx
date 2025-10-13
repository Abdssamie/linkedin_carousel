import React from "react";
import { Img, staticFile } from "remotion";

/**
 * ImageContent - Display an image with optional caption
 * Use for: Screenshots, diagrams, product images, infographics
 */

interface ImageContentProps {
  imagePath: string; // Path to image in public folder
  caption?: string;
  theme: "cream" | "dark" | "blue" | "purple";
  imageSize?: "small" | "medium" | "large" | "full";
}

const themes = {
  cream: { text: "#2C2C2C", accent: "#F5A623" },
  dark: { text: "#FFFFFF", accent: "#00D9FF" },
  blue: { text: "#0A2540", accent: "#0066FF" },
  purple: { text: "#2D1B69", accent: "#7C3AED" },
};

export const ImageContent: React.FC<ImageContentProps> = ({
  imagePath,
  caption,
  theme,
  imageSize = "large",
}) => {
  const colors = themes[theme];

  const sizeMap = {
    small: "400px",
    medium: "550px",
    large: "700px",
    full: "100%",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        maxWidth: "900px",
      }}
    >
      {/* Image */}
      <div
        style={{
          width: sizeMap[imageSize],
          maxWidth: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          border: `3px solid ${colors.accent}40`,
          boxShadow: `0 12px 40px ${colors.text}20`,
        }}
      >
        <Img
          src={staticFile(imagePath)}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Caption */}
      {caption && (
        <p
          style={{
            fontSize: "1.8em",
            fontWeight: 500,
            color: colors.text,
            opacity: 0.7,
            textAlign: "center",
            margin: 0,
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
};
