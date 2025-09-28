import { Button as AntButton, type ButtonProps as AntButtonProps } from "antd";
import { forwardRef } from "react";
import { useQPButtonStyles } from "./styles";
import type { QPButtonVariant, QPButtonSize } from "./types";

export interface QPButtonProps extends Omit<AntButtonProps, "variant" | "size"> {
	/** QPButton variant for different use cases and visual hierarchy */
	variant?: QPButtonVariant;
	/** QPButton size with AAA accessibility compliance (44px+ touch targets) */
	size?: QPButtonSize;
	/** Full width button (uses Ant Design's block prop) */
	fullWidth?: boolean;
}

/**
 * QPButton - Enhanced Ant Design Button with your custom theme
 *
 * Extends Ant Design's Button component with:
 * - YOUR custom variants: primary, secondary, outline, ghost, danger, success, warning, info
 * - YOUR custom sizes: sm (44px), md (48px), lg (52px), xl (56px) - all AAA compliant
 * - YOUR theme colors and spacing
 * - All Ant Design Button features (loading, disabled, icons, etc.)
 * - Full accessibility support from Ant Design
 * - Responsive design with your breakpoints
 *
 * Benefits of using Ant Design Button:
 * - Built-in loading spinner
 * - Proper focus management
 * - Keyboard navigation
 * - Screen reader support
 * - Ripple effects
 * - Icon support
 * - Form integration
 *
 * @example
 * ```tsx
 * // Primary action button with Ant Design features
 * <QPButton variant="primary" size="md" loading={isLoading}>
 *   Save Changes
 * </QPButton>
 *
 * // Destructive action with icon
 * <QPButton variant="danger" size="sm" icon={<DeleteIcon />}>
 *   Delete Item
 * </QPButton>
 *
 * // Full width mobile button
 * <QPButton variant="outline" fullWidth block>
 *   Learn More
 * </QPButton>
 * ```
 */
const QPButton = forwardRef<HTMLButtonElement, QPButtonProps>(
	(
		{
			variant = "primary",
			size = "md",
			fullWidth = false,
			className = "",
			children,
			...props
		},
		ref,
	) => {
		const loading = typeof props.loading === "boolean" ? props.loading : false;
		const styles = useQPButtonStyles(variant, size, fullWidth, loading, props.disabled);

		// Map QPButton sizes to Ant Design sizes for compatibility
		const antdSizeMap = {
			sm: "small" as const,
			md: "middle" as const,
			lg: "large" as const,
			xl: "large" as const, // Ant Design doesn't have xl, we handle this in styles
		};

		return (
			<AntButton
				ref={ref}
				className={`${styles.container} ${className}`}
				size={antdSizeMap[size]}
				block={fullWidth}
				{...props}
			>
				{children}
			</AntButton>
		);
	},
);

QPButton.displayName = "QPButton";

export default QPButton;
