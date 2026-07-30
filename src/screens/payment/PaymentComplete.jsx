import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../themes/colors';

import { useNavigation } from '@react-navigation/native';

import PaymentCompleteImage from '../../assets/svg/payment/payment_complete.svg';
import { Fonts } from '../../themes/font';
import { ms, sc, vs } from '../../utils/responsive';

import Calender from '../../assets/svg/payment/white_calender.svg';
import Alarm from '../../assets/svg/payment/white_alarm.svg';
import LeftArrow from '../../assets/svg/arrow_left.svg';

const PaymentComplete = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        >
          <LeftArrow />
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <PaymentCompleteImage />
          <Text style={styles.congratText}>Congratulations</Text>
          <Text style={styles.successfull}>Payment is Successfull.</Text>

          <View style={styles.card}>
            <Text style={styles.info}>
              You have successfully booked an appointment with
            </Text>
            <Text style={styles.name}>Dr. Olivia Turner, M.D.</Text>
            <View style={styles.sheduleContainer}>
              <View style={styles.date}>
                <Calender />
                <Text style={styles.dateText}>Month 24, Year</Text>
              </View>
              <View style={styles.date}>
                <Alarm />
                <Text style={styles.dateText}>10:00 AM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default PaymentComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  arrow: {
    marginHorizontal: ms(30),
    paddingTop: ms(20),
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratText: {
    fontFamily: Fonts.SemiBold,
    fontWeight: '500',
    color: colors.white,
    fontSize: ms(40),
    paddingTop: vs(24),
  },
  successfull: {
    textAlign: 'center',
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    color: colors.white,
    fontSize: ms(24),
    paddingTop: vs(14),
  },
  card: {
    borderWidth: 1,
    borderColor: colors.white,
    padding: ms(24),
    marginTop: vs(60),
    marginHorizontal: sc(30),
    borderRadius: ms(20),
  },
  info: {
    fontFamily: Fonts.Light,
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    color: colors.white,
  },
  sheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: Fonts.ExtraBold,
    fontSize: ms(20),
    fontWeight: '800',
    textAlign: 'center',
    color: colors.white,
    paddingVertical: ms(20),
  },
  date: {
    flexDirection: 'row',
    gap: ms(6),
    paddingHorizontal: ms(16),
  },
  dateText: {
    fontFamily: Fonts.Medium,
    fontSize: 13,
    fontWeight: '500',
    color: colors.white,
  },
});
