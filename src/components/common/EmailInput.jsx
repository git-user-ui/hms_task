import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';

const EmailInput = ({ label, placeholderName, value, onChangeText, style }) => {
  return (
    <View style={style}>
      <Text style={styles.labelName}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholderName}
        style={styles.inputContainer}
        placeholderTextColor={'#809CFF'}
      />
    </View>
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
    width: '100%',
    marginTop: Screen_SIZES_VerticalScale.four,
    height: sc(40),
    borderRadius: sc(13),
    backgroundColor: colors.lightblue,
    paddingHorizontal: Screen_SIZES_Scale.twenty,
  },
});
