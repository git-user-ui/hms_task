import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';
import { ms, sc, vs } from '../../../utils/responsive';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../../constants/screen';

const FavoriteTabs = ({ selectedTab, onChange }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.button, selectedTab === 'doctors' && styles.active]}
        activeOpacity={0.8}
        onPress={() => onChange('doctors')}
      >
        <Text
          style={[styles.text, selectedTab === 'doctors' && styles.activeText]}
        >
          Doctors
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, selectedTab === 'services' && styles.active]}
        activeOpacity={0.8}
        onPress={() => onChange('services')}
      >
        <Text
          style={[styles.text, selectedTab === 'services' && styles.activeText]}
        >
          Services
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteTabs;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderRadius: 30,
    padding: 4,
    gap: Screen_SIZES_ModerateScale.four,
    marginHorizontal: Screen_SIZES_Scale.thirty,
    marginVertical: Screen_SIZES_VerticalScale.eighteen,
  },

  button: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  active: {
    backgroundColor: colors.primary,
  },

  text: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 15,
  },

  activeText: {
    color: '#fff',
  },
});
