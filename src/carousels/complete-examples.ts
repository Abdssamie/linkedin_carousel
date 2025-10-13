import { CarouselConfig } from "../types/carousel";

/**
 * Complete Examples - Showcasing ALL 12 content components
 */

/**
 * Example 1: Complete Feature Showcase
 * Uses: Hook, List, Comparison, Question, CTA
 */
export const completeShowcase: CarouselConfig = {
  id: "complete-showcase",
  theme: "purple",
  brandName: "OPC.AI",
  tagline: "Complete System",
  website: "@opc.ai",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    {
      type: "hook",
      headlineTop: "The Complete",
      headlineHighlight: "AI Toolkit",
    },
    {
      type: "list",
      title: "What You Get:",
      items: [
        "Automated email responses",
        "Smart lead generation",
        "Content creation at scale",
        "24/7 customer support",
      ],
      useCheckmarks: true,
    },
    {
      type: "comparison",
      leftLabel: "Before",
      leftContent: "80 hours/week, stressed, no growth",
      rightLabel: "After",
      rightContent: "30 hours/week, relaxed, 3x revenue",
    },
    {
      type: "question",
      question: "What's your biggest time waster?",
      options: ["Email", "Admin tasks", "Social media", "Meetings"],
      callToAction: "Comment below!",
    },
    {
      type: "cta",
      headline: "Ready to Transform?",
      action: "DM me 'START'",
    },
  ],
};

/**
 * Example 2: Process/Timeline Focused
 * Uses: Hook, Timeline, Stat, CTA
 */
export const processCarousel: CarouselConfig = {
  id: "process-timeline",
  theme: "blue",
  brandName: "OPC.AI",
  website: "@opc.ai",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    {
      type: "hook",
      headlineTop: "Our Proven",
      headlineHighlight: "3-Step Process",
    },
    {
      type: "timeline",
      title: "How It Works:",
      steps: [
        {
          label: "Audit",
          description: "We analyze your current workflow",
        },
        {
          label: "Automate",
          description: "We build custom AI solutions",
        },
        {
          label: "Scale",
          description: "You grow without adding team",
        },
      ],
      orientation: "vertical",
    },
    {
      type: "stat",
      stat: "14 Days",
      label: "Average Setup Time",
      context: "From audit to full automation",
    },
    {
      type: "cta",
      headline: "Start Your Journey",
      subheadline: "Free audit for first 10 people",
      action: "Book your audit",
    },
  ],
};

/**
 * Example 3: Educational with Visuals
 * Uses: Hook, Tip, Image, List, CTA
 * Note: Requires actual images in public folder
 */
export const educationalVisual: CarouselConfig = {
  id: "educational-visual",
  theme: "dark",
  brandName: "OPC.AI",
  tagline: "Learn AI",
  website: "@opc.ai",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    {
      type: "hook",
      headlineTop: "AI Automation",
      headlineHighlight: "Explained",
    },
    {
      type: "tip",
      number: "1",
      title: "What is AI Automation?",
      description: "Using AI to handle repetitive tasks automatically",
    },
    // Uncomment when you have an image
    // {
    //   type: "image",
    //   imagePath: "automation-diagram.png",
    //   caption: "How AI automation works in your business",
    //   imageSize: "large",
    // },
    {
      type: "list",
      title: "Key Benefits:",
      items: [
        "Save 20+ hours per week",
        "Reduce human error",
        "Scale without hiring",
        "Work 24/7 automatically",
      ],
      useCheckmarks: true,
    },
    {
      type: "cta",
      headline: "Want to Learn More?",
      action: "Follow for daily tips",
    },
  ],
};

/**
 * Example 4: Engagement & Poll
 * Uses: Hook, Question, Stat, Quote, CTA
 */
export const engagementPoll: CarouselConfig = {
  id: "engagement-poll",
  theme: "cream",
  brandName: "OPC.AI",
  website: "@opc.ai",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    {
      type: "hook",
      headlineTop: "Let's Talk",
      headlineHighlight: "Automation",
    },
    {
      type: "question",
      question: "How many hours do you spend on admin tasks weekly?",
      options: ["0-5 hours", "5-10 hours", "10-20 hours", "20+ hours"],
      callToAction: "Vote in comments!",
    },
    {
      type: "stat",
      stat: "73%",
      label: "Spend 10+ Hours on Admin",
      context: "That's 500+ hours per year wasted",
      source: "Source: Solopreneur Survey 2024",
    },
    {
      type: "quote",
      quote: "I got 15 hours back every week. It's like hiring a full-time assistant.",
      author: "Mike Chen",
      role: "Founder, DesignStudio",
    },
    {
      type: "cta",
      headline: "Reclaim Your Time",
      action: "Learn how →",
    },
  ],
};

/**
 * Example 5: Before/After Transformation
 * Uses: Hook, Comparison, Stat, Insight, CTA
 */
export const transformationStory: CarouselConfig = {
  id: "transformation-story",
  theme: "purple",
  brandName: "OPC.AI",
  tagline: "Success Story",
  website: "@opc.ai",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    {
      type: "hook",
      headlineTop: "From Burnout to",
      headlineHighlight: "Balance",
    },
    {
      type: "comparison",
      leftLabel: "January 2024",
      leftContent: "Working 70 hours/week, $5K/month, exhausted",
      rightLabel: "June 2024",
      rightContent: "Working 25 hours/week, $18K/month, energized",
    },
    {
      type: "stat",
      stat: "3.6x",
      label: "Revenue Increase",
      context: "In just 6 months with AI automation",
    },
    {
      type: "insight",
      title: "The Secret",
      content: "We automated email, scheduling, invoicing, and lead gen. Now I focus only on high-value work.",
      highlight: "64% less time, 360% more revenue",
    },
    {
      type: "cta",
      headline: "Your Turn",
      subheadline: "Let's build your automation system",
      action: "Book free consultation",
    },
  ],
};

/**
 * Example 6: Horizontal Timeline
 * Uses: Hook, Timeline (horizontal), List, CTA
 */
export const horizontalProcess: CarouselConfig = {
  id: "horizontal-process",
  theme: "blue",
  brandName: "OPC.AI",
  website: "@opc.ai",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    {
      type: "hook",
      headlineTop: "Your Path to",
      headlineHighlight: "Automation",
    },
    {
      type: "timeline",
      steps: [
        { label: "Week 1", description: "Setup & Training" },
        { label: "Week 2", description: "Implementation" },
        { label: "Week 3", description: "Optimization" },
      ],
      orientation: "horizontal",
    },
    {
      type: "list",
      title: "What's Included:",
      items: [
        "Custom AI setup",
        "Team training",
        "Ongoing support",
        "Monthly optimization",
      ],
      useCheckmarks: true,
    },
    {
      type: "cta",
      headline: "Start in 3 Weeks",
      action: "Apply now",
    },
  ],
};

/**
 * Export all complete examples
 */
export const completeExamples = [
  completeShowcase,
  processCarousel,
  educationalVisual,
  engagementPoll,
  transformationStory,
  horizontalProcess,
];
