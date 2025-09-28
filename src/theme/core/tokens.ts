import {
	ANIMATION_DURATION,
	BORDER_RADIUS,
	BRAND_COLORS,
	BREAKPOINTS,
	CONTROL_HEIGHTS,
	DARK_COLORS,
	EASING,
	FONT_FAMILIES,
	FONT_SIZES,
	FONT_WEIGHTS,
	HEADING_SIZES,
	LIGHT_COLORS,
	LINE_HEIGHTS,
	MARGIN,
	OPACITY,
	PADDING,
	SEMANTIC_COLORS,
	Z_INDEX,
} from "../constants";

// Create theme tokens based on theme mode
export const createThemeTokens = (isDark: boolean) => ({
	// Colors
	colorPrimary: BRAND_COLORS.primary,
	colorSuccess: SEMANTIC_COLORS.success[500],
	colorWarning: SEMANTIC_COLORS.warning[500],
	colorError: SEMANTIC_COLORS.error[500],
	colorInfo: SEMANTIC_COLORS.info[500],

	// Background colors
	colorBgBase: isDark
		? DARK_COLORS.background.primary
		: LIGHT_COLORS.background.primary,
	colorBgContainer: isDark
		? DARK_COLORS.background.secondary
		: LIGHT_COLORS.background.secondary,
	colorBgElevated: isDark
		? DARK_COLORS.background.elevated
		: LIGHT_COLORS.background.elevated,
	colorBgLayout: isDark
		? DARK_COLORS.background.tertiary
		: LIGHT_COLORS.background.tertiary,

	// Text colors
	colorText: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
	colorTextSecondary: isDark
		? DARK_COLORS.text.secondary
		: LIGHT_COLORS.text.secondary,
	colorTextTertiary: isDark
		? DARK_COLORS.text.tertiary
		: LIGHT_COLORS.text.tertiary,
	colorTextDisabled: isDark
		? DARK_COLORS.text.disabled
		: LIGHT_COLORS.text.disabled,

	// Border colors
	colorBorder: isDark
		? DARK_COLORS.border.primary
		: LIGHT_COLORS.border.primary,
	colorBorderSecondary: isDark
		? DARK_COLORS.border.secondary
		: LIGHT_COLORS.border.secondary,

	// Fill colors
	colorFill: isDark
		? DARK_COLORS.surface.primary
		: LIGHT_COLORS.surface.primary,
	colorFillSecondary: isDark
		? DARK_COLORS.surface.secondary
		: LIGHT_COLORS.surface.secondary,
	colorFillTertiary: isDark
		? DARK_COLORS.surface.tertiary
		: LIGHT_COLORS.surface.tertiary,
	colorFillQuaternary: isDark
		? DARK_COLORS.surface.hover
		: LIGHT_COLORS.surface.hover,

	// Layout and spacing
	borderRadius: BORDER_RADIUS.md,
	borderRadiusXS: BORDER_RADIUS.sm,
	borderRadiusSM: BORDER_RADIUS.md,
	borderRadiusLG: BORDER_RADIUS.lg,
	borderRadiusOuter: BORDER_RADIUS.xl,

	// Typography
	fontFamily: FONT_FAMILIES.sans,
	fontFamilyCode: FONT_FAMILIES.mono,
	fontSize: FONT_SIZES.sm,
	fontSizeHeading1: HEADING_SIZES.h1,
	fontSizeHeading2: HEADING_SIZES.h2,
	fontSizeHeading3: HEADING_SIZES.h3,
	fontSizeHeading4: HEADING_SIZES.h4,
	fontSizeHeading5: HEADING_SIZES.h5,
	fontSizeLG: FONT_SIZES.lg,
	fontSizeSM: FONT_SIZES.sm,
	fontSizeXL: FONT_SIZES.xl,

	// Font weights
	fontWeightStrong: FONT_WEIGHTS.semibold,

	// Line heights
	lineHeight: LINE_HEIGHTS.normal,
	lineHeightHeading1: LINE_HEIGHTS.heading1,
	lineHeightHeading2: LINE_HEIGHTS.heading2,
	lineHeightHeading3: LINE_HEIGHTS.heading3,
	lineHeightHeading4: LINE_HEIGHTS.heading4,
	lineHeightHeading5: LINE_HEIGHTS.heading5,
	lineHeightLG: LINE_HEIGHTS.relaxed,
	lineHeightSM: LINE_HEIGHTS.snug,

	// Spacing
	margin: MARGIN.md,
	marginXS: MARGIN.xs,
	marginSM: MARGIN.sm,
	marginMD: MARGIN.md,
	marginLG: MARGIN.lg,
	marginXL: MARGIN.xl,
	marginXXL: MARGIN.xxl,

	padding: PADDING.md,
	paddingXS: PADDING.xs,
	paddingSM: PADDING.sm,
	paddingMD: PADDING.md,
	paddingLG: PADDING.lg,
	paddingXL: PADDING.xl,
	paddingXXL: PADDING.xxl,

	// Control sizes
	controlHeight: CONTROL_HEIGHTS.md,
	controlHeightXS: CONTROL_HEIGHTS.xs,
	controlHeightSM: CONTROL_HEIGHTS.sm,
	controlHeightLG: CONTROL_HEIGHTS.lg,

	// Motion
	motionDurationFast: ANIMATION_DURATION.fast,
	motionDurationMid: ANIMATION_DURATION.normal,
	motionDurationSlow: ANIMATION_DURATION.slow,
	motionEaseInOut: EASING.antdEaseInOut,
	motionEaseInOutCirc: EASING.antdEaseInOutCirc,
	motionEaseOut: EASING.antdEaseOut,

	// Z-index
	zIndexBase: Z_INDEX.base,
	zIndexPopupBase: Z_INDEX.popup,

	// Opacity
	opacityLoading: OPACITY.loading,

	// Breakpoints
	screenXS: BREAKPOINTS.xs,
	screenSM: BREAKPOINTS.sm,
	screenMD: BREAKPOINTS.md,
	screenLG: BREAKPOINTS.lg,
	screenXL: BREAKPOINTS.xl,
	screenXXL: BREAKPOINTS.xxl,

	// Box shadows
	boxShadow: isDark
		? "0 1px 2px 0 rgba(255, 255, 255, 0.03), 0 1px 6px -1px rgba(255, 255, 255, 0.02), 0 2px 4px 0 rgba(255, 255, 255, 0.02)"
		: "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",

	boxShadowSecondary: isDark
		? "0 6px 16px 0 rgba(255, 255, 255, 0.08), 0 3px 6px -4px rgba(255, 255, 255, 0.12), 0 9px 28px 8px rgba(255, 255, 255, 0.05)"
		: "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",

	// Wireframe
	wireframe: false,
});
