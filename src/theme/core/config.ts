import { theme } from "antd";
import { createComponentThemes } from "./components";
import { createThemeTokens } from "./tokens";

const { darkAlgorithm, defaultAlgorithm } = theme;

/**
 * Create comprehensive Ant Design theme configuration
 * @param isDark - Whether to use dark theme
 * @returns Complete theme configuration object
 */
export const createThemeConfig = (isDark: boolean) => {
	const tokens = createThemeTokens(isDark);
	const components = createComponentThemes(isDark);

	return {
		algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
		token: tokens,
		components,
		cssVar: true,
		hashed: false, // Important for SSR consistency
	};
};

// Export theme algorithms for external use
export { darkAlgorithm, defaultAlgorithm };

// Type for theme configuration
export type ThemeConfig = ReturnType<typeof createThemeConfig>;
