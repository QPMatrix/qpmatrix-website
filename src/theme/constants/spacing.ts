// Base spacing unit (4px)
const BASE_UNIT = 4;

// Spacing Scale
export const SPACING = {
  0: 0,
  1: BASE_UNIT * 1,      // 4px
  2: BASE_UNIT * 2,      // 8px
  3: BASE_UNIT * 3,      // 12px
  4: BASE_UNIT * 4,      // 16px
  5: BASE_UNIT * 5,      // 20px
  6: BASE_UNIT * 6,      // 24px
  8: BASE_UNIT * 8,      // 32px
  10: BASE_UNIT * 10,    // 40px
  12: BASE_UNIT * 12,    // 48px
  16: BASE_UNIT * 16,    // 64px
  20: BASE_UNIT * 20,    // 80px
  24: BASE_UNIT * 24,    // 96px
  32: BASE_UNIT * 32,    // 128px
} as const;

// Semantic Spacing
export const MARGIN = {
  xs: SPACING[2],      // 8px
  sm: SPACING[3],      // 12px
  md: SPACING[4],      // 16px
  lg: SPACING[6],      // 24px
  xl: SPACING[8],      // 32px
  xxl: SPACING[12],    // 48px
} as const;

export const PADDING = {
  xs: SPACING[2],      // 8px
  sm: SPACING[3],      // 12px
  md: SPACING[4],      // 16px
  lg: SPACING[6],      // 24px
  xl: SPACING[8],      // 32px
  xxl: SPACING[12],    // 48px
} as const;

// Component Specific Spacing
export const COMPONENT_SPACING = {
  button: {
    padding: SPACING[3],
    paddingLarge: SPACING[4],
    paddingSmall: SPACING[2],
  },
  input: {
    padding: SPACING[3],
    paddingLarge: SPACING[4],
    paddingSmall: SPACING[2],
  },
  card: {
    padding: SPACING[6],
    paddingSmall: SPACING[4],
    paddingLarge: SPACING[8],
  },
  modal: {
    padding: SPACING[6],
    margin: SPACING[4],
  },
  drawer: {
    padding: SPACING[6],
  },
} as const;