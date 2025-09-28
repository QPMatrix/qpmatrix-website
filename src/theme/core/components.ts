import {
	BORDER_RADIUS,
	BRAND_COLORS,
	COMPONENT_SPACING,
	CONTROL_HEIGHTS,
	DARK_COLORS,
	FONT_WEIGHTS,
	LIGHT_COLORS,
	SEMANTIC_COLORS,
	SPACING,
} from "../constants";

// Component theme overrides
export const createComponentThemes = (isDark: boolean) => ({
	// Button component
	Button: {
		borderRadius: BORDER_RADIUS.md,
		controlHeight: CONTROL_HEIGHTS.md,
		controlHeightLG: CONTROL_HEIGHTS.lg,
		controlHeightSM: CONTROL_HEIGHTS.sm,
		fontWeight: FONT_WEIGHTS.medium,
		paddingInline: COMPONENT_SPACING.button.padding,
		paddingInlineLG: COMPONENT_SPACING.button.paddingLarge,
		paddingInlineSM: COMPONENT_SPACING.button.paddingSmall,
		primaryShadow: `0 2px 0 ${BRAND_COLORS.primary}20`,
		defaultShadow: isDark
			? "0 2px 0 rgba(255, 255, 255, 0.02)"
			: "0 2px 0 rgba(0, 0, 0, 0.02)",
	},

	// Input components
	Input: {
		borderRadius: BORDER_RADIUS.md,
		controlHeight: CONTROL_HEIGHTS.md,
		controlHeightLG: CONTROL_HEIGHTS.lg,
		controlHeightSM: CONTROL_HEIGHTS.sm,
		paddingInline: COMPONENT_SPACING.input.padding,
		paddingBlock: SPACING[2],
		colorBgContainer: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
		colorBorder: isDark
			? DARK_COLORS.border.primary
			: LIGHT_COLORS.border.primary,
		colorText: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
		colorTextPlaceholder: isDark
			? DARK_COLORS.text.tertiary
			: LIGHT_COLORS.text.tertiary,
	},

	InputNumber: {
		borderRadius: BORDER_RADIUS.md,
		controlHeight: CONTROL_HEIGHTS.md,
		controlHeightLG: CONTROL_HEIGHTS.lg,
		controlHeightSM: CONTROL_HEIGHTS.sm,
		paddingInline: COMPONENT_SPACING.input.padding,
	},

	// Select component
	Select: {
		borderRadius: BORDER_RADIUS.md,
		controlHeight: CONTROL_HEIGHTS.md,
		controlHeightLG: CONTROL_HEIGHTS.lg,
		controlHeightSM: CONTROL_HEIGHTS.sm,
		optionPadding: `${SPACING[2]}px ${SPACING[3]}px`,
		colorBgElevated: isDark
			? DARK_COLORS.surface.secondary
			: LIGHT_COLORS.surface.primary,
		colorBgContainer: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
	},

	// DatePicker component
	DatePicker: {
		borderRadius: BORDER_RADIUS.md,
		controlHeight: CONTROL_HEIGHTS.md,
		controlHeightLG: CONTROL_HEIGHTS.lg,
		controlHeightSM: CONTROL_HEIGHTS.sm,
		colorBgContainer: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
	},

	// Card component
	Card: {
		borderRadius: BORDER_RADIUS.lg,
		borderRadiusLG: BORDER_RADIUS.xl,
		paddingLG: COMPONENT_SPACING.card.paddingLarge,
		padding: COMPONENT_SPACING.card.padding,
		paddingSM: COMPONENT_SPACING.card.paddingSmall,
		headerBg: isDark
			? DARK_COLORS.surface.secondary
			: LIGHT_COLORS.surface.secondary,
		colorBgContainer: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
		colorBorderSecondary: isDark
			? DARK_COLORS.border.secondary
			: LIGHT_COLORS.border.secondary,
		actionsBg: isDark
			? DARK_COLORS.surface.secondary
			: LIGHT_COLORS.surface.secondary,
	},

	// Table component
	Table: {
		borderRadius: BORDER_RADIUS.md,
		headerBg: isDark
			? DARK_COLORS.surface.secondary
			: LIGHT_COLORS.surface.secondary,
		headerSplitColor: isDark
			? DARK_COLORS.border.primary
			: LIGHT_COLORS.border.primary,
		rowHoverBg: isDark ? DARK_COLORS.surface.hover : LIGHT_COLORS.surface.hover,
		colorBgContainer: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
		colorText: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
		colorTextHeading: isDark
			? DARK_COLORS.text.primary
			: LIGHT_COLORS.text.primary,
	},

	// Menu component
	Menu: {
		borderRadius: BORDER_RADIUS.md,
		itemBorderRadius: BORDER_RADIUS.md,
		itemHeight: 40,
		itemPadding: `${SPACING[2]}px ${SPACING[4]}px`,
		itemMarginInline: SPACING[1],
		subMenuItemBorderRadius: BORDER_RADIUS.sm,
		colorBgContainer: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
		colorItemBg: "transparent",
		colorItemBgHover: isDark
			? DARK_COLORS.surface.hover
			: LIGHT_COLORS.surface.hover,
		colorItemBgSelected: `${BRAND_COLORS.primary}15`,
		colorItemText: isDark
			? DARK_COLORS.text.secondary
			: LIGHT_COLORS.text.secondary,
		colorItemTextSelected: BRAND_COLORS.primary,
		colorItemTextHover: isDark
			? DARK_COLORS.text.primary
			: LIGHT_COLORS.text.primary,
	},

	// Layout component
	Layout: {
		headerBg: isDark
			? DARK_COLORS.background.primary
			: LIGHT_COLORS.background.primary,
		headerColor: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
		headerHeight: 64,
		headerPadding: `0 ${SPACING[6]}px`,
		siderBg: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
		siderCollapsedWidth: 80,
		bodyBg: isDark
			? DARK_COLORS.background.primary
			: LIGHT_COLORS.background.primary,
		footerBg: isDark
			? DARK_COLORS.surface.secondary
			: LIGHT_COLORS.surface.secondary,
		footerPadding: `${SPACING[6]}px ${SPACING[6]}px`,
		triggerBg: isDark ? DARK_COLORS.surface.hover : LIGHT_COLORS.surface.hover,
		triggerColor: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
	},

	// Modal component
	Modal: {
		borderRadius: BORDER_RADIUS.lg,
		contentBg: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
		headerBg: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
		footerBg: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
		titleColor: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
		padding: COMPONENT_SPACING.modal.padding,
		paddingLG: COMPONENT_SPACING.modal.padding + SPACING[2],
	},

	// Drawer component
	Drawer: {
		borderRadius: BORDER_RADIUS.lg,
		colorBgElevated: isDark
			? DARK_COLORS.surface.primary
			: LIGHT_COLORS.surface.primary,
		colorText: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
		padding: COMPONENT_SPACING.drawer.padding,
		paddingLG: COMPONENT_SPACING.drawer.padding + SPACING[2],
	},

	// Notification component
	Notification: {
		borderRadius: BORDER_RADIUS.lg,
		colorBgElevated: isDark
			? DARK_COLORS.background.elevated
			: LIGHT_COLORS.background.elevated,
		colorText: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
		colorIcon: isDark
			? DARK_COLORS.text.secondary
			: LIGHT_COLORS.text.secondary,
		width: 384,
		margin: SPACING[4],
	},

	// Message component
	Message: {
		borderRadius: BORDER_RADIUS.md,
		contentPadding: `${SPACING[2]}px ${SPACING[3]}px`,
		colorBgElevated: isDark
			? DARK_COLORS.background.elevated
			: LIGHT_COLORS.background.elevated,
		colorText: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
	},

	// Tooltip component
	Tooltip: {
		borderRadius: BORDER_RADIUS.md,
		colorBgSpotlight: isDark ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0.85)",
		colorTextLightSolid: "#fff",
	},

	// Popover component
	Popover: {
		borderRadius: BORDER_RADIUS.lg,
		colorBgElevated: isDark
			? DARK_COLORS.background.elevated
			: LIGHT_COLORS.background.elevated,
		colorText: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
		minWidth: 177,
		padding: SPACING[3],
	},

	// Tabs component
	Tabs: {
		borderRadius: BORDER_RADIUS.md,
		cardBg: isDark
			? DARK_COLORS.surface.secondary
			: LIGHT_COLORS.surface.secondary,
		cardHeight: 40,
		cardPadding: `${SPACING[2]}px ${SPACING[4]}px`,
		titleFontSize: 14,
		colorText: isDark
			? DARK_COLORS.text.secondary
			: LIGHT_COLORS.text.secondary,
		colorTextActive: isDark
			? DARK_COLORS.text.primary
			: LIGHT_COLORS.text.primary,
		itemHoverColor: isDark
			? DARK_COLORS.text.primary
			: LIGHT_COLORS.text.primary,
		itemSelectedColor: BRAND_COLORS.primary,
	},

	// Form component
	Form: {
		labelHeight: CONTROL_HEIGHTS.md,
		labelColor: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
		labelRequiredMarkColor: SEMANTIC_COLORS.error[500],
		itemMarginBottom: SPACING[6],
		verticalLabelPadding: `0 0 ${SPACING[2]}px`,
	},

	// Avatar component
	Avatar: {
		borderRadius: BORDER_RADIUS.md,
		containerSize: CONTROL_HEIGHTS.md,
		containerSizeLG: CONTROL_HEIGHTS.lg,
		containerSizeSM: CONTROL_HEIGHTS.sm,
		colorBgBase: isDark
			? DARK_COLORS.surface.tertiary
			: LIGHT_COLORS.surface.tertiary,
		colorText: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
	},

	// Badge component
	Badge: {
		dotSize: 6,
		indicatorHeight: 16,
		indicatorHeightSM: 14,
		colorBgContainer: SEMANTIC_COLORS.error[500],
		colorText: "#fff",
	},

	// Tag component
	Tag: {
		borderRadius: BORDER_RADIUS.sm,
		defaultBg: isDark
			? DARK_COLORS.surface.secondary
			: LIGHT_COLORS.surface.secondary,
		defaultColor: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
	},

	// Progress component
	Progress: {
		defaultColor: BRAND_COLORS.primary,
		remainingColor: isDark
			? DARK_COLORS.surface.tertiary
			: LIGHT_COLORS.surface.tertiary,
		circleTextFontSize: "1em",
	},

	// Switch component
	Switch: {
		borderRadius: BORDER_RADIUS.full,
		handleBg: "#fff",
		handleSize: 18,
		handleSizeSM: 14,
		trackHeight: 22,
		trackHeightSM: 16,
		trackMinWidth: 44,
		trackMinWidthSM: 28,
		trackPadding: 2,
		colorPrimary: BRAND_COLORS.primary,
		colorPrimaryHover: BRAND_COLORS.primary,
	},

	// Slider component
	Slider: {
		borderRadius: BORDER_RADIUS.md,
		dotBorderWidth: 2,
		dotSize: 8,
		handleSize: 14,
		handleSizeHover: 16,
		railBg: isDark
			? DARK_COLORS.surface.tertiary
			: LIGHT_COLORS.surface.tertiary,
		railSize: 4,
		trackBg: BRAND_COLORS.primary,
		trackBgDisabled: isDark
			? DARK_COLORS.surface.hover
			: LIGHT_COLORS.surface.hover,
		handleColor: BRAND_COLORS.primary,
		dotActiveBorderColor: BRAND_COLORS.primary,
	},

	// Typography component
	Typography: {
		titleMarginBottom: "0.5em",
		titleMarginTop: "1.2em",
		colorText: isDark ? DARK_COLORS.text.primary : LIGHT_COLORS.text.primary,
		colorTextSecondary: isDark
			? DARK_COLORS.text.secondary
			: LIGHT_COLORS.text.secondary,
		colorTextDescription: isDark
			? DARK_COLORS.text.tertiary
			: LIGHT_COLORS.text.tertiary,
	},

	// Divider component
	Divider: {
		colorSplit: isDark
			? DARK_COLORS.border.primary
			: LIGHT_COLORS.border.primary,
		colorText: isDark
			? DARK_COLORS.text.secondary
			: LIGHT_COLORS.text.secondary,
		marginLG: SPACING[6],
		margin: SPACING[4],
		marginSM: SPACING[3],
	},

	// Spin component
	Spin: {
		colorPrimary: BRAND_COLORS.primary,
		dotSize: 20,
		dotSizeLG: 32,
		dotSizeSM: 14,
	},
});
