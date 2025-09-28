import { StyleProvider, createCache } from "@ant-design/cssinjs";
import { useStore } from "@tanstack/react-store";
import { App, ConfigProvider } from "antd";
import { type FC, useEffect, useMemo } from "react";
import { createThemeConfig } from "./core/config";
import { themeActions, themeSelectors, themeStore } from "./store/theme-store";

// Create cache for SSR - recreate on theme change
const cache = createCache();

interface ThemeProviderProps {
	children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const { isDark, isLoading } = useStore(themeStore, (state) => ({
		isDark: themeSelectors.isDark(state),
		isLoading: themeSelectors.isLoading(state),
	}));

	// Initialize theme on mount
	useEffect(() => {
		themeActions.initializeTheme();
	}, []);

	// Recreate cache when theme changes to ensure proper style application
	// biome-ignore lint/correctness/useExhaustiveDependencies: We intentionally recreate cache on theme change
	const currentCache = useMemo(() => {
		return createCache();
	}, [isDark]);

	// Create theme config
	const themeConfig = useMemo(() => createThemeConfig(isDark), [isDark]);

	// Don't render until theme is initialized
	if (isLoading) {
		return null;
	}

	return (
		<StyleProvider cache={currentCache}>
			<ConfigProvider theme={themeConfig}>
				<App>{children}</App>
			</ConfigProvider>
		</StyleProvider>
	);
};

// Export a function to get current cache for SSR
export const getCache = () => cache;

// Custom hook to use theme actions
export const useTheme = () => ({
	isDark: useStore(themeStore, themeSelectors.isDark),
	isLoading: useStore(themeStore, themeSelectors.isLoading),
	theme: useStore(themeStore, themeSelectors.theme),
	toggleTheme: themeActions.toggleTheme,
	setTheme: themeActions.setTheme,
});
