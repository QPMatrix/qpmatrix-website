// Professional Software Company Brand Colors
export const BRAND_COLORS = {
  primary: '#0066ff',      // Corporate blue - trustworthy, professional
  secondary: '#6366f1',    // Modern indigo - innovation, technology
  accent: '#10b981',       // Success green - growth, automation
  warning: '#f59e0b',      // Amber - attention, important actions
  error: '#ef4444',        // Red - errors, critical alerts
  info: '#06b6d4',         // Cyan - information, neutral actions
  success: '#22c55e',      // Green - success states, confirmations
} as const;

// Professional Neutral Palette
export const NEUTRAL_COLORS = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f8fafc',   // Softest background
    100: '#f1f5f9',  // Light background
    200: '#e2e8f0',  // Subtle borders
    300: '#cbd5e1',  // Light borders
    400: '#94a3b8',  // Muted text
    500: '#64748b',  // Secondary text
    600: '#475569',  // Body text
    700: '#334155',  // Headings
    800: '#1e293b',  // Dark headings
    900: '#0f172a',  // Darkest
    950: '#020617',  // True dark
  },
} as const;

// Professional Dark Theme - Business Software
export const DARK_COLORS = {
  background: {
    primary: '#0f172a',     // Deep navy - professional, easy on eyes
    secondary: '#1e293b',   // Slate - cards, panels
    tertiary: '#334155',    // Lighter slate - elevated surfaces
    elevated: '#1e293b',    // Modal, dropdown backgrounds
  },
  surface: {
    primary: '#1e293b',     // Primary surfaces
    secondary: '#334155',   // Secondary surfaces
    tertiary: '#475569',    // Tertiary surfaces
    hover: '#475569',       // Hover states
  },
  border: {
    primary: '#334155',     // Subtle borders
    secondary: '#475569',   // Medium borders
    tertiary: '#64748b',    // Prominent borders
  },
  text: {
    primary: '#f8fafc',     // Primary text - high contrast
    secondary: '#e2e8f0',   // Secondary text
    tertiary: '#cbd5e1',    // Tertiary text
    disabled: '#64748b',    // Disabled text
  },
} as const;

// Professional Light Theme - Clean Business Look
export const LIGHT_COLORS = {
  background: {
    primary: '#ffffff',     // Pure white - clean, professional
    secondary: '#f8fafc',   // Subtle gray - sections, cards
    tertiary: '#f1f5f9',    // Light gray - elevated surfaces
    elevated: '#ffffff',    // Modal, dropdown backgrounds
  },
  surface: {
    primary: '#ffffff',     // Primary surfaces
    secondary: '#f8fafc',   // Secondary surfaces
    tertiary: '#f1f5f9',    // Tertiary surfaces
    hover: '#f1f5f9',       // Hover states
  },
  border: {
    primary: '#e2e8f0',     // Subtle borders
    secondary: '#cbd5e1',   // Medium borders
    tertiary: '#94a3b8',    // Prominent borders
  },
  text: {
    primary: '#0f172a',     // Primary text - high contrast
    secondary: '#334155',   // Secondary text
    tertiary: '#64748b',    // Tertiary text
    disabled: '#94a3b8',    // Disabled text
  },
} as const;

// Semantic Colors
export const SEMANTIC_COLORS = {
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
  },
  info: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
  },
} as const;