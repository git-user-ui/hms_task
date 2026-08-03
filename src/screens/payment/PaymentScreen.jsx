import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import PaymentInput from '../../components/common/PaymentInput';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import { ms, sc, vs } from '../../utils/responsive';
import { Fonts } from '../../themes/font';

import { useNavigation } from '@react-navigation/native';

import Debit from '../../assets/svg/payment/debit_card.svg';
import GooglePlay from '../../assets/svg/payment/google_play_logo.svg';
import PayPal from '../../assets/svg/payment/paypal_logo.svg';
import Apple from '../../assets/svg/payment/apple_logo.svg';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const PaymentScreen = () => {
  const [selected, setSelected] = useState('');

  const navigation = useNavigation();

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
