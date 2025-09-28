/**
 * Convert px to rem
 * @param px - pixel value
 * @param base - root font size (default: 16px)
 * @returns rem value as string
 */
export function pxToRem(px: number, base = 16): string {
	return `${px / base}rem`;
}
