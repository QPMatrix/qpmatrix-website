// Font Families
export const FONT_FAMILIES = {
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  mono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace',
  serif: '"Times New Roman", Times, serif',
} as const;

// Font Sizes
export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
} as const;

// Heading Sizes
export const HEADING_SIZES = {
  h1: 38,
  h2: 30,
  h3: 24,
  h4: 20,
  h5: 16,
  h6: 14,
} as const;

// Line Heights
export const LINE_HEIGHTS = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
  // Specific heading line heights
  heading1: 1.2,
  heading2: 1.267,
  heading3: 1.333,
  heading4: 1.4,
  heading5: 1.5,
  heading6: 1.571,
} as const;

// Font Weights
export const FONT_WEIGHTS = {
  thin: 100,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;