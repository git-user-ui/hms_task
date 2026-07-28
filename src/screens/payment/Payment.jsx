import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PaymentInput from '../../components/common/PaymentInput';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import { ms, sc, vs } from '../../utils/responsive';
import { Fonts } from '../../themes/font';

import Debit from '../../assets/svg/payment/debit_card.svg';
import GooglePlay from '../../assets/svg/payment/google_play_logo.svg';
import PayPal from '../../assets/svg/payment/paypal_logo.svg';
import Apple from '../../assets/svg/payment/apple_logo.svg';

const Payment = () => {
  const [selected, setSelected] = useState('');

  return (
    <View>
      <ProfileHeader header={'Payment Method'} />
      <Text style={styles.selectedText}>Credit & Debit Card</Text>
      <PaymentInput
        value={'Debit'}
        icon={<Debit />}
        text={'Add New Card'}
        selected={selected}
        setSelected={setSelected}
      />
      <View style={styles.optionContainer}>
        <Text style={styles.selectedText}>More Payment Options</Text>
        <PaymentInput
          value={'ApplePlay'}
          icon={<Apple />}
          text={'Apple Play'}
          selected={selected}
          setSelected={setSelected}
        />
        <PaymentInput
          value="PayPal"
          icon={<PayPal />}
          text={'PayPal'}
          selected={selected}
          setSelected={setSelected}
        />
        <PaymentInput
          value="GooglePlay"
          icon={<GooglePlay />}
          text={'Google Play'}
          selected={selected}
          setSelected={setSelected}
        />
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  selectedText: {
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    fontSize: ms(20),
    marginHorizontal: sc(30),
    marginTop: vs(20),
  },
  optionContainer: {
    marginTop: vs(20),
  },
});
