import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../themes/colors';

import PaymentCompleteImage from '../../assets/svg/payment/payment_complete.svg';
import { Fonts } from '../../themes/font';
import { ms, sc, vs } from '../../utils/responsive';

const PaymentComplete = () => {
  return (
    <View style={styles.container}>
      <PaymentCompleteImage />
      <Text style={styles.congratText}>Congratulations</Text>
      <Text style={styles.successfull}>Payment is Successfull.</Text>
    </View>
  );
};

export default PaymentComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  congratText: {
    fontFamily: Fonts.SemiBold,
    fontWeight: '500',
    color: colors.white,
    fontSize: ms(40),
    paddingTop: vs(32),
  },
  successfull: {
    textAlign: 'center',
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    color: colors.white,
    fontSize: ms(24),
    paddingTop: vs(14),
  },
});
