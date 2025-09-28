import { useComponentStyles } from "@theme/hooks";
import { pxToRem } from "@theme/utils/px-to-rem";
import type { QPButtonSize, QPButtonVariant } from "./types";

/**
 * Comprehensive QPButton styles using YOUR theme system
 *
 * Features:
 * - All button variants (primary, secondary, outline, ghost, danger, success, warning, info)
 * - All sizes with AAA accessibility compliance (44px+ touch targets)
 * - Full responsive design with YOUR breakpoints
 * - Uses YOUR colors, spacing, and design tokens
 * - Loading states, disabled states, focus indicators
 *
 * @param variant - Button variant
 * @param size - Button size
 * @param fullWidth - Whether button should be full width
 * @param loading - Whether button is in loading state
 * @param disabled - Whether button is disabled
 */
export const useQPButtonStyles = (
	variant: QPButtonVariant = "primary",
	size: QPButtonSize = "md",
	fullWidth?: boolean,
	loading?: boolean,
	disabled?: boolean,
) => {
	return useComponentStyles("QPButton", (theme) => {
		// Size configurations with accessibility compliance
		const sizeConfig = {
			sm: {
				height: pxToRem(44), // Minimum accessible touch target
				padding: `${theme.padding.sm} ${theme.padding.md}`,
				fontSize: theme.fontSizes.sm,
				minWidth: pxToRem(80),
			},
			md: {
				height: pxToRem(48), // Default comfortable size
				padding: `${theme.padding.md} ${theme.padding.lg}`,
				fontSize: theme.fontSizes.sm,
				minWidth: pxToRem(100),
			},
			lg: {
				height: pxToRem(52), // Large for important actions
				padding: `${theme.padding.md} ${theme.padding.xl}`,
				fontSize: theme.fontSizes.lg,
				minWidth: pxToRem(120),
			},
			xl: {
				height: pxToRem(56), // Extra large for hero sections
				padding: `${theme.padding.lg} ${theme.padding.xl}`,
				fontSize: theme.fontSizes.lg,
				minWidth: pxToRem(140),
			},
		};

		// Variant configurations using YOUR theme colors
		const variantConfig = {
			primary: {
				backgroundColor: theme.colors.primary,
				color: theme.colors.background.primary,
				border: `1px solid ${theme.colors.primary}`,
				hover: {
					backgroundColor: theme.colors.primary,
					opacity: 0.9,
					transform: "translateY(-1px)",
				},
			},
			secondary: {
				backgroundColor: theme.colors.surface.secondary,
				color: theme.colors.text.primary,
				border: `1px solid ${theme.colors.border.primary}`,
				hover: {
					backgroundColor: theme.colors.surface.hover,
					borderColor: theme.colors.primary,
				},
			},
			outline: {
				backgroundColor: "transparent",
				color: theme.colors.primary,
				border: `1px solid ${theme.colors.primary}`,
				hover: {
					backgroundColor: theme.colors.primary,
					color: theme.colors.background.primary,
				},
			},
			ghost: {
				backgroundColor: "transparent",
				color: theme.colors.text.primary,
				border: "1px solid transparent",
				hover: {
					backgroundColor: theme.colors.surface.hover,
				},
			},
			danger: {
				backgroundColor: theme.colors.error,
				color: theme.colors.background.primary,
				border: `1px solid ${theme.colors.error}`,
				hover: {
					backgroundColor: theme.colors.error,
					opacity: 0.9,
				},
			},
			success: {
				backgroundColor: theme.colors.success,
				color: theme.colors.background.primary,
				border: `1px solid ${theme.colors.success}`,
				hover: {
					backgroundColor: theme.colors.success,
					opacity: 0.9,
				},
			},
			warning: {
				backgroundColor: theme.colors.warning,
				color: theme.colors.background.primary,
				border: `1px solid ${theme.colors.warning}`,
				hover: {
					backgroundColor: theme.colors.warning,
					opacity: 0.9,
				},
			},
			info: {
				backgroundColor: theme.colors.info,
				color: theme.colors.background.primary,
				border: `1px solid ${theme.colors.info}`,
				hover: {
					backgroundColor: theme.colors.info,
					opacity: 0.9,
				},
			},
		};

		const currentSize = sizeConfig[size];
		const currentVariant = variantConfig[variant];

		return {
			container: {
				// Base styling
				position: "relative" as const,
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				textDecoration: "none",
				fontFamily: "inherit",
				fontWeight: theme.fontWeights.medium,
				borderRadius: theme.borderRadius.md,
				transition: "all 0.2s ease",
				userSelect: "none" as const,
				whiteSpace: "nowrap" as const,

				// Size configuration
				height: currentSize.height,
				padding: currentSize.padding,
				fontSize: currentSize.fontSize,
				minWidth: fullWidth ? "100%" : currentSize.minWidth,
				width: fullWidth ? "100%" : "auto",

				// Variant styling
				backgroundColor: currentVariant.backgroundColor,
				color: currentVariant.color,
				border: currentVariant.border,

				// Responsive design with YOUR breakpoints
				[theme.breakpoints.down.xs]: {
					width: fullWidth ? "100%" : "auto",
					minWidth: fullWidth ? "100%" : pxToRem(44),
				},

				// Interactive states
				"&:hover": {
					...currentVariant.hover,
					transform: disabled || loading ? "none" : "translateY(-1px)",
					boxShadow:
						disabled || loading ? "none" : "0 4px 12px rgba(0, 0, 0, 0.15)",
				},

				// Focus state for accessibility (WCAG 2.1 AA compliant)
				"&:focus": {
					outline: `2px solid ${theme.colors.primary}`,
					outlineOffset: "2px",
					zIndex: 1,
				},

				// Active state
				"&:active": {
					transform: disabled || loading ? "none" : "translateY(1px)",
					boxShadow: "none",
				},

				// Disabled state
				...(disabled && {
					opacity: 0.6,
					cursor: "not-allowed",
					backgroundColor: theme.colors.surface.secondary,
					color: theme.colors.text.disabled,
					borderColor: theme.colors.border.secondary,

					"&:hover": {
						backgroundColor: theme.colors.surface.secondary,
						color: theme.colors.text.disabled,
						transform: "none",
						boxShadow: "none",
						opacity: 0.6,
					},
				}),

				// Loading state
				...(loading && {
					cursor: "wait",
					"&:hover": {
						transform: "none",
					},
				}),
			},

			// Loading spinner
			spinner: {
				width: pxToRem(16),
				height: pxToRem(16),
				border: "2px solid transparent",
				borderTop: "2px solid currentColor",
				borderRadius: "50%",
				animation: "spin 0.8s linear infinite",
				marginRight: theme.spacing[2],

				"@keyframes spin": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},

			// Content wrapper for loading state
			content: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: theme.spacing[2],
				opacity: loading ? 0.7 : 1,
			},
		};
	});
};
