import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../themes/colors';
import { Screen_SIZES_Scale } from '../../constants/screen';
import { Fonts } from '../../themes/font';

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
    color: colors.black,
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: Screen_SIZES_Scale.twelve,
  },
});
