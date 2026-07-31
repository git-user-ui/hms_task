import { ms, sc, vs } from '../utils/responsive';

const Screen_SIZES_Scale = {
  two: sc(2),
  four: sc(4),
  six: sc(6),
  eight: sc(8),
  ten: sc(10),
  twelve: sc(12),
  fourteen: sc(14),
  sixteen: sc(16),
  eighteen: sc(18),
  twenty: sc(20),
};
const Screen_SIZES_ModerateScale = {
  two: ms(2),
  four: ms(4),
  six: ms(6),
  eight: ms(8),
  ten: ms(10),
  twelve: ms(12),
  fourteen: ms(14),
  sixteen: ms(16),
  eighteen: ms(18),
  twenty: ms(20),
};
const Screen_SIZES_VerticalScale = {
  two: vs(2),
  four: vs(4),
  six: vs(6),
  eight: vs(8),
  ten: vs(10),
  twelve: vs(12),
  fourteen: vs(14),
  sixteen: vs(16),
  eighteen: vs(18),
  twenty: vs(20),
};

export {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
};
