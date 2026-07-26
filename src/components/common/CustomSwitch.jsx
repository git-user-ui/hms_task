import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../themes/colors';

const CustomSwitch = ({ value, onValueChange }) => {
  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      style={[
        styles.track,
        {
          backgroundColor: value ? colors.primary : '#C9D5FF',
        },
      ]}
    >
      <View
        style={[styles.thumb, value ? styles.thumbRight : styles.thumbLeft]}
      />
    </Pressable>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  track: {
    width: 66,
    height: 34,
    borderRadius: 18,
    justifyContent: 'center',
    position: 'relative',
  },

  thumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.white,
    position: 'absolute',
  },

  thumbLeft: {
    left: 4,
  },

  thumbRight: {
    right: 4,
  },
});
