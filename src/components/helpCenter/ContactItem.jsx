import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ArrowDownIcon from '../../assets/svg/ArrowDown.svg';
import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';

const ContactItem = ({ item, onPress }) => {
  const Icon = item.icon;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => onPress(item)}
    >
      <View style={styles.leftContainer}>
        <View style={styles.iconContainer}>
          <Icon width={sc(22)} height={sc(22)} />
        </View>

        <Text style={styles.title}>{item.title}</Text>
      </View>

      <ArrowDownIcon width={sc(18)} height={sc(18)} />
    </TouchableOpacity>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: vs(12),
    marginBottom: vs(10),
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: sc(46),
    height: sc(46),
    borderRadius: sc(23),
    backgroundColor: '#E8EEFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginLeft: sc(18),
    fontSize: ms(18),
    color: colors.text,
    fontWeight: '500',
  },
});
