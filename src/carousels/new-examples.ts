import { CarouselConfig } from "../types/carousel";

/**
 * Complete Showcase - All slide types in one carousel
 * Demonstrates every content component with dark theme
 */
export const completeShowcase: CarouselConfig = {
  id: "complete-showcase",
  theme: "dark",
  brandName: "OPC.AI",
  tagline: "Product Features",
  website: "@opc.ai",
  address: "San Francisco, CA",
  profileInitials: "AS",
  showSlideNumbers: true,
  slides: [
    // 1. Hook slide
    {
      type: "hook",
      headlineTop: "Complete",
      headlineHighlight: "Showcase",
      showStats: true,
      statValue: "15+",
      statLabel: "Slide Types",
    },
    // 2. Tip slide
    {
      type: "tip",
      number: "01",
      title: "Getting Started",
      description: "This carousel demonstrates all available slide types and layouts in our system.",
      useMinimalLayout: true,
    },
    // 3. List slide
    {
      type: "list",
      useMinimalLayout: true,
      title: "Key Features",
      items: [
        "Multiple content layouts",
        "Dark theme optimized",
        "Custom backgrounds",
        "Flexible typography",
      ],
      useCheckmarks: true,
    },
    // 4. Heavy List slide
    {
      type: "heavyList",
      useMinimalLayout: true,
      title: "Enterprise Platform Features",
      description: "Our comprehensive platform includes everything you need to build, deploy, and scale modern applications.",
      items: [
        "Advanced CI/CD pipelines with automated testing",
        "Real-time collaboration tools for teams",
        "Enterprise-grade security and compliance",
        "Scalable infrastructure that grows with you",
        "24/7 support with guaranteed response times",
      ],
      useCheckmarks: true,
    },
    // 5. Two Column slide
    {
      type: "twoColumn",
      useMinimalLayout: true,
      imagePath: "portrait.jpg",
      imagePosition: "left",
      title: "Visual Content",
      content: "Combine images with text to create engaging slides that tell your story effectively.",
      bulletPoints: [
        "Multiple aspect ratios",
        "Flexible positioning",
        "Clean layouts",
      ],
      imageAspectRatio: "portrait",
    },
    // 5. Two Column slide
    {
      type: "twoColumn",
      useMinimalLayout: true,
      imagePath: "square.jpg",
      imagePosition: "right",
      title: "Visual Content",
      content: "Combine images with text to create engaging slides that tell your story effectively.",
      bulletPoints: [
        "Multiple aspect ratios",
        "Flexible positioning",
        "Clean layouts",
      ],
      imageAspectRatio: "square",
    },
    // 6. Two Row slide
    {
      type: "twoRow",
      useMinimalLayout: true,
      imagePath: "landscape.jpg",
      imagePosition: "top",
      title: "Landscape Images",
      content: "Perfect for dashboards, screenshots, and wide-format visuals that need horizontal space.",
      bulletPoints: [
        "16:9 aspect ratio",
        "Centered layout",
        "Optimized spacing",
      ],
    },
    // 8. Stat slide
    {
      type: "stat",
      stat: "10x",
      label: "Faster Than Manual Work",
      context: "Save 20+ hours per week on average",
      source: "Based on 500+ user surveys",
    },
    // 9. Comparison slide
    {
      type: "comparison",
      leftLabel: "Before",
      leftContent: "Manual processes, slow workflows, limited scale",
      rightLabel: "After",
      rightContent: "Automated systems, fast execution, unlimited growth",
    },
    // 10. Question slide
    {
      type: "question",
      question: "What's your biggest challenge?",
      options: [
        "Time management",
        "Team collaboration",
        "Scaling operations",
        "Technical complexity",
      ],
      callToAction: "Comment below!",
    },
    // 11. Timeline slide (vertical)
    {
      type: "timeline",
      title: "Our Process",
      steps: [
        { label: "Discover", description: "Understand your needs" },
        { label: "Design", description: "Create the solution" },
        { label: "Deploy", description: "Launch and scale" },
      ],
      orientation: "vertical",
    },
    // 12. Timeline slide (horizontal)
    {
      type: "timeline",
      steps: [
        { label: "Week 1", description: "Setup & Training" },
        { label: "Week 2", description: "Implementation" },
        { label: "Week 3", description: "Go Live" },
      ],
      orientation: "horizontal",
    },
    // 13. Quote slide
    {
      type: "quote",
      quote: "This platform transformed how we work. We're now 10x more productive and our team loves it.",
      author: "Sarah Chen",
      role: "CEO, TechCorp",
    },
    // 14. Insight slide
    {
      type: "insight",
      title: "Real Results",
      content: "We automated our entire workflow and reduced operational costs by 60% while improving quality and speed.",
      highlight: "60% cost reduction in 3 months",
    },
    // 15. CTA slide
    {
      type: "cta",
      headline: "Ready to Transform Your Workflow?",
      subheadline: "Join thousands of teams already using our platform",
      action: "Start Free Trial",
    },
  ],
};



/**
 * Export all example carousels
 */
export const newExampleCarousels = [completeShowcase];
