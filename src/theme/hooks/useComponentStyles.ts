import type { CSSObject } from "@ant-design/cssinjs";
import { useStyleRegister } from "@ant-design/cssinjs";
import { theme } from "antd";
import { useBreakpoints, type BreakpointHelpers } from "./useBreakpoints";
import { useThemeTokens, type CustomThemeTokens } from "./useThemeTokens";

const { useToken } = theme;

/**
 * Extended theme that combines YOUR theme tokens with breakpoint helpers
 */
export interface ExtendedTheme extends CustomThemeTokens {
	/** Clean breakpoint utilities using your BREAKPOINTS constants */
	breakpoints: BreakpointHelpers;
}

/**
 * Professional CSS-in-JS hook that uses YOUR theme system
 *
 * - Uses YOUR colors (BRAND_COLORS, DARK_COLORS, LIGHT_COLORS)
 * - Uses YOUR spacing (SPACING, PADDING, MARGIN)
 * - Uses YOUR breakpoints (BREAKPOINTS)
 * - Uses YOUR typography (FONT_SIZES, FONT_WEIGHTS)
 * - Integrates with Ant Design's CSS-in-JS engine for performance
 *
 * @template T - Shape of your style object (inferred automatically)
 * @param componentName - Unique name for your component
 * @param stylesFactory - Function that receives your theme and returns styles
 * @returns Object with typed className strings
 *
 * @example
 * ```tsx
 * const useCardStyles = () => {
 *   return useComponentStyles('Card', (theme) => ({
 *     container: {
 *       // Use YOUR theme colors
 *       backgroundColor: theme.colors.background.primary,
 *       color: theme.colors.text.primary,
 *
 *       // Use YOUR spacing
 *       padding: theme.padding.lg,
 *       margin: theme.margin.md,
 *
 *       // Use YOUR breakpoints
 *       [theme.breakpoints.down.sm]: {
 *         padding: theme.padding.sm,
 *       },
 *
 *       // Use YOUR border radius
 *       borderRadius: theme.borderRadius.lg,
 *     },
 *   }));
 * };
 * ```
 */
export function useComponentStyles<T extends Record<string, CSSObject>>(
	componentName: string,
	stylesFactory: (theme: ExtendedTheme) => T,
): Record<keyof T, string> {
	// Get Ant Design's CSS-in-JS utilities (for performance only)
	const { theme: antTheme, token, hashId } = useToken();

	// Get YOUR theme tokens and breakpoints
	const themeTokens = useThemeTokens();
	const breakpoints = useBreakpoints();

	// Combine your theme with breakpoint helpers
	const extendedTheme: ExtendedTheme = {
		...themeTokens,
		breakpoints,
	};

	// Register styles with Ant Design's CSS-in-JS engine for performance
	useStyleRegister(
		{
			theme: antTheme,
			token,
			hashId,
			path: [componentName, "custom-styles"],
		},
		() => {
			const styles = stylesFactory(extendedTheme);
			const processedStyles: Record<string, CSSObject> = {};

			// Process each style key and add hashId for CSS scoping
			for (const key of Object.keys(styles)) {
				const className = `.${componentName.toLowerCase()}-${key}${hashId}`;
				processedStyles[className] = styles[key];
			}

			return processedStyles;
		},
	);

	// Return typed className strings for component usage
	const classNames = {} as Record<keyof T, string>;
	for (const key of Object.keys(stylesFactory(extendedTheme)) as Array<keyof T>) {
		classNames[key] = `${componentName.toLowerCase()}-${String(key)}${hashId}`;
	}

	return classNames;
}