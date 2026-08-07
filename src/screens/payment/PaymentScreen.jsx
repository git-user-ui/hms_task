import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PaymentInput from '../../components/common/PaymentInput';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';

import Debit from '../../assets/svg/payment/debit_card.svg';
import GooglePlay from '../../assets/svg/payment/google_play_logo.svg';
import PayPal from '../../assets/svg/payment/paypal_logo.svg';
import Apple from '../../assets/svg/payment/apple_logo.svg';

import { Fonts } from '../../themes/font';

import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const PaymentScreen = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState('');
  const isNavigating = useRef(false);

  const handlePaymentPress = useCallback(
    value => {
      if (isNavigating.current) return;
      isNavigating.current = true;
      setSelected(value);
      navigation.navigate(value);

      setTimeout(() => {
        isNavigating.current = false;
      }, 600);
    },
    [navigation],
  );

  return (
    <View>
      <ProfileHeader header="Payment Method" />

      <Text style={styles.selectedText}>Credit & Debit Card</Text>

      <PaymentInput
        value="Debit"
        text="Add New Card"
        icon={<Debit />}
        selected={selected}
        onPress={handlePaymentPress}
      />

      <View style={styles.optionContainer}>
        <Text style={styles.selectedText}>More Payment Options</Text>
        <PaymentInput
          value="ApplePlay"
          text="Apple Pay"
          icon={<Apple />}
          selected={selected}
          onPress={handlePaymentPress}
        />
        <PaymentInput
          value="PayPal"
          text="PayPal"
          icon={<PayPal />}
          selected={selected}
          onPress={handlePaymentPress}
        />
        <PaymentInput
          value="GooglePlay"
          text="Google Play"
          icon={<GooglePlay />}
          selected={selected}
          onPress={handlePaymentPress}
        />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  selectedText: {
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    fontSize: Screen_SIZES_ModerateScale.twenty,
    marginHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_VerticalScale.twenty,
  },
  optionContainer: {
    marginTop: Screen_SIZES_VerticalScale.twenty,
  },
});
