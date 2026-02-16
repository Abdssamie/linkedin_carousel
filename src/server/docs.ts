/**
 * Documentation page generator for the LinkedIn Post API
 * Serves a static HTML page with all composition info and examples
 */

export const generateDocumentationHTML = (baseUrl: string): string => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LinkedIn Post API Documentation</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
      padding: 20px;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    h1 {
      color: #1a1a1a;
      margin-bottom: 10px;
      font-size: 2.5em;
    }
    
    h2 {
      color: #2c2c2c;
      margin-top: 40px;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e0e0e0;
    }
    
    h3 {
      color: #444;
      margin-top: 30px;
      margin-bottom: 15px;
    }
    
    h4 {
      color: #555;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #666;
      font-size: 1.1em;
      margin-bottom: 30px;
    }
    
    .endpoint {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 6px;
      margin: 15px 0;
      border-left: 4px solid #007bff;
    }
    
    .endpoint code {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 0.95em;
      color: #d63384;
    }
    
    .method {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 0.85em;
      font-weight: bold;
      margin-right: 10px;
    }
    
    .method.get {
      background: #28a745;
      color: white;
    }
    
    pre {
      background: #1e1e1e;
      color: #d4d4d4;
      padding: 20px;
      border-radius: 6px;
      overflow-x: auto;
      margin: 15px 0;
      position: relative;
    }
    
    pre code {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 0.9em;
      line-height: 1.5;
    }
    
    .copy-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #007bff;
      color: white;
      border: none;
      padding: 5px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85em;
      opacity: 0.8;
      transition: opacity 0.2s;
    }
    
    .copy-btn:hover {
      opacity: 1;
    }
    
    .composition-card {
      background: #f8f9fa;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    
    .composition-card h3 {
      margin-top: 0;
      color: #007bff;
    }
    
    .dimensions {
      display: inline-block;
      background: #e3f2fd;
      color: #1976d2;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 0.9em;
      margin: 10px 0;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    
    th, td {
      text-align: left;
      padding: 12px;
      border-bottom: 1px solid #e0e0e0;
    }
    
    th {
      background: #f8f9fa;
      font-weight: 600;
      color: #555;
    }
    
    .required {
      color: #dc3545;
      font-weight: bold;
    }
    
    .optional {
      color: #6c757d;
    }
    
    .type {
      color: #0066cc;
      font-family: monospace;
      font-size: 0.9em;
    }
    
    .badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.75em;
      font-weight: bold;
      margin-left: 8px;
    }
    
    .badge.carousel {
      background: #e3f2fd;
      color: #1976d2;
    }
    
    .badge.presentation {
      background: #f3e5f5;
      color: #7b1fa2;
    }
    
    .note {
      background: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
    }
    
    .info {
      background: #d1ecf1;
      border-left: 4px solid #17a2b8;
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
    }
    
    .content-type-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 15px;
      margin: 20px 0;
    }
    
    .content-type-card {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #e0e0e0;
    }
    
    .content-type-card h4 {
      margin-top: 0;
      color: #007bff;
      text-transform: capitalize;
    }
    
    ul, ol {
      margin: 10px 0 10px 20px;
    }
    
    li {
      margin: 5px 0;
    }
    
    .example-link {
      display: inline-block;
      background: #007bff;
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      text-decoration: none;
      margin: 10px 5px 10px 0;
      font-size: 0.9em;
    }
    
    .example-link:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>LinkedIn Post API</h1>
    <p class="subtitle">Generate LinkedIn carousels and presentation slides programmatically</p>
    
    <div class="info">
      <strong>Base URL:</strong> <code>${baseUrl}</code>
    </div>

    <h2>Quick Start</h2>
    
    <h3>1. PreviewCard (Simple Template)</h3>
    <div class="endpoint">
      <span class="method get">GET</span>
      <code>/PreviewCard.png?title=Hello&description=World&color=%230B84F3</code>
    </div>
    <pre><code>curl "${baseUrl}/PreviewCard.png?title=Hello%20World&description=This%20is%20a%20test&color=%230B84F3" \
  --output preview.png</code><button class="copy-btn" onclick="copyToClipboard(this)">Copy</button></pre>
    <a class="example-link" href="/PreviewCard.png?title=Hello%20World&description=This%20is%20a%20test&color=%230B84F3" target="_blank">Try it →</a>

    <h3>2. Carousel Slide</h3>
    <div class="endpoint">
      <span class="method get">GET</span>
      <code>/carousel-slide.png?config=JSON&slideIndex=0</code>
    </div>
    <pre><code>curl "${baseUrl}/carousel-slide.png?config=%7B%22id%22%3A%22demo%22%2C%22brandName%22%3A%22MyBrand%22%2C%22website%22%3A%22%40mybrand%22%2C%22slides%22%3A%5B%7B%22type%22%3A%22hook%22%2C%22headlineTop%22%3A%22Welcome%20to%22%2C%22headlineHighlight%22%3A%22My%20Carousel%22%7D%5D%7D&slideIndex=0" \
  --output carousel.png</code><button class="copy-btn" onclick="copyToClipboard(this)">Copy</button></pre>

    <h3>3. Presentation Slide</h3>
    <div class="endpoint">
      <span class="method get">GET</span>
      <code>/presentation-slide.png?config=JSON&slideIndex=0</code>
    </div>
    <pre><code>curl "${baseUrl}/presentation-slide.png?config=%7B%22id%22%3A%22demo%22%2C%22brandName%22%3A%22MyBrand%22%2C%22website%22%3A%22%40mybrand%22%2C%22format%22%3A%22presentation%22%2C%22slides%22%3A%5B%7B%22type%22%3A%22hook%22%2C%22headlineTop%22%3A%22Welcome%22%2C%22headlineHighlight%22%3A%22To%20Our%20Pitch%22%7D%5D%7D&slideIndex=0" \
  --output presentation.png</code><button class="copy-btn" onclick="copyToClipboard(this)">Copy</button></pre>

    <h2>Available Compositions</h2>

    <div class="composition-card">
      <h3>PreviewCard</h3>
      <span class="dimensions">1200 × 627 px</span>
      <p>Simple preview card template with title, description, and customizable color.</p>
      
      <h4>Configuration:</h4>
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><code>title</code></td>
          <td class="type">string</td>
          <td class="required">Yes</td>
          <td>Main title text</td>
        </tr>
        <tr>
          <td><code>description</code></td>
          <td class="type">string</td>
          <td class="required">Yes</td>
          <td>Subtitle/description</td>
        </tr>
        <tr>
          <td><code>color</code></td>
          <td class="type">string</td>
          <td class="optional">No</td>
          <td>Accent color (hex, e.g., #0B84F3)</td>
        </tr>
      </table>
    </div>

    <div class="composition-card">
      <h3>carousel-slide <span class="badge carousel">Carousel</span></h3>
      <span class="dimensions">1080 × 1080 px (1:1)</span>
      <p>Dynamic carousel slide renderer for Instagram/LinkedIn posts. Supports 14 content types.</p>
      
      <h4>Configuration:</h4>
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><code>config.id</code></td>
          <td class="type">string</td>
          <td class="required">Yes</td>
          <td>Unique identifier (kebab-case)</td>
        </tr>
        <tr>
          <td><code>config.brandName</code></td>
          <td class="type">string</td>
          <td class="required">Yes</td>
          <td>Brand name shown in header</td>
        </tr>
        <tr>
          <td><code>config.website</code></td>
          <td class="type">string</td>
          <td class="required">Yes</td>
          <td>Website/handle shown in footer</td>
        </tr>
        <tr>
          <td><code>config.tagline</code></td>
          <td class="type">string</td>
          <td class="optional">No</td>
          <td>Optional tagline in header</td>
        </tr>
        <tr>
          <td><code>config.profileInitials</code></td>
          <td class="type">string</td>
          <td class="optional">No</td>
          <td>Profile initials (default: "AS")</td>
        </tr>
        <tr>
          <td><code>config.slides</code></td>
          <td class="type">array</td>
          <td class="required">Yes</td>
          <td>Array of slide configs (2-20 slides)</td>
        </tr>
        <tr>
          <td><code>slideIndex</code></td>
          <td class="type">number</td>
          <td class="required">Yes</td>
          <td>Which slide to render (0-based)</td>
        </tr>
      </table>
    </div>

    <div class="composition-card">
      <h3>presentation-slide <span class="badge presentation">Presentation</span></h3>
      <span class="dimensions">1920 × 1080 px (16:9)</span>
      <p>Presentation slide renderer with diagonal geometric layouts. Supports 18 content types including presentation-specific ones.</p>
      
      <h4>Configuration:</h4>
      <p>Same as carousel-slide, plus:</p>
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><code>config.format</code></td>
          <td class="type">string</td>
          <td class="required">Yes</td>
          <td>Must be "presentation"</td>
        </tr>
        <tr>
          <td><code>config.slides</code></td>
          <td class="type">array</td>
          <td class="required">Yes</td>
          <td>2-50 slides</td>
        </tr>
      </table>
    </div>

    <h2>Content Types</h2>
    
    <h3>Shared (Carousel & Presentation)</h3>
    <div class="content-type-grid">
      <div class="content-type-card">
        <h4>hook</h4>
        <p>Opening/title slide</p>
        <ul>
          <li><code>headlineTop</code> (required)</li>
          <li><code>headlineHighlight</code> (required)</li>
          <li><code>showStats</code> (optional)</li>
          <li><code>statValue</code> (optional)</li>
          <li><code>statLabel</code> (optional)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>tip</h4>
        <p>Tips, steps, key points</p>
        <ul>
          <li><code>number</code> (optional)</li>
          <li><code>title</code> (required)</li>
          <li><code>description</code> (optional)</li>
          <li><code>showQuotes</code> (optional)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>insight</h4>
        <p>Personal stories, case studies</p>
        <ul>
          <li><code>title</code> (required)</li>
          <li><code>content</code> (required)</li>
          <li><code>highlight</code> (optional)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>cta</h4>
        <p>Call-to-action</p>
        <ul>
          <li><code>headline</code> (required)</li>
          <li><code>subheadline</code> (optional)</li>
          <li><code>action</code> (required)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>quote</h4>
        <p>Testimonials, quotes</p>
        <ul>
          <li><code>quote</code> (required)</li>
          <li><code>author</code> (required)</li>
          <li><code>role</code> (optional)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>stat</h4>
        <p>Data-driven content</p>
        <ul>
          <li><code>stat</code> (required)</li>
          <li><code>label</code> (required)</li>
          <li><code>context</code> (optional)</li>
          <li><code>source</code> (optional)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>list</h4>
        <p>Bullet points or checklist</p>
        <ul>
          <li><code>title</code> (required)</li>
          <li><code>items</code> (required, array)</li>
          <li><code>useCheckmarks</code> (optional)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>heavyList</h4>
        <p>Text-heavy list</p>
        <ul>
          <li><code>title</code> (required)</li>
          <li><code>description</code> (required)</li>
          <li><code>items</code> (required, array)</li>
          <li><code>useCheckmarks</code> (optional)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>comparison</h4>
        <p>Before/After or side-by-side</p>
        <ul>
          <li><code>leftLabel</code> (required)</li>
          <li><code>leftContent</code> (required)</li>
          <li><code>rightLabel</code> (required)</li>
          <li><code>rightContent</code> (required)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>question</h4>
        <p>Engagement question</p>
        <ul>
          <li><code>question</code> (required)</li>
          <li><code>options</code> (optional, array)</li>
          <li><code>callToAction</code> (optional)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>timeline</h4>
        <p>Process steps or timeline</p>
        <ul>
          <li><code>title</code> (optional)</li>
          <li><code>steps</code> (required, array)</li>
          <li><code>orientation</code> (optional: "vertical" | "horizontal")</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>staticImage</h4>
        <p>Full-screen image</p>
        <ul>
          <li><code>imagePath</code> (required)</li>
          <li><code>fit</code> (optional: "cover" | "contain" | "fill")</li>
          <li><code>position</code> (optional)</li>
          <li><code>hideDecorations</code> (optional)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>twoColumn</h4>
        <p>Image + text side by side</p>
        <ul>
          <li><code>imagePath</code> (required)</li>
          <li><code>title</code> (required)</li>
          <li><code>content</code> (required)</li>
          <li><code>bulletPoints</code> (optional, array)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>twoRow</h4>
        <p>Image + text stacked</p>
        <ul>
          <li><code>imagePath</code> (required)</li>
          <li><code>imagePosition</code> (optional: "top" | "bottom")</li>
          <li><code>title</code> (required)</li>
          <li><code>content</code> (required)</li>
          <li><code>bulletPoints</code> (optional, array)</li>
        </ul>
      </div>
    </div>

    <h3>Presentation-Only</h3>
    <div class="content-type-grid">
      <div class="content-type-card">
        <h4>agenda</h4>
        <p>Meeting agenda</p>
        <ul>
          <li><code>title</code> (optional)</li>
          <li><code>items</code> (required, array of {title, duration})</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>keyTakeaway</h4>
        <p>Summary slide</p>
        <ul>
          <li><code>title</code> (optional)</li>
          <li><code>takeaways</code> (required, array)</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>team</h4>
        <p>Team introduction</p>
        <ul>
          <li><code>title</code> (optional)</li>
          <li><code>members</code> (required, array of {name, role, initials})</li>
        </ul>
      </div>
      
      <div class="content-type-card">
        <h4>thankYou</h4>
        <p>Closing slide</p>
        <ul>
          <li><code>headline</code> (optional)</li>
          <li><code>subheadline</code> (optional)</li>
          <li><code>contactInfo</code> (optional, array)</li>
        </ul>
      </div>
    </div>

    <h2>Complete Examples</h2>

    <h3>Full Carousel Configuration</h3>
    <pre><code>{
  "id": "ai-tips",
  "brandName": "TechTips",
  "website": "@techtips",
  "profileInitials": "TT",
  "slides": [
    {
      "type": "hook",
      "headlineTop": "5 AI Tips",
      "headlineHighlight": "That Work",
      "showStats": true,
      "statValue": "10x",
      "statLabel": "Productivity"
    },
    {
      "type": "tip",
      "number": "01",
      "title": "Automate Email",
      "description": "Save 10 hours per week",
      "showQuotes": true
    },
    {
      "type": "list",
      "title": "Benefits",
      "items": ["Faster", "Cheaper", "Better"],
      "useCheckmarks": true
    },
    {
      "type": "cta",
      "headline": "Ready to Start?",
      "subheadline": "Join thousands of professionals",
      "action": "Follow for More"
    }
  ]
}</code><button class="copy-btn" onclick="copyToClipboard(this)">Copy</button></pre>

    <h4>Curl Request:</h4>
    <pre><code># URL-encode the JSON and make request
curl "${baseUrl}/carousel-slide.png?config=%7B%22id%22%3A%22ai-tips%22%2C%22brandName%22%3A%22TechTips%22%2C%22website%22%3A%22%40techtips%22%2C%22slides%22%3A%5B%7B%22type%22%3A%22hook%22%2C%22headlineTop%22%3A%225%20AI%20Tips%22%2C%22headlineHighlight%22%3A%22That%20Work%22%7D%2C%7B%22type%22%3A%22tip%22%2C%22number%22%3A%2201%22%2C%22title%22%3A%22Automate%20Email%22%7D%5D%7D&slideIndex=0" \
  --output slide-1.png

# Slide 2
curl "${baseUrl}/carousel-slide.png?config=%7B%22id%22%3A%22ai-tips%22%2C%22brandName%22%3A%22TechTips%22%2C%22website%22%3A%22%40techtips%22%2C%22slides%22%3A%5B%7B%22type%22%3A%22hook%22%2C%22headlineTop%22%3A%225%20AI%20Tips%22%2C%22headlineHighlight%22%3A%22That%20Work%22%7D%2C%7B%22type%22%3A%22tip%22%2C%22number%22%3A%2201%22%2C%22title%22%3A%22Automate%20Email%22%7D%5D%7D&slideIndex=1" \
  --output slide-2.png</code><button class="copy-btn" onclick="copyToClipboard(this)">Copy</button></pre>

    <h3>Full Presentation Configuration</h3>
    <pre><code>{
  "id": "business-pitch",
  "format": "presentation",
  "brandName": "StartupX",
  "website": "startupx.com",
  "slides": [
    {
      "type": "hook",
      "headlineTop": "Welcome to",
      "headlineHighlight": "StartupX",
      "speakerNotes": "Introduce the company vision"
    },
    {
      "type": "agenda",
      "title": "Today's Agenda",
      "items": [
        { "title": "Problem", "duration": "5 min" },
        { "title": "Solution", "duration": "10 min" },
        { "title": "Demo", "duration": "15 min" }
      ]
    },
    {
      "type": "team",
      "title": "Our Team",
      "members": [
        { "name": "John Doe", "role": "CEO", "initials": "JD" },
        { "name": "Jane Smith", "role": "CTO", "initials": "JS" }
      ]
    },
    {
      "type": "thankYou",
      "headline": "Thank You",
      "subheadline": "Questions?",
      "contactInfo": ["hello@startupx.com", "@startupx"]
    }
  ]
}</code><button class="copy-btn" onclick="copyToClipboard(this)">Copy</button></pre>

    <h4>Curl Request:</h4>
    <pre><code># Render each slide (change slideIndex for each)
curl "${baseUrl}/presentation-slide.png?config=%7B%22id%22%3A%22pitch%22%2C%22format%22%3A%22presentation%22%2C%22brandName%22%3A%22StartupX%22%2C%22website%22%3A%22startupx.com%22%2C%22slides%22%3A%5B%7B%22type%22%3A%22hook%22%2C%22headlineTop%22%3A%22Welcome%22%2C%22headlineHighlight%22%3A%22StartupX%22%7D%2C%7B%22type%22%3A%22agenda%22%2C%22title%22%3A%22Agenda%22%2C%22items%22%3A%5B%7B%22title%22%3A%22Problem%22%7D%5D%7D%5D%7D&slideIndex=0" \
  --output slide-1.png</code><button class="copy-btn" onclick="copyToClipboard(this)">Copy</button></pre>

    <h2>Rate Limiting & Authentication</h2>
    <div class="note">
      <strong>Rate Limit:</strong> 20 requests per minute per IP address.<br>
      <strong>Authentication:</strong> Requires Bearer token in Authorization header.<br>
      <strong>Example:</strong> <code>Authorization: Bearer YOUR_API_KEY</code>
    </div>

    <h2>Tips</h2>
    <ul>
      <li>Always URL-encode your JSON config when passing as a query parameter</li>
      <li>Use <code>slideIndex</code> to render specific slides from a multi-slide config</li>
      <li>Images are cached by hash - identical requests return cached results instantly</li>
      <li>Supported formats: <code>png</code>, <code>jpg</code>, <code>jpeg</code></li>
      <li>Carousel slides: 1080x1080, Presentation slides: 1920x1080</li>
    </ul>
  </div>

  <script>
    function copyToClipboard(button) {
      const pre = button.parentElement;
      const code = pre.querySelector('code');
      const text = code.innerText;
      
      navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        button.style.background = '#28a745';
        
        setTimeout(() => {
          button.innerText = originalText;
          button.style.background = '#007bff';
        }, 2000);
      });
    }
  </script>
</body>
</html>`;
};
