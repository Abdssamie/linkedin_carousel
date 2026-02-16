import { PresentationConfig } from "../../types/presentation";

/**
 * Business Pitch Presentation
 * Professional business presentation demonstrating diagonal geometric layouts
 * 10 slides covering company vision, problem, solution, and call-to-action
 */
export const businessPitchPresentation: PresentationConfig = {
  id: "business-pitch",
  format: "presentation",
  brandName: "OPC.AI",
  tagline: "One Person Company",
  website: "@opc.ai",
  profileInitials: "AS",
  slides: [
    // Slide 1: Opening hook with image
    {
      type: "hook",
      headlineTop: "Welcome to",
      headlineHighlight: "Our Vision",
      diagonalPattern: "left",
      imagePath: "landscape.jpg",
      imagePosition: "right",
      speakerNotes: "Introduce the company and main value proposition. Emphasize innovation and our unique approach to solving industry problems.",
    },
    // Slide 2: Key statistic
    {
      type: "stat",
      stat: "10x",
      label: "Productivity Increase",
      context: "With AI automation",
      diagonalPattern: "right",
      imagePath: "square.jpg",
      imagePosition: "left",
      speakerNotes: "Highlight the key metric that demonstrates our impact. Reference customer case studies if questions arise.",
    },
    // Slide 3: Problem statement
    {
      type: "insight",
      title: "The Challenge",
      content: "Traditional workflows are slow, manual, and don't scale. Teams waste 20+ hours per week on repetitive tasks that could be automated.",
      highlight: "20+ hours wasted weekly",
      diagonalPattern: "left",
      imagePath: "portrait.jpg",
      imagePosition: "right",
      speakerNotes: "Paint the picture of the problem. Make it relatable to the audience's daily struggles.",
    },
    // Slide 4: Solution overview
    {
      type: "list",
      title: "Our Solution",
      items: [
        "AI-powered automation",
        "Seamless integration",
        "Real-time collaboration",
        "Enterprise-grade security",
      ],
      useCheckmarks: true,
      diagonalPattern: "none",
      speakerNotes: "Walk through each feature briefly. Emphasize how each addresses a specific pain point mentioned earlier.",
    },
    // Slide 5: Key features with tip format
    {
      type: "tip",
      number: "01",
      title: "Smart Automation",
      description: "Our AI learns your workflows and automates repetitive tasks, freeing your team to focus on high-value work.",
      diagonalPattern: "left",
      imagePath: "landscape.jpeg",
      imagePosition: "right",
      speakerNotes: "Demonstrate with a quick example if possible. Mention specific use cases relevant to the audience.",
    },
    // Slide 6: Customer testimonial
    {
      type: "quote",
      quote: "This platform transformed how we work. We're now 10x more productive and our team loves it.",
      author: "Sarah Chen",
      role: "CEO, TechCorp",
      diagonalPattern: "incline-right",
      speakerNotes: "Share additional context about TechCorp's success story. Mention they started with similar challenges.",
    },
    // Slide 7: Timeline/Process
    {
      type: "timeline",
      title: "Getting Started",
      steps: [
        { label: "Week 1", description: "Setup & Training" },
        { label: "Week 2", description: "Implementation" },
        { label: "Week 3", description: "Go Live" },
      ],
      orientation: "horizontal",
      diagonalPattern: "none",
      speakerNotes: "Emphasize the quick time-to-value. Most customers see ROI within the first month.",
    },
    // Slide 8: Comparison before/after
    {
      type: "comparison",
      leftLabel: "Before",
      leftContent: "Manual processes, slow workflows, limited scale, high error rates",
      rightLabel: "After",
      rightContent: "Automated systems, fast execution, unlimited growth, 99.9% accuracy",
      diagonalPattern: "right",
      speakerNotes: "Use this to create a clear contrast. Reference specific metrics from customer data.",
    },
    // Slide 9: Final tip/value proposition
    {
      type: "tip",
      number: "02",
      title: "Why Choose Us",
      description: "We're not just a tool—we're your partner in transformation. Our team supports you every step of the way.",
      diagonalPattern: "left",
      imagePath: "bloomshine.png",
      imagePosition: "right",
      speakerNotes: "Highlight our customer success team and ongoing support. Mention our 24/7 availability.",
    },
    // Slide 10: Call to action
    {
      type: "cta",
      headline: "Ready to Transform Your Workflow?",
      subheadline: "Join thousands of teams already using our platform",
      action: "Start Free Trial",
      diagonalPattern: "incline-left",
      speakerNotes: "Close with confidence. Offer to answer questions and provide contact information for follow-up.",
    },
  ],
};
