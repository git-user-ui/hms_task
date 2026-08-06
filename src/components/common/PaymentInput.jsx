import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BigCircle from '../../assets/svg/payment/circle_big.svg';
import SmallCircle from '../../assets/svg/payment/circle_small.svg';

import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';

import { sc, vs } from '../../utils/responsive';

import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const PaymentInput = ({ value, text, icon, selected, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => onPress(value)}
    >
      <View style={styles.textContainer}>
        {icon}
        <Text style={styles.textName}>{text}</Text>
      </View>

      <View style={styles.iconContainer}>
        <BigCircle />

        <SmallCircle
          style={[
            styles.smallCircle,
            selected === value && styles.selectedDebit,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(PaymentInput);

const styles = StyleSheet.create({
  container: {
    marginTop: Screen_SIZES_VerticalScale.twelve,
    marginHorizontal: Screen_SIZES_Scale.thirty,
    flexDirection: 'row',
    backgroundColor: colors.lightblue,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Screen_SIZES_ModerateScale.twenty,
    padding: Screen_SIZES_ModerateScale.six,
  },
  textContainer: {
    flexDirection: 'row',
    paddingLeft: Screen_SIZES_ModerateScale.ten,
    alignItems: 'center',
    width: '70%',
  },
  textName: {
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    fontSize: Screen_SIZES_ModerateScale.twenty,
    color: colors.lightbluetext,
    paddingLeft: Screen_SIZES_ModerateScale.ten,
  },
  iconContainer: {
    paddingRight: Screen_SIZES_ModerateScale.ten,
  },
  smallCircle: {
    position: 'absolute',
    left: sc(4),
    top: vs(3),
  },
  selectedDebit: {
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.thirty,
  },
});
