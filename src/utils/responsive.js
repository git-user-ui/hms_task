import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const sc = scale;
export const ms = moderateScale;
export const vs = verticalScale;

export const currentDate = () => {
  const todaysDate = new Date();

  const date = todaysDate.getDate();
  const month = todaysDate.getMonth();
  const year = todaysDate.getFullYear();

  return `${date}/${month}/${year}`;
};
