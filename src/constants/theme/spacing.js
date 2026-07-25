import { ms } from '../../utils/responsive';

/**
 * Spacing scale (in dp, pre-responsive-scaling).
 * Use SIZES.md instead of a raw number like 12 wherever you need a gap,
 * margin or padding so the whole app stays on one consistent scale.
 */
export const SIZES = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
};

/** Same scale, already passed through the responsive `ms()` helper. */
export const SPACING = Object.fromEntries(
  Object.entries(SIZES).map(([key, value]) => [key, ms(value)]),
);

/** Standard horizontal screen padding used by <ScreenContainer />. */
export const SCREEN_PADDING_HORIZONTAL = SIZES.xxxl - 2; // 30
