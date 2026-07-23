import { StyleSheet } from 'react-native';
import { sc } from '../../utils/responsive';
import { colors } from '../../themes/colors';

export default StyleSheet.create({
  logoComp: {
    width: sc(20),
    height: sc(20),
    borderRadius: sc(30),
    backgroundColor: colors.secondary,
    padding: sc(6),
  },
});
