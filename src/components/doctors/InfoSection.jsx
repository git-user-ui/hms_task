import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sc } from '../../utils/responsive';
import { colors } from '../../themes/colors';

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
    fontSize: sc(12),
    fontWeight: '700',
    marginBottom: sc(6),
  },

  desc: {
    color: '#5C5C5C',
    fontSize: sc(13),
  },
});
