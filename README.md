# LinkedIn Carousel Generator

A production-ready template for generating high-quality LinkedIn carousels using Remotion and React. Optimized for "One Person Company" branding.

## Features

-   **Dynamic Carousel Generation**: Create multi-slide carousels programmatically.
-   **Specialized Slide Types**:
    -   **Hooks**: Engaging opening slides.
    -   **Lists & Heavy Lists**: Structured content presentation.
    -   **Charts**: Bar, Line, and Pie charts powered by Recharts (customized for static rendering).
    -   **Quotes, Stats, Insights**: Componentized visual layouts.
    -   **Two Column/Row**: Flexible image and text layouts.
-   **Production Ready**: Stable, tested, and optimized for content creation workflows.
-   **Server-Side Rendering**: Built-in server for on-demand generation.

## Quick Start

1.  **Install Dependencies**
    ```bash
    pnpm install
    ```

2.  **Start Preview Server**
    ```bash
    npm run dev
    ```

3.  **Render Images**
    ```bash
    npx remotion render
    ```

## Project Structure

-   `src/templates/carousel`: Core logic for carousel generation.
-   `src/components/content`: Reusable slide content components (Charts, Lists, etc.).
-   `src/examples/carousels`: Configuration files for your carousels. Add new content here.
-   `src/styles/themes.ts`: Design system definitions (Typography, Spacing, Colors).

## Creating Content

To create a new carousel, add a config file in `src/examples/carousels/` and register it in `src/Root.tsx`.

Example config:
```typescript
const myCarousel = {
  id: "my-new-post",
  brandName: "OPC.AI",
  slides: [
    { type: "hook", headlineTop: "My New", headlineHighlight: "Post" },
    { type: "barChart", title: "Growth", data: [...] },
    { type: "cta", action: "Follow for more" }
  ]
};
```

## Legacy / Archived

-   **Presentation Mode**: The experimental presentation logic has been moved to `scratch/` to keep the main codebase clean and focused on carousels.
-   **Theme System**: The multi-theme system has been archived to `scratch/` in favor of a unified brand identity.

## License

Based on the Remotion Still Image template. Check Remotion's license for commercial use.