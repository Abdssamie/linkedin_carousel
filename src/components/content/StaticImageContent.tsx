import React from "react";
import { Img, staticFile } from "remotion";

/**
 * StaticImageContent - Full-screen static image as main content
 * Use for: Hero images, full-bleed visuals, branded graphics, memes
 */

interface StaticImageContentProps {
  imagePath: string; // Path to image in public folder
  fit?: "cover" | "contain" | "fill";
  position?: string; // CSS object-position value
}

export const StaticImageContent: React.FC<StaticImageContentProps> = ({
  imagePath,
  fit = "contain",
  position = "center",
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Img
        src={staticFile(imagePath)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: fit,
          objectPosition: position,
        }}
      />
    </div>
  );
};
