import { CarouselConfig } from "../../types/carousel";

const baseSlides = [
  {
    type: "hook" as const,
    headlineTop: "Theme",
    headlineHighlight: "Showcase",
    showStats: true,
    statValue: "New",
    statLabel: "Design",
  },
  {
    type: "tip" as const,
    number: "01",
    title: "Theme Features",
    description: "This carousel demonstrates the visual style of this specific theme.",
  },
  {
    type: "cta" as const,
    headline: "Try This Theme",
    action: "Get Started",
  },
];

export const industrialCarousel: CarouselConfig = {
  id: "theme-industrial",
  theme: "industrial",
  brandName: "Heavy Ind.",
  tagline: "Building the Future",
  website: "@heavy.ind",
  profileInitials: "HI",
  slides: baseSlides,
};

export const oceanCarousel: CarouselConfig = {
  id: "theme-ocean",
  theme: "ocean",
  brandName: "Deep Dive",
  tagline: "Explore Depth",
  website: "@deep.dive",
  profileInitials: "DD",
  slides: baseSlides,
};

export const fireCarousel: CarouselConfig = {
  id: "theme-fire",
  theme: "fire",
  brandName: "Ignite",
  tagline: "Passion & Power",
  website: "@ignite.co",
  profileInitials: "IG",
  slides: baseSlides,
};

export const arcticCarousel: CarouselConfig = {
  id: "theme-arctic",
  theme: "arctic",
  brandName: "Chill Tech",
  tagline: "Cool Solutions",
  website: "@chill.tech",
  profileInitials: "CT",
  slides: baseSlides,
};

export const neonCarousel: CarouselConfig = {
  id: "theme-neon",
  theme: "neon",
  brandName: "Cyber Punk",
  tagline: "Future Now",
  website: "@cyber.punk",
  profileInitials: "CP",
  slides: baseSlides,
};

export const sunsetCarousel: CarouselConfig = {
  id: "theme-sunset",
  theme: "sunset",
  brandName: "Horizon",
  tagline: "Golden Hour",
  website: "@horizon.view",
  profileInitials: "HZ",
  slides: baseSlides,
};

export const themeCarousels = [
  industrialCarousel,
  oceanCarousel,
  fireCarousel,
  arcticCarousel,
  neonCarousel,
  sunsetCarousel,
];
