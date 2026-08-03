import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';
import { Fonts } from '../../themes/font';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
} from '../../constants/screen';

const ButtonComp = ({ text, width, onPress }) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.btnContainer, (width = { width })]}
        onPress={onPress}
      >
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: Screen_SIZES_Scale.thirty,
    height: sc(45),
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    paddingHorizontal: Screen_SIZES_ModerateScale.eight,
    width: 'auto',
    margin: 'auto',
  },
  btnText: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.white,
    fontSize: Screen_SIZES_Scale.twenty,
  },
});
