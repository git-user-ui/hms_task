import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

const EmailInput = ({ label, placeholderName }) => {
  return (
    <View>
      <Text style={styles.labelName}>{label}</Text>
      <TextInput
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
    fontSize: sc(20),
    fontWeight: '500',
  },
  inputContainer: {
    width: '100%',
    marginTop: vs(4),
    height: sc(40),
    borderRadius: sc(13),
    backgroundColor: colors.lightblue,
    paddingHorizontal: sc(20),
  },
});
