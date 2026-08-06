import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Themes
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';

// Assets
import PaymentCompleteImage from '../../assets/svg/payment/payment_complete.svg';
import Calender from '../../assets/svg/payment/white_calender.svg';
import Alarm from '../../assets/svg/payment/white_alarm.svg';
import LeftArrow from '../../assets/svg/arrow_left.svg';

// Constants
import {
  flexOne,
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';
import { paymentStrings } from '../../constants/strings';

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
          <Text style={styles.congratText}>
            {paymentStrings.Congratulations}
          </Text>
          <Text style={styles.successfull}>{paymentStrings.success}</Text>

          <View style={styles.card}>
            <Text style={styles.info}>{paymentStrings.bookedAppointment}</Text>
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
    flex: flexOne.one,
    backgroundColor: colors.primary,
  },
  arrow: {
    marginHorizontal: Screen_SIZES_ModerateScale.thirty,
    paddingTop: Screen_SIZES_ModerateScale.twenty,
  },
  mainContainer: {
    flex: flexOne.one,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratText: {
    fontFamily: Fonts.SemiBold,
    fontWeight: '500',
    color: colors.white,
    fontSize: Screen_SIZES_ModerateScale.fourty,
    paddingTop: Screen_SIZES_VerticalScale.twentyFour,
  },
  successfull: {
    textAlign: 'center',
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    color: colors.white,
    fontSize: Screen_SIZES_ModerateScale.twentyFour,
    paddingTop: Screen_SIZES_VerticalScale.ten,
  },
  card: {
    borderWidth: 1,
    borderColor: colors.white,
    padding: Screen_SIZES_ModerateScale.twentyFour,
    marginTop: Screen_SIZES_VerticalScale.thirty,
    marginHorizontal: Screen_SIZES_Scale.thirty,
    borderRadius: Screen_SIZES_ModerateScale.twenty,
  },
  info: {
    fontFamily: Fonts.Light,
    fontSize: Screen_SIZES_ModerateScale.sixteen,
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
    fontSize: Screen_SIZES_ModerateScale.twenty,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.white,
    paddingVertical: Screen_SIZES_ModerateScale.twenty,
  },
  date: {
    flexDirection: 'row',
    gap: Screen_SIZES_ModerateScale.six,
    paddingHorizontal: Screen_SIZES_ModerateScale.sixteen,
  },
  dateText: {
    fontFamily: Fonts.Medium,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    fontWeight: '500',
    color: colors.white,
  },
});
