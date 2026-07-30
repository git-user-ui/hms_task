import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import EmailInput from '../../components/common/EmailInput';
import ButtonComp from '../../components/common/Button';

import UpperCard from '../../assets/svg/payment/card_upper.svg';
import ChipIcon from '../../assets/svg/payment/chip_icon.svg';
import RectangleIcon from '../../assets/svg/payment/rectangle.svg';

import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';
import { ms, sc, vs } from '../../utils/responsive';

const DEFAULT_CARD = {
  cardHolderName: 'JOHN DOE',
  cardNumber: '0000 0000 0000 0000',
  cardExpiry: '04/28',
};

const PaymentMethod = () => {
  const [form, setForm] = useState({
    cardHolderName: '',
    cardNumber: '',
    cardExpiry: '',
    cvv: '',
  });

  const [card, setCard] = useState(DEFAULT_CARD);

  useEffect(() => {
    loadCard();
  }, []);

  const loadCard = async () => {
    try {
      const value = await AsyncStorage.getItem('cardDetails');

      if (value) {
        setCard(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatCardNumber = value => {
    const numbers = value.replace(/\D/g, '').substring(0, 16);
    return numbers.replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = value => {
    const numbers = value.replace(/\D/g, '').substring(0, 4);

    if (numbers.length <= 2) return numbers;

    return `${numbers.substring(0, 2)}/${numbers.substring(2)}`;
  };

  const validate = () => {
    const { cardHolderName, cardNumber, cardExpiry, cvv } = form;

    if (!cardHolderName.trim()) {
      Alert.alert('Validation', 'Enter card holder name.');
      return false;
    }

    if (!/^[A-Za-z ]+$/.test(cardHolderName.trim())) {
      Alert.alert('Validation', 'Name should contain only letters.');
      return false;
    }

    if (cardNumber.replace(/\s/g, '').length !== 16) {
      Alert.alert('Validation', 'Card number must be 16 digits.');
      return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
      Alert.alert('Validation', 'Expiry should be MM/YY.');
      return false;
    }

    const [month] = cardExpiry.split('/');

    if (+month < 1 || +month > 12) {
      Alert.alert('Validation', 'Invalid expiry month.');
      return false;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      Alert.alert('Validation', 'CVV must be 3 or 4 digits.');
      return false;
    }

    return true;
  };

  const handleSave = async () => {
    if (!validate()) {
      return;
    }

    const data = {
      cardHolderName: form.cardHolderName.toUpperCase(),
      cardNumber: form.cardNumber,
      cardExpiry: form.cardExpiry,
    };

    try {
      await AsyncStorage.setItem('cardDetails', JSON.stringify(data));

      setCard(data);

      setForm({
        cardHolderName: '',
        cardNumber: '',
        cardExpiry: '',
        cvv: '',
      });

      Alert.alert('Success', 'Card saved successfully.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ProfileHeader header="Add Card" />

      <View style={styles.card}>
        <UpperCard width="100%" height="100%" preserveAspectRatio="none" />

        <View style={styles.cardNumberContainer}>
          <Text style={styles.cardNumber}>{card.cardNumber}</Text>

          <View style={styles.cardNameContainer}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardHolderText}>Card Holder</Text>

              <Text style={styles.name} numberOfLines={1}>
                {card.cardHolderName}
              </Text>
            </View>

            <View>
              <Text style={styles.cardHolderText}>Expiry</Text>

              <Text style={styles.name}>{card.cardExpiry}</Text>
            </View>
          </View>
        </View>

        <View style={styles.rectangle}>
          <RectangleIcon />
        </View>

        <View style={styles.chip}>
          <ChipIcon />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <EmailInput
          label="Card Holder Name"
          placeholderName="John Doe"
          value={form.cardHolderName}
          onChangeText={text => setForm({ ...form, cardHolderName: text })}
        />

        <EmailInput
          label="Card Number"
          placeholderName="1234 5678 9012 3456"
          keyboardType="number-pad"
          value={form.cardNumber}
          onChangeText={text =>
            setForm({
              ...form,
              cardNumber: formatCardNumber(text),
            })
          }
        />

        <View style={styles.expiryContainer}>
          <EmailInput
            label="Expiry"
            placeholderName="MM/YY"
            keyboardType="number-pad"
            style={styles.expiry}
            value={form.cardExpiry}
            onChangeText={text =>
              setForm({
                ...form,
                cardExpiry: formatExpiry(text),
              })
            }
          />

          <EmailInput
            label="CVV"
            placeholderName="123"
            keyboardType="number-pad"
            style={styles.cvv}
            value={form.cvv}
            onChangeText={text =>
              setForm({
                ...form,
                cvv: text.replace(/\D/g, '').substring(0, 4),
              })
            }
          />
        </View>
      </View>

      <View style={styles.btn}>
        <ButtonComp text="Save Card" width="100%" onPress={handleSave} />
      </View>
    </>
  );
};

export default PaymentMethod;
const styles = StyleSheet.create({
  container: {},
  card: {
    marginHorizontal: sc(30),
    marginTop: vs(20),
    borderRadius: ms(18),
    height: vs(150),
    backgroundColor: colors.primary,
  },
  cardNumberContainer: {
    bottom: 0,
    padding: ms(30),
    color: colors.white,
    position: 'absolute',
  },
  cardNumber: {
    color: colors.white,
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    fontSize: ms(20),
  },
  cardNameContainer: {
    marginTop: vs(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(10),
  },
  cardHolderText: {
    color: colors.white,
    fontFamily: Fonts.Regular,
    fontSize: ms(12),
  },
  name: {
    fontFamily: Fonts.Bold,
    fontWeight: '700',
    fontSize: ms(14),
    color: colors.white,
    maxWidth: sc(150),
  },
  chip: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: ms(30),
  },
  rectangle: {
    position: 'absolute',
    right: 0,
    padding: ms(24),
  },
  inputContainer: {
    marginHorizontal: sc(30),
    marginTop: vs(20),
    gap: ms(14),
  },
  expiryContainer: {
    flexDirection: 'row',
    gap: ms(12),
  },
  expiry: {
    flex: 1.5,
  },
  cvv: {
    flex: 1,
  },
  btn: {
    marginHorizontal: sc(30),
    marginTop: 'auto',
    marginBottom: vs(20),
  },
});
