import { StyleSheet } from 'react-native';
import { sc } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { Screen_SIZES_Scale } from '../../constants/screen';

export default StyleSheet.create({
  logoComp: {
    width: Screen_SIZES_Scale.twenty,
    height: Screen_SIZES_Scale.twenty,
    borderRadius: Screen_SIZES_Scale.thirty,
    backgroundColor: colors.secondary,
    padding: Screen_SIZES_Scale.six,
  },
});
