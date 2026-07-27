import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../../../themes/colors';
import { ms, sc, vs } from '../../../utils/responsive';

const SegmentControl = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.tab, value === 'faq' && styles.activeTab]}
        onPress={() => onChange('faq')}
      >
        <Text style={[styles.tabText, value === 'faq' && styles.activeText]}>
          FAQ
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.tab, value === 'contact' && styles.activeTab]}
        onPress={() => onChange('contact')}
      >
        <Text
          style={[styles.tabText, value === 'contact' && styles.activeText]}
        >
          Contact Us
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SegmentControl;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: sc(50),
    marginTop: vs(24),
  },

  tab: {
    flex: 1,
    height: vs(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sc(50),
  },

  activeTab: {
    backgroundColor: colors.primary,
    shadowColor: '#2260FF',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },

  tabText: {
    fontSize: ms(15),
    fontWeight: '600',
    color: colors.primary,
  },

  activeText: {
    color: '#FFFFFF',
  },
});
