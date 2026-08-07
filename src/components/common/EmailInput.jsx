import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { sc } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';
import {
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const EmailInput = ({ label, placeholderName, value, onChangeText, style }) => {
  return (
    <KeyboardAvoidingView style={style}>
      <Text style={styles.labelName}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholderName}
        style={styles.inputContainer}
        placeholderTextColor={'#809CFF'}
      />
    </KeyboardAvoidingView>
  );
};

export default EmailInput;

const styles = StyleSheet.create({
  labelName: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: Screen_SIZES_Scale.twenty,
  },
  inputContainer: {
    color: colors.black,
    width: '100%',
    marginTop: Screen_SIZES_VerticalScale.four,
    height: Screen_SIZES_Scale.fourty,
    borderRadius: Screen_SIZES_Scale.fourteen,
    backgroundColor: colors.lightblue,
    paddingHorizontal: Screen_SIZES_Scale.twenty,
  },
});
