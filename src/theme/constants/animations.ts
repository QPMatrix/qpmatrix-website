// Animation Durations
export const ANIMATION_DURATION = {
  fast: '0.1s',
  normal: '0.2s',
  slow: '0.3s',
  slower: '0.5s',
} as const;

// Easing Functions
export const EASING = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  linear: 'linear',
  // Custom cubic-bezier curves
  standard: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  decelerated: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  accelerated: 'cubic-bezier(0.4, 0.0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
  // Ant Design specific
  antdEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  antdEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  antdEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
} as const;

// Z-Index Scale
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
  // Ant Design specific
  popup: 1000,
  mask: 1000,
  drawer: 1000,
} as const;

// Opacity Values
export const OPACITY = {
  disabled: 0.25,
  loading: 0.65,
  hover: 0.8,
  focus: 0.9,
  full: 1,
} as const;