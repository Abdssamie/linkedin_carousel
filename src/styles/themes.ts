/**
 * Centralized theme system for LinkedIn Carousel
 * Implements the "Modern Tech Product" design strategy
 */

export interface ThemeConfig {
  bg: string;
  text: string;
  textSecondary: string;
  accent: string;
  accentSecondary: string;
  grid: string;
  border: string;
  overlay: string;
  shadow: string;
  glow: string;
}

export const themes: Record<string, ThemeConfig> = {
  // PRIMARY THEME - Modern Dark Tech
  dark: {
    bg: "#0F0F0F",           // Deep black for premium feel
    text: "#F5F5F5",         // Slightly off-white for better readability
    textSecondary: "#A0A0A0", // Muted text for secondary content
    accent: "#00D9FF",       // Vibrant light blue - primary brand color
    accentSecondary: "#00B8D4", // Darker accent for depth
    grid: "rgba(245, 245, 245, 0.03)", // Subtle grid
    border: "rgba(0, 217, 255, 0.3)", // Accent-based borders
    overlay: "rgba(0, 217, 255, 0.1)", // Light accent overlay
    shadow: "rgba(0, 217, 255, 0.4)", // Accent-based shadows
    glow: "rgba(0, 217, 255, 0.6)",   // Radial glow effect
  },

  // SECONDARY THEMES - Professional alternatives
  cream: {
    bg: "#FAFAF8",
    text: "#1A1A1A",
    textSecondary: "#666666",
    accent: "#FF6B35",       // Warm orange accent
    accentSecondary: "#E55A2B",
    grid: "rgba(26, 26, 26, 0.05)",
    border: "rgba(255, 107, 53, 0.3)",
    overlay: "rgba(255, 107, 53, 0.1)",
    shadow: "rgba(255, 107, 53, 0.4)",
    glow: "rgba(255, 107, 53, 0.6)",
  },

  blue: {
    bg: "#F8FBFF",
    text: "#0A2540",
    textSecondary: "#4A5568",
    accent: "#0066FF",
    accentSecondary: "#0052CC",
    grid: "rgba(10, 37, 64, 0.05)",
    border: "rgba(0, 102, 255, 0.3)",
    overlay: "rgba(0, 102, 255, 0.1)",
    shadow: "rgba(0, 102, 255, 0.4)",
    glow: "rgba(0, 102, 255, 0.6)",
  },

  purple: {
    bg: "#FDFDFE",
    text: "#1A1A2E",
    textSecondary: "#4A5568",
    accent: "#7C3AED",
    accentSecondary: "#6D28D9",
    grid: "rgba(26, 26, 46, 0.05)",
    border: "rgba(124, 58, 237, 0.3)",
    overlay: "rgba(124, 58, 237, 0.1)",
    shadow: "rgba(124, 58, 237, 0.4)",
    glow: "rgba(124, 58, 237, 0.6)",
  },

  // NEW - Modern Green Tech
  green: {
    bg: "#0D1117",
    text: "#E6EDF3",
    textSecondary: "#7D8590",
    accent: "#00E676",
    accentSecondary: "#00C853",
    grid: "rgba(230, 237, 243, 0.03)",
    border: "rgba(0, 230, 118, 0.3)",
    overlay: "rgba(0, 230, 118, 0.1)",
    shadow: "rgba(0, 230, 118, 0.4)",
    glow: "rgba(0, 230, 118, 0.6)",
  },
};

export type ThemeKey = "blue" | "purple" | "dark" | "cream";

// Typography system based on Lexend font
export const typography = {
  fontFamily: {
    primary: '"Lexend", system-ui, -apple-system, sans-serif',
    fallback: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  sizes: {
    // Clear hierarchy for readability
    hero: '5.5rem',      // Main headlines
    h1: '4.5rem',        // Section titles
    h2: '3.2rem',        // Subtitles
    h3: '2.4rem',        // Large body text
    body: '1.8rem',      // Regular content
    small: '1.4rem',     // Secondary info
    tiny: '1.1rem',      // Labels and metadata
  },
  lineHeights: {
    tight: 1.1,
    normal: 1.3,
    relaxed: 1.5,
  },
  letterSpacing: {
    tight: '-0.03em',
    normal: '0em',
    wide: '0.05em',
  },
};

// Spacing system for consistent layout
export const spacing = {
  // Base unit: 8px
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '2.5rem',    // 40px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '5rem',   // 80px
  '5xl': '6rem',   // 96px
};

// Animation utilities
export const animations = {
  duration: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
  },
  easing: {
    easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
};

// Utility function to get theme colors
export const getTheme = (themeKey: ThemeKey = 'dark'): ThemeConfig => {
  return themes[themeKey] || themes.dark;
};

// Utility function for creating consistent shadows
export const createShadow = (color: string, intensity: number = 0.4) => {
  return `8px 8px 0px ${color}${Math.round(intensity * 255).toString(16).padStart(2, '0')}`;
};

// Utility function for creating glow effects
export const createGlow = (color: string, size: number = 100) => {
  return `radial-gradient(circle at center, ${color} 0%, transparent ${size}px)`;
};