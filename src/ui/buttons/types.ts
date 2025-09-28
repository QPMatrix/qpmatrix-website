/**
 * QPButton variants for different use cases and visual hierarchy
 */
export type QPButtonVariant =
	| "primary"    // Main call-to-action buttons
	| "secondary"  // Secondary actions
	| "outline"    // Outlined buttons for less emphasis
	| "ghost"      // Minimal buttons for subtle actions
	| "danger"     // Destructive actions (delete, remove)
	| "success"    // Positive actions (save, confirm)
	| "warning"    // Caution actions
	| "info";      // Informational actions

/**
 * QPButton sizes with AAA accessibility compliance
 * All sizes meet minimum 44px touch target requirements
 */
export type QPButtonSize =
	| "sm"    // Small: 44px height (minimum accessible size)
	| "md"    // Medium: 48px height (default)
	| "lg"    // Large: 52px height
	| "xl";   // Extra large: 56px height

/**
 * Icon position for QPButtons with icons
 */
export type QPIconPosition = "left" | "right" | "only";

/**
 * QPButton state for loading and disabled states
 */
export interface QPButtonState {
	/** Loading state with spinner */
	loading?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Full width button */
	fullWidth?: boolean;
}
