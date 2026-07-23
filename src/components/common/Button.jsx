import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Activity } from 'react';
import { colors } from '../../themes/colors';
import { sc, vs } from '../../utils/responsive';

const ButtonComp = ({ text, width }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: sc(30),
    height: sc(45),
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    marginTop: vs(30),
    width: sc(200),
    margin: 'auto',
  },
  btnText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: sc(24),
  },
});
