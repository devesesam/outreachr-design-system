# Outreachr Design System

Shared design tokens and styles for all Outreachr properties (landing page, demo site, and portal).

## Installation

Install as a git dependency:

```bash
npm install github:devesesam/outreachr-design-system
```

## Usage

### In your CSS

Import the design system styles in your main CSS file (e.g., `src/index.css`):

```css
@import '@outreachr/design-system';
```

### In Tailwind Config

Extend from the shared Tailwind configuration:

```js
// tailwind.config.js
import baseConfig from '@outreachr/design-system/tailwind.config.js'

export default {
  ...baseConfig,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Your custom theme extensions here
}
```

## Design Tokens

### Brand Colors

Extracted from the Outreachr logo:

- **Primary**: `#2B7FFF` (bright blue from logo icon)
- **Primary Hover**: `#1E6DE6` (darker blue for interactions)
- **Primary Light**: `#EBF4FF` (light blue backgrounds)
- **Primary Border**: `#A0CDFF` (light blue borders)
- **Dark**: `#3B4F6B` (dark blue from logo background)

### CSS Custom Properties

Available custom properties:

```css
var(--color-primary)        /* #2B7FFF */
var(--color-primary-hover)  /* #1E6DE6 */
var(--color-primary-light)  /* #EBF4FF */
var(--color-primary-border) /* #A0CDFF */
var(--color-dark)           /* #3B4F6B */

/* Spacing */
var(--spacing-xs)  /* 0.5rem */
var(--spacing-sm)  /* 0.75rem */
var(--spacing-md)  /* 1rem */
var(--spacing-lg)  /* 1.5rem */
var(--spacing-xl)  /* 2rem */

/* Border Radius */
var(--radius-sm)   /* 0.375rem */
var(--radius-md)   /* 0.5rem */
var(--radius-lg)   /* 0.75rem */
var(--radius-full) /* 9999px */

/* Shadows */
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)
```

### Tailwind Classes

The Tailwind config extends with these classes:

- `bg-primary`, `text-primary`, `border-primary`
- `bg-primary-hover`, `text-primary-hover`
- `bg-primary-light`, `text-primary-light`
- `border-primary-border`

### Shared Animations

- `animate-scroll` - Horizontal scrolling animation
- `animate-rainbow-scroll` - Rainbow gradient scroll effect

## Updating

To update to the latest version in your project:

```bash
npm update @outreachr/design-system
```

## Projects Using This

- [outreachr.ai](https://outreachr.ai) - Landing page
- [demo.outreachr.ai](https://demo.outreachr.ai) - Interactive demo
- [app.outreachr.ai](https://app.outreachr.ai) - User portal