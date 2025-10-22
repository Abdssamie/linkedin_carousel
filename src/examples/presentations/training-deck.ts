import { PresentationConfig } from "../../types/presentation";

/**
 * Training Deck Presentation
 * Educational presentation for instructor-led training sessions
 * 8 slides covering learning objectives, content, and practice exercises
 */
export const trainingDeckPresentation: PresentationConfig = {
  id: "training-deck",
  format: "presentation",
  theme: "dark",
  brandName: "Training Academy",
  tagline: "Modern Development Practices",
  website: "academy.example.com",
  profileInitials: "TA",
  showPageNumbers: true,
  slides: [
    // Slide 1: Welcome and introduction
    {
      type: "hook",
      headlineTop: "Master",
      headlineHighlight: "Modern Development",
      showStats: true,
      statValue: "3 Days",
      statLabel: "Intensive Training",
      diagonalPattern: "incline-left",
      imagePath: "portrait.jpg",
      imagePosition: "right",
      speakerNotes: "Welcome participants and set expectations for the training. Introduce yourself and your background. Ask participants to introduce themselves briefly.",
    },
    // Slide 3: Prerequisites and setup
    {
      type: "tip",
      number: "01",
      title: "Before We Begin",
      description: "Ensure you have Node.js 18+, VS Code, and Git installed. Clone the starter repository and run npm install.",
      diagonalPattern: "right",
      imagePath: "square.jpg",
      imagePosition: "left",
      speakerNotes: "Check that everyone has completed the setup. Troubleshoot any installation issues. Share the repository link in chat.",
    },
    // Slide 4: Timeline/Schedule
    {
      type: "timeline",
      title: "Training Schedule",
      steps: [
        { label: "Day 1", description: "TypeScript & React Basics" },
        { label: "Day 2", description: "Advanced Patterns & Testing" },
        { label: "Day 3", description: "Deployment & Best Practices" },
      ],
      orientation: "vertical",
      diagonalPattern: "none",
      speakerNotes: "Walk through the schedule. Mention break times and lunch. Emphasize that we'll adjust pace based on group needs.",
    },
    // Slide 5: Key concept explanation
    {
      type: "insight",
      title: "Component-Driven Development",
      content: "Building applications from small, reusable components creates maintainable code that scales. Each component has a single responsibility and clear interface.",
      highlight: "Single Responsibility Principle",
      diagonalPattern: "left",
      imagePath: "landscape.jpg",
      imagePosition: "right",
      speakerNotes: "Explain the benefits of component-driven development. Show examples from popular libraries. Discuss how this relates to their current projects.",
    },
    // Slide 7: Interactive question
    {
      type: "question",
      question: "What's your biggest challenge with testing?",
      options: [
        "Writing meaningful tests",
        "Mocking dependencies",
        "Test coverage goals",
        "Integration vs unit tests",
      ],
      callToAction: "Share in chat!",
      diagonalPattern: "incline-left",
      speakerNotes: "Pause for discussion. Address the most common challenges mentioned. Tailor the testing section based on their responses.",
    },
    // Slide 8: Closing and next steps
    {
      type: "cta",
      headline: "Ready to Build Something Amazing?",
      subheadline: "Let's start with our first hands-on exercise",
      action: "Open Your IDE",
      diagonalPattern: "left",
      speakerNotes: "Transition to the hands-on portion. Share the exercise instructions. Remind them to ask questions as they work. Mention you'll be walking around to help.",
    },
  ],
};
