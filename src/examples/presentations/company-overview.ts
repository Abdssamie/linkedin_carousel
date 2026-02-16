import { PresentationConfig } from "../../types/presentation";

/**
 * Company Overview Presentation
 * Professional company presentation showcasing new presentation-specific slides
 * Demonstrates agenda, team, key takeaways, and thank you slides
 */
export const companyOverviewPresentation: PresentationConfig = {
  id: "company-overview",
  format: "presentation",
  brandName: "TechVision Inc.",
  tagline: "Innovating Tomorrow",
  website: "techvision.com",
  profileInitials: "TV",
  slides: [
    // Slide 1: Opening
    {
      type: "hook",
      headlineTop: "Welcome to",
      headlineHighlight: "TechVision",
      showStats: true,
      statValue: "2024",
      statLabel: "Company Overview",
      diagonalPattern: "left",
      imagePath: "landscape.jpg",
      imagePosition: "right",
      speakerNotes: "Welcome everyone. Today we'll share our company vision, team, and achievements.",
    },

    // Slide 2: Agenda
    {
      type: "agenda",
      title: "Today's Agenda",
      items: [
        { title: "Company Vision & Mission", duration: "5 min" },
        { title: "Our Team", duration: "5 min" },
        { title: "Key Achievements", duration: "10 min" },
        { title: "Future Roadmap", duration: "10 min" },
        { title: "Q&A", duration: "10 min" },
      ],
      diagonalPattern: "none",
      speakerNotes: "We have a packed agenda today. We'll cover our vision, introduce the team, share achievements, and discuss our roadmap.",
    },

    // Slide 3: Vision
    {
      type: "insight",
      title: "Our Vision",
      content: "To empower businesses worldwide with cutting-edge AI technology that transforms how they work, innovate, and grow.",
      highlight: "Transform how businesses work",
      diagonalPattern: "right",
      imagePath: "square.jpg",
      imagePosition: "left",
      speakerNotes: "Our vision is clear - we want to transform how businesses operate using AI technology.",
    },

    // Slide 4: Mission Statement
    {
      type: "quote",
      quote: "We believe technology should empower people, not replace them. Our mission is to build AI tools that enhance human creativity and productivity.",
      author: "Jane Smith",
      role: "CEO & Founder",
      diagonalPattern: "none",
      speakerNotes: "Our CEO Jane Smith articulates our core belief - technology as an enabler, not a replacement.",
    },

    // Slide 5: Team Introduction
    {
      type: "team",
      title: "Meet Our Leadership",
      members: [
        { name: "Jane Smith", role: "CEO & Founder", initials: "JS" },
        { name: "Michael Chen", role: "CTO", initials: "MC" },
        { name: "Sarah Johnson", role: "VP of Product", initials: "SJ" },
        { name: "David Lee", role: "VP of Engineering", initials: "DL" },
        { name: "Emily Brown", role: "VP of Sales", initials: "EB" },
        { name: "Robert Taylor", role: "CFO", initials: "RT" },
      ],
      diagonalPattern: "none",
      speakerNotes: "Our leadership team brings over 100 years of combined experience in tech, AI, and business.",
    },

    // Slide 6: Key Achievement - Growth
    {
      type: "stat",
      stat: "300%",
      label: "Revenue Growth",
      context: "Year over year",
      source: "Q4 2023 Results",
      diagonalPattern: "left",
      imagePath: "portrait.jpg",
      imagePosition: "right",
      speakerNotes: "We've seen tremendous growth - 300% revenue increase year over year.",
    },

    // Slide 7: Key Achievement - Customers
    {
      type: "stat",
      stat: "10K+",
      label: "Active Customers",
      context: "Across 50 countries",
      diagonalPattern: "right",
      imagePath: "landscape.jpeg",
      imagePosition: "left",
      speakerNotes: "We now serve over 10,000 active customers globally across 50 countries.",
    },

    // Slide 8: Product Features
    {
      type: "list",
      title: "Our Platform",
      items: [
        "AI-powered automation engine",
        "Real-time collaboration tools",
        "Advanced analytics dashboard",
        "Enterprise-grade security",
        "24/7 customer support",
      ],
      useCheckmarks: true,
      diagonalPattern: "none",
      speakerNotes: "Our platform offers comprehensive features designed for modern businesses.",
    },

    // Slide 9: Customer Success
    {
      type: "comparison",
      leftLabel: "Before TechVision",
      leftContent: "Manual processes, 40+ hours/week on repetitive tasks, limited insights, slow decision making",
      rightLabel: "After TechVision",
      rightContent: "Automated workflows, 5 hours/week on automation, real-time insights, data-driven decisions",
      diagonalPattern: "incline-left",
      imagePath: "bloomshine.png",
      imagePosition: "right",
      speakerNotes: "Here's the transformation our customers experience. From manual to automated, from slow to fast.",
    },

    // Slide 10: Roadmap Timeline
    {
      type: "timeline",
      title: "2024 Roadmap",
      steps: [
        { label: "Q1", description: "AI Assistant Launch" },
        { label: "Q2", description: "Mobile App Release" },
        { label: "Q3", description: "Enterprise Features" },
        { label: "Q4", description: "Global Expansion" },
      ],
      orientation: "horizontal",
      diagonalPattern: "none",
      speakerNotes: "Our 2024 roadmap is ambitious. We're launching new products each quarter.",
    },

    // Slide 11: Key Takeaways
    {
      type: "keyTakeaway",
      title: "Key Takeaways",
      takeaways: [
        "TechVision is transforming how businesses use AI technology",
        "We've achieved 300% growth with 10K+ customers worldwide",
        "Our experienced leadership team is driving innovation",
        "2024 roadmap includes major product launches and global expansion",
      ],
      diagonalPattern: "none",
      speakerNotes: "Let's recap the key points from today's presentation.",
    },

    // Slide 12: Call to Action
    {
      type: "cta",
      headline: "Ready to Transform Your Business?",
      subheadline: "Join thousands of companies already using TechVision",
      action: "Schedule a Demo",
      diagonalPattern: "incline-right",
      speakerNotes: "We'd love to show you how TechVision can transform your business operations.",
    },

    // Slide 13: Thank You
    {
      type: "thankYou",
      headline: "Thank You!",
      subheadline: "Any Questions?",
      contactInfo: [
        "info@techvision.com",
        "linkedin.com/company/techvision",
        "+1 (555) 123-4567",
      ],
      diagonalPattern: "none",
      speakerNotes: "Thank you for your time. I'm happy to answer any questions you may have.",
    },
  ],
};
