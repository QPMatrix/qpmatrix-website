// Main theme exports
export { createThemeConfig, type ThemeConfig } from "./core/config";

// Theme store and provider
export {
	themeActions,
	themeSelectors as themeStateSelectors,
	themeStore,
	type ThemeState,
} from "./store/theme-store";
export { getCache, ThemeProvider, useTheme } from "./ThemeProvider";

// Your theme constants
export {
	BORDER_RADIUS,
	BRAND_COLORS,
	BREAKPOINTS,
	CONTROL_HEIGHTS,
	DARK_COLORS,
	FONT_SIZES,
	FONT_WEIGHTS,
	LIGHT_COLORS,
	MARGIN,
	PADDING,
	SEMANTIC_COLORS,
	SPACING,
} from "./constants";

// Essential utilities
export { pxToRem } from "./utils/px-to-rem";

// Your theme hooks (organized and clean)
export {
	useBreakpoints,
	useComponentStyles,
	useThemeTokens,
	type BreakpointHelpers,
	type CustomThemeTokens,
	type ExtendedTheme,
} from "./hooks";
