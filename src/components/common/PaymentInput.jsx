import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '../../themes/colors';

import BigCircle from '../../assets/svg/payment/circle_big.svg';
import SmallCircle from '../../assets/svg/payment/circle_small.svg';

import { ms, sc, vs } from '../../utils/responsive';
import { Fonts } from '../../themes/font';
import { useNavigation } from '@react-navigation/native';

const PaymentInput = ({ text, icon, selected, setSelected, value }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setSelected(value),
          setTimeout(() => {
            navigation.navigate(value);
          }, 500);
      }}
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
            selected === value ? styles.selectedDebit : styles.smallCircle,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PaymentInput;

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
    left: sc(3.5),
    top: vs(3),
  },
  selectedDebit: {
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.thirty,
  },
});
