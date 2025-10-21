#!/usr/bin/env node

/**
 * Quick test script to render slides with different themes
 * Run with: node test-themes.js
 */

const { execSync } = require('child_process');
const fs = require('fs');

// Create output directory
if (!fs.existsSync('test-output')) {
  fs.mkdirSync('test-output');
}

const themes = ['dark', 'cream', 'blue', 'purple', 'green'];

const testSlides = [
  {
    type: 'hook',
    headlineTop: 'Modern AI',
    headlineHighlight: 'Solutions',
    showStats: true,
    statValue: '10x',
    statLabel: 'Performance Boost'
  },
  {
    type: 'tip',
    number: '01',
    title: 'Optimize Your Workflow',
    description: 'Leverage cutting-edge AI to streamline your processes and boost productivity.',
  },
  {
    type: 'cta',
    headline: 'Ready to Transform?',
    subheadline: 'Join thousands of professionals already using our platform',
    action: 'Get Started Today'
  }
];

console.log('🎨 Testing LinkedIn Carousel Themes...\n');

themes.forEach((theme, themeIndex) => {
  console.log(`Testing theme: ${theme}`);
  
  testSlides.forEach((slide, slideIndex) => {
    const config = {
      id: `test-${theme}`,
      theme: theme,
      brandName: 'Test Brand',
      tagline: 'AI Solutions',
      website: '@testbrand',
      profileInitials: 'TB',
      showSlideNumbers: true,
      slides: [slide]
    };

    const props = JSON.stringify({
      inputProps: {
        config: config,
        slideIndex: 0
      }
    });

    const outputFile = `test-output/${theme}-${slide.type}-slide.png`;
    
    try {
      const command = `npx remotion still carousel-slide "${outputFile}" --props='${props}' --height=1080 --width=1080`;
      execSync(command, { stdio: 'pipe' });
      console.log(`  ✅ Generated: ${outputFile}`);
    } catch (error) {
      console.log(`  ❌ Failed: ${outputFile}`);
      console.log(`  Error: ${error.message.split('\n')[0]}`);
    }
  });
  console.log('');
});

console.log('🎉 Theme testing complete! Check the test-output/ directory.');
console.log('\n💡 Tips:');
console.log('- Compare the old vs new design');
console.log('- Test with different profile images');
console.log('- Try longer text to test typography');
console.log('- Check readability on different backgrounds');