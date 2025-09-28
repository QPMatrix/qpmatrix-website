import { useTheme } from "../ThemeProvider";
import {
	BRAND_COLORS,
	DARK_COLORS,
	LIGHT_COLORS,
	SEMANTIC_COLORS,
	SPACING,
	PADDING,
	MARGIN,
	BORDER_RADIUS,
	FONT_SIZES,
	FONT_WEIGHTS,
	CONTROL_HEIGHTS,
} from "../constants";

/**
 * Your custom theme tokens (not Ant Design's)
 * Uses YOUR theme constants and design system
 */
export interface CustomThemeTokens {
	// Colors from your theme system
	colors: {
		// Brand colors
		primary: string;
		secondary: string;
		accent: string;

		// Semantic colors
		success: string;
		warning: string;
		error: string;
		info: string;

		// Theme-aware colors (change with dark/light mode)
		background: {
			primary: string;
			secondary: string;
			tertiary: string;
			elevated: string;
		};
		surface: {
			primary: string;
			secondary: string;
			tertiary: string;
			hover: string;
		};
		text: {
			primary: string;
			secondary: string;
			tertiary: string;
			disabled: string;
		};
		border: {
			primary: string;
			secondary: string;
			tertiary: string;
		};
	};

	// Your spacing system
	spacing: typeof SPACING;
	padding: typeof PADDING;
	margin: typeof MARGIN;

	// Your typography
	fontSizes: typeof FONT_SIZES;
	fontWeights: typeof FONT_WEIGHTS;

	// Your sizing
	borderRadius: typeof BORDER_RADIUS;
	controlHeights: typeof CONTROL_HEIGHTS;

	// Theme mode
	isDark: boolean;
}

/**
 * Hook that provides YOUR theme tokens (not Ant Design's)
 * Uses your existing theme constants and respects dark/light mode
 *
 * @returns Your custom theme tokens with full autocomplete
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const theme = useThemeTokens();
 *
 *   const styles = {
 *     container: {
 *       backgroundColor: theme.colors.background.primary, // Your colors
 *       padding: theme.padding.lg, // Your spacing
 *       borderRadius: theme.borderRadius.md, // Your border radius
 *     }
 *   };
 * };
 * ```
 */
export function useThemeTokens(): CustomThemeTokens {
	const { isDark } = useTheme();

	// Choose colors based on theme mode
	const themeColors = isDark ? DARK_COLORS : LIGHT_COLORS;

	return {
		colors: {
			// Brand colors (same for both themes)
			primary: BRAND_COLORS.primary,
			secondary: BRAND_COLORS.secondary,
			accent: BRAND_COLORS.accent,

			// Semantic colors
			success: SEMANTIC_COLORS.success[500],
			warning: SEMANTIC_COLORS.warning[500],
			error: SEMANTIC_COLORS.error[500],
			info: SEMANTIC_COLORS.info[500],

			// Theme-aware colors
			background: {
				primary: themeColors.background.primary,
				secondary: themeColors.background.secondary,
				tertiary: themeColors.background.tertiary,
				elevated: themeColors.background.elevated,
			},
			surface: {
				primary: themeColors.surface.primary,
				secondary: themeColors.surface.secondary,
				tertiary: themeColors.surface.tertiary,
				hover: themeColors.surface.hover,
			},
			text: {
				primary: themeColors.text.primary,
				secondary: themeColors.text.secondary,
				tertiary: themeColors.text.tertiary,
				disabled: themeColors.text.disabled,
			},
			border: {
				primary: themeColors.border.primary,
				secondary: themeColors.border.secondary,
				tertiary: themeColors.border.tertiary,
			},
		},

		// Your design system tokens
		spacing: SPACING,
		padding: PADDING,
		margin: MARGIN,
		fontSizes: FONT_SIZES,
		fontWeights: FONT_WEIGHTS,
		borderRadius: BORDER_RADIUS,
		controlHeights: CONTROL_HEIGHTS,

		// Theme state
		isDark,
	};
}