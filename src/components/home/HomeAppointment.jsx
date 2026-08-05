import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';
import { Fonts } from '../../themes/font';
import RightIcon from '../../assets/svg/right_icon.svg';
import WrongIcon from '../../assets/svg/wrong_icon.svg';

import { useNavigation } from '@react-navigation/native';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const dates = [
  { id: 1, day: '21', week: 'MON' },
  { id: 2, day: '22', week: 'TUE' },
  { id: 3, day: '23', week: 'WED' },
  { id: 4, day: '24', week: 'THU' },
  { id: 5, day: '25', week: 'FRI' },
  { id: 6, day: '26', week: 'SAT' },
];

const HomeAppointment = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* Date List */}
        <View style={styles.dateList}>
          {dates.map(item => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              style={[styles.dateCard, item.active && styles.activeDateCard]}
            >
              <Text
                style={[styles.dateNumber, item.active && styles.activeText]}
              >
                {item.day}
              </Text>

              <Text style={[styles.dayText, item.active && styles.activeText]}>
                {item.week}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Appointment Card */}
        <View style={styles.card}>
          {/* Header */}
          <Text style={styles.todayText}>11 Wednesday - Today</Text>

          {/* Time + Details */}
          <View style={styles.scheduleContainer}>
            {/* Timeline */}

            {/* Appointment */}
            <View style={styles.appointment}>
              <View style={styles.appointmentContent}>
                <View style={styles.textContainer}>
                  <Text style={styles.doctor}>Dr. Olivia Turner, M.D.</Text>

                  <Text style={styles.desc}>
                    Treatment and prevention of skin and photodermatitis.
                  </Text>

                  <Text style={styles.appointmentTime}>10 AM - 11 AM</Text>
                </View>

                <View style={styles.iconContainer}>
                  <TouchableOpacity style={styles.check}>
                    <RightIcon width={10} height={10} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.close}>
                    <WrongIcon width={8} height={8} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeAppointment;

const styles = StyleSheet.create({
  container: {
    fontFamily: Fonts.Regular,
    backgroundColor: colors.secondary,
    paddingVertical: Screen_SIZES_VerticalScale.twelve,
  },

  wrapper: {
    paddingHorizontal: Screen_SIZES_Scale.twentyFour,
  },

  dateList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Screen_SIZES_VerticalScale.twelve,
  },
  dateCard: {
    width: ms(42),
    height: vs(50),
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  activeDateCard: {
    backgroundColor: colors.primary,
  },

  activeText: {
    color: colors.white,
  },

  dateNumber: {
    fontSize: Screen_SIZES_ModerateScale.sixteen,
    fontFamily: Fonts.Medium,
    fontWeight: '500',
  },

  dayText: {
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: Screen_SIZES_ModerateScale.ten,
    marginTop: Screen_SIZES_VerticalScale.two,
    color: colors.black,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: Screen_SIZES_ModerateScale.twenty,
    paddingHorizontal: Screen_SIZES_Scale.eighteen,
    paddingVertical: Screen_SIZES_VerticalScale.twelve,
  },

  todayText: {
    fontSize: Screen_SIZES_ModerateScale.twelve,
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    marginBottom: Screen_SIZES_VerticalScale.eight,
    color: colors.primary,
    textAlign: 'center',
  },

  timeColumn: {
    width: sc(42),
  },

  time: {
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: colors.primary,
    marginBottom: Screen_SIZES_VerticalScale.eight,
  },

  dottedLine: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    marginBottom: Screen_SIZES_VerticalScale.eight,
  },

  appointment: {
    marginTop: Screen_SIZES_VerticalScale.six,
  },

  appointmentContent: {
    backgroundColor: colors.secondary,
    borderRadius: Screen_SIZES_ModerateScale.fourteen,
    paddingHorizontal: Screen_SIZES_Scale.fourteen,
    paddingVertical: Screen_SIZES_VerticalScale.twelve,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  textContainer: {
    width: '82%',
  },

  iconContainer: {
    width: '18%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  doctor: {
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    fontFamily: Fonts.Medium,
    fontWeight: '700',
    color: colors.primary,
  },

  desc: {
    fontFamily: Fonts.Light,
    color: colors.black,
    fontWeight: '300',
    fontSize: Screen_SIZES_ModerateScale.ten,
    lineHeight: Screen_SIZES_ModerateScale.fourteen,
    marginTop: Screen_SIZES_VerticalScale.two,
  },
  appointmentTime: {
    marginTop: Screen_SIZES_VerticalScale.six,
    fontFamily: Fonts.Bold,
    color: colors.primary,
  },

  check: {
    width: Screen_SIZES_ModerateScale.twenty,
    height: Screen_SIZES_ModerateScale.twenty,
    borderRadius: Screen_SIZES_ModerateScale.ten,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  close: {
    width: Screen_SIZES_ModerateScale.twenty,
    height: Screen_SIZES_ModerateScale.twenty,
    borderRadius: Screen_SIZES_ModerateScale.ten,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: Screen_SIZES_ModerateScale.twelve,
  },

  closeText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: Screen_SIZES_ModerateScale.fourteen,
  },
});
