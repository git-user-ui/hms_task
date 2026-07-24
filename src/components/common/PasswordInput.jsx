import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

const PasswordInput = ({ label }) => {
  return (
    <View>
      <Text style={styles.labelName}>{label}</Text>
      <TextInput
        placeholder="********"
        placeholderTextColor={'#809CFF'}
        style={styles.inputContainer}
        secureTextEntry={true}
      />
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  labelName: {
    fontSize: sc(20),
    fontWeight: '500',
  },
  inputContainer: {
    width: '100%',
    height: sc(40),
    borderRadius: sc(13),
    marginTop: vs(4),
    backgroundColor: colors.lightblue,
    paddingHorizontal: sc(20),
  },
});
