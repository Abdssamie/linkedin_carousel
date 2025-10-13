import { CarouselConfig } from "../types/carousel";

/**
 * Example 1: AI Automation Tips (All 6 content types)
 * Demonstrates every content component in one carousel
 */
export const aiAutomationShowcase: CarouselConfig = {
  id: "ai-automation-showcase",
  theme: "dark",
  brandName: "OPC.AI",
  tagline: "One Person Company",
  website: "@opc.ai",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    {
      type: "hook",
      headlineTop: "Master AI",
      headlineHighlight: "Automation",
      showStats: true,
      statValue: "10x",
      statLabel: "Productivity Boost",
    },
    {
      type: "tip",
      number: "01",
      title: "Automate Email Responses",
      description: "Let AI handle routine emails while you focus on strategy",
      showQuotes: true,
    },
    {
      type: "stat",
      stat: "87%",
      label: "Of Tasks Can Be Automated",
      context: "Most solopreneurs waste time on repetitive work",
      source: "Source: McKinsey 2024",
    },
    {
      type: "insight",
      title: "Real Results",
      content:
        "I automated my entire lead generation process. Now I get 50+ qualified leads per week on autopilot.",
      highlight: "From 5 hours/day to 30 min/day",
    },
    {
      type: "quote",
      quote:
        "OPC.AI transformed how I run my business. I'm finally working ON my business, not IN it.",
      author: "Sarah Chen",
      role: "Founder, DesignCo",
    },
    {
      type: "cta",
      headline: "Ready to Automate?",
      subheadline: "Join 500+ solopreneurs scaling with AI",
      action: "Follow for daily tips",
    },
  ],
};

/**
 * Example 2: Quick Tip Series (Tip-focused)
 * 5 tips with hook and CTA
 */
export const quickTipsSeries: CarouselConfig = {
  id: "quick-tips-series",
  theme: "blue",
  brandName: "OPC.AI",
  website: "@opc.ai",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    {
      type: "hook",
      headlineTop: "5 AI Tools",
      headlineHighlight: "You Need Today",
    },
    {
      type: "tip",
      number: "1",
      title: "ChatGPT for Content",
      description: "Generate blog posts, social media, and emails in minutes",
    },
    {
      type: "tip",
      number: "2",
      title: "Zapier for Workflows",
      description: "Connect your apps and automate repetitive tasks",
    },
    {
      type: "tip",
      number: "3",
      title: "Notion AI for Docs",
      description: "Smart note-taking and knowledge management",
    },
    {
      type: "tip",
      number: "4",
      title: "Midjourney for Design",
      description: "Create stunning visuals without design skills",
    },
    {
      type: "tip",
      number: "5",
      title: "Descript for Video",
      description: "Edit videos as easily as editing text",
    },
    {
      type: "cta",
      headline: "Start Automating",
      action: "Save this carousel",
    },
  ],
};

/**
 * Example 3: Case Study (Story-driven)
 * Hook → Problem → Solution → Results → CTA
 */
export const caseStudyCarousel: CarouselConfig = {
  id: "case-study-example",
  theme: "purple",
  brandName: "OPC.AI",
  tagline: "Success Stories",
  website: "@opc.ai",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    {
      type: "hook",
      headlineTop: "From Burnout to",
      headlineHighlight: "$50K/Month",
    },
    {
      type: "tip",
      title: "The Problem",
      description:
        "Working 80 hours/week, drowning in admin tasks, no time for clients",
    },
    {
      type: "insight",
      title: "The Solution",
      content:
        "We automated email, scheduling, invoicing, and lead generation. Freed up 40 hours per week.",
      highlight: "80% of tasks automated",
    },
    {
      type: "stat",
      stat: "3x",
      label: "Revenue Growth in 6 Months",
      context: "Same effort, triple the results",
    },
    {
      type: "quote",
      quote:
        "I finally have time to focus on what I love - working with clients. The rest runs itself.",
      author: "Mike Rodriguez",
      role: "Marketing Consultant",
    },
    {
      type: "cta",
      headline: "Your Turn",
      subheadline: "Let's automate your business",
      action: "DM me 'AUTOMATE'",
    },
  ],
};

/**
 * Example 4: Data-Driven Post (Stat-heavy)
 * Multiple stats with insights
 */
export const dataDrivenPost: CarouselConfig = {
  id: "data-driven-carousel",
  theme: "cream",
  brandName: "OPC.AI",
  website: "@opc.ai",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    {
      type: "hook",
      headlineTop: "The State of",
      headlineHighlight: "AI Automation",
    },
    {
      type: "stat",
      stat: "73%",
      label: "Of Solopreneurs Use AI",
      source: "Source: Upwork 2024",
    },
    {
      type: "stat",
      stat: "20hrs",
      label: "Saved Per Week on Average",
      context: "That's 1,000+ hours per year",
    },
    {
      type: "stat",
      stat: "$15K",
      label: "Average Revenue Increase",
      context: "Within first 6 months of automation",
    },
    {
      type: "insight",
      title: "The Takeaway",
      content:
        "AI isn't replacing solopreneurs. It's empowering them to compete with teams of 10+.",
      highlight: "The future is automated",
    },
    {
      type: "cta",
      headline: "Join the Movement",
      action: "Follow for more insights",
    },
  ],
};

/**
 * Export all example carousels
 */
export const newExampleCarousels = [
  aiAutomationShowcase,
  quickTipsSeries,
  caseStudyCarousel,
  dataDrivenPost,
];
