import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sc } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { Screen_SIZES_Scale } from '../../constants/screen';

const InfoSection = ({ title, description }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
};

export default InfoSection;

const styles = StyleSheet.create({
  title: {
    color: colors.primary,
    fontSize: Screen_SIZES_Scale.fourteen,
    fontWeight: '700',
  },

  desc: {
    color: '#5C5C5C',
    fontSize: Screen_SIZES_Scale.twelve,
  },
});
