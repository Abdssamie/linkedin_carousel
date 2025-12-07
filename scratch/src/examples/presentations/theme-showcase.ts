import { PresentationConfig } from "../../types/presentation";

const baseSlides = [
  {
    type: "hook" as const,
    headlineTop: "Theme",
    headlineHighlight: "Presentation",
    diagonalPattern: "right" as const,
    imagePath: "landscape.jpg",
    speakerNotes: "Introduction slide showcasing the theme.",
  },
  {
    type: "stat" as const,
    stat: "100%",
    label: "Theme Support",
    context: "Across all slide types",
    diagonalPattern: "left" as const,
    speakerNotes: "Highlight consistency.",
  },
];

export const industrialPresentation: PresentationConfig = {
  id: "pres-industrial",
  format: "presentation",
  theme: "industrial",
  brandName: "Heavy Ind.",
  tagline: "Building the Future",
  website: "@heavy.ind",
  profileInitials: "HI",
  slides: baseSlides,
};

export const oceanPresentation: PresentationConfig = {
  id: "pres-ocean",
  format: "presentation",
  theme: "ocean",
  brandName: "Deep Dive",
  tagline: "Explore Depth",
  website: "@deep.dive",
  profileInitials: "DD",
  slides: baseSlides,
};

export const firePresentation: PresentationConfig = {
  id: "pres-fire",
  format: "presentation",
  theme: "fire",
  brandName: "Ignite",
  tagline: "Passion & Power",
  website: "@ignite.co",
  profileInitials: "IG",
  slides: baseSlides,
};

export const arcticPresentation: PresentationConfig = {
  id: "pres-arctic",
  format: "presentation",
  theme: "arctic",
  brandName: "Chill Tech",
  tagline: "Cool Solutions",
  website: "@chill.tech",
  profileInitials: "CT",
  slides: baseSlides,
};

export const neonPresentation: PresentationConfig = {
  id: "pres-neon",
  format: "presentation",
  theme: "neon",
  brandName: "Cyber Punk",
  tagline: "Future Now",
  website: "@cyber.punk",
  profileInitials: "CP",
  slides: baseSlides,
};

export const sunsetPresentation: PresentationConfig = {
  id: "pres-sunset",
  format: "presentation",
  theme: "sunset",
  brandName: "Horizon",
  tagline: "Golden Hour",
  website: "@horizon.view",
  profileInitials: "HZ",
  slides: baseSlides,
};

export const themePresentations = [
  industrialPresentation,
  oceanPresentation,
  firePresentation,
  arcticPresentation,
  neonPresentation,
  sunsetPresentation,
];
