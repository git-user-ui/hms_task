import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ArrowDownIcon from '../../assets/svg/ArrowDown.svg';
import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

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
          <Icon
            width={Screen_SIZES_Scale.twentyTwo}
            height={Screen_SIZES_Scale.twentyTwo}
          />
        </View>

        <Text style={styles.title}>{item.title}</Text>
      </View>

      <ArrowDownIcon
        width={Screen_SIZES_Scale.twelve}
        height={Screen_SIZES_Scale.twelve}
      />
    </TouchableOpacity>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Screen_SIZES_VerticalScale.six,
    marginBottom: Screen_SIZES_VerticalScale.six,
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: sc(46),
    height: sc(46),
    borderRadius: Screen_SIZES_ModerateScale.twentyFour,
    backgroundColor: '#E8EEFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginLeft: Screen_SIZES_Scale.eighteen,
    fontSize: Screen_SIZES_ModerateScale.eighteen,
    color: colors.text,
    fontWeight: '500',
  },
});
