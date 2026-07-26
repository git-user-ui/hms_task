import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';

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
    backgroundColor: colors.secondary,
    borderRadius: 30,
    padding: 4,
    marginHorizontal: 20,
    marginTop: 18,
  },

  button: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  active: {
    backgroundColor: colors.secondary,
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
