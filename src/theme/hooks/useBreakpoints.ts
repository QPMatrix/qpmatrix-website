import { BREAKPOINTS } from "../constants";
import { pxToRem } from "../utils/px-to-rem";

/**
 * Breakpoint utilities for responsive design
 * Uses YOUR theme constants, not Ant Design's
 */
export interface BreakpointHelpers {
	/** Mobile-first approach: styles apply from this breakpoint and up */
	up: {
		/** Extra small devices (≥480px) */
		xs: string;
		/** Small devices (≥576px) */
		sm: string;
		/** Medium devices (≥768px) */
		md: string;
		/** Large devices (≥992px) */
		lg: string;
		/** Extra large devices (≥1200px) */
		xl: string;
		/** Extra extra large devices (≥1600px) */
		xxl: string;
	};
	/** Desktop-first approach: styles apply up to this breakpoint */
	down: {
		/** Up to extra small devices (<480px) */
		xs: string;
		/** Up to small devices (<576px) */
		sm: string;
		/** Up to medium devices (<768px) */
		md: string;
		/** Up to large devices (<992px) */
		lg: string;
		/** Up to extra large devices (<1200px) */
		xl: string;
		/** Up to extra extra large devices (<1600px) */
		xxl: string;
	};
	/** Styles apply only within the breakpoint range */
	only: {
		/** Only extra small devices (480px-575px) */
		xs: string;
		/** Only small devices (576px-767px) */
		sm: string;
		/** Only medium devices (768px-991px) */
		md: string;
		/** Only large devices (992px-1199px) */
		lg: string;
		/** Only extra large devices (1200px-1599px) */
		xl: string;
		/** Only extra extra large devices (≥1600px) */
		xxl: string;
	};
}

/**
 * Hook that provides clean breakpoint utilities
 * Uses your existing BREAKPOINTS constants and pxToRem utility
 *
 * @returns Typed breakpoint helpers for responsive design
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const breakpoints = useBreakpoints();
 *
 *   const styles = {
 *     container: {
 *       [breakpoints.down.sm]: { width: '100%' },
 *       [breakpoints.up.lg]: { maxWidth: '800px' },
 *     }
 *   };
 * };
 * ```
 */
export function useBreakpoints(): BreakpointHelpers {
	return {
		up: {
			xs: `@media (min-width: ${pxToRem(BREAKPOINTS.xs)})`,
			sm: `@media (min-width: ${pxToRem(BREAKPOINTS.sm)})`,
			md: `@media (min-width: ${pxToRem(BREAKPOINTS.md)})`,
			lg: `@media (min-width: ${pxToRem(BREAKPOINTS.lg)})`,
			xl: `@media (min-width: ${pxToRem(BREAKPOINTS.xl)})`,
			xxl: `@media (min-width: ${pxToRem(BREAKPOINTS.xxl)})`,
		},
		down: {
			xs: `@media (max-width: ${pxToRem(BREAKPOINTS.xs - 0.02)})`,
			sm: `@media (max-width: ${pxToRem(BREAKPOINTS.sm - 0.02)})`,
			md: `@media (max-width: ${pxToRem(BREAKPOINTS.md - 0.02)})`,
			lg: `@media (max-width: ${pxToRem(BREAKPOINTS.lg - 0.02)})`,
			xl: `@media (max-width: ${pxToRem(BREAKPOINTS.xl - 0.02)})`,
			xxl: `@media (max-width: ${pxToRem(BREAKPOINTS.xxl - 0.02)})`,
		},
		only: {
			xs: `@media (min-width: ${pxToRem(BREAKPOINTS.xs)}) and (max-width: ${pxToRem(BREAKPOINTS.sm - 0.02)})`,
			sm: `@media (min-width: ${pxToRem(BREAKPOINTS.sm)}) and (max-width: ${pxToRem(BREAKPOINTS.md - 0.02)})`,
			md: `@media (min-width: ${pxToRem(BREAKPOINTS.md)}) and (max-width: ${pxToRem(BREAKPOINTS.lg - 0.02)})`,
			lg: `@media (min-width: ${pxToRem(BREAKPOINTS.lg)}) and (max-width: ${pxToRem(BREAKPOINTS.xl - 0.02)})`,
			xl: `@media (min-width: ${pxToRem(BREAKPOINTS.xl)}) and (max-width: ${pxToRem(BREAKPOINTS.xxl - 0.02)})`,
			xxl: `@media (min-width: ${pxToRem(BREAKPOINTS.xxl)})`,
		},
	};
}