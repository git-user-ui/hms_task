import { ms, sc, vs } from '../utils/responsive';

const Screen_SIZES_Scale = {
  two: sc(2),
  four: sc(2),
  six: sc(2),
  eight: sc(2),
  ten: sc(2),
  twelve: sc(2),
  fourteen: sc(2),
  sixteen: sc(2),
};
const Screen_SIZES_ModerateScale = {
  two: ms(2),
  four: ms(2),
  six: ms(2),
  eight: ms(2),
  ten: ms(2),
  twelve: ms(12),
  fourteen: ms(14),
  sixteen: ms(16),
};
const Screen_SIZES_VerticalScale = {
  two: vs(2),
  four: vs(2),
  six: vs(2),
  eight: vs(2),
  ten: vs(2),
  twelve: vs(2),
  fourteen: vs(2),
  sixteen: vs(2),
};

export {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
};
