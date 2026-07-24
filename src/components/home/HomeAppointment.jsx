import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';
import { Fonts } from '../../themes/font';
import RightIcon from '../../assets/svg/right_icon.svg';
import WrongIcon from '../../assets/svg/wrong_icon.svg';

const dates = [
  { id: '1', day: '9', week: 'MON', active: false },
  { id: '2', day: '10', week: 'TUE', active: false },
  { id: '3', day: '11', week: 'WED', active: true },
  { id: '4', day: '12', week: 'THU', active: false },
  { id: '5', day: '13', week: 'FRI', active: true },
  { id: '6', day: '14', week: 'SAT', active: true },
];

const HomeAppointment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/* Date List */}
        <FlatList
          horizontal
          data={dates}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.dateList}
          renderItem={({ item }) => (
            <TouchableOpacity
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
          )}
        />

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
                <View style={{ flex: 1 }}>
                  <Text style={styles.doctor}>Dr. Olivia Turner, M.D.</Text>

                  <Text style={styles.desc}>
                    Treatment and prevention of skin and photodermatitis.
                  </Text>
                  <Text style={styles.appointmentTime}>10 AM - 11 AM</Text>
                </View>

                <View style={styles.iconContainer}>
                  <View style={styles.check}>
                    <RightIcon style={styles.icon} />
                  </View>

                  <View style={styles.close}>
                    <WrongIcon style={styles.closeText} />
                  </View>
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
    paddingVertical: vs(12),
  },

  wrapper: {
    paddingHorizontal: sc(24),
  },

  dateList: {
    paddingBottom: vs(12),
  },
  dateCard: {
    width: ms(42),
    height: vs(60),
    borderRadius: ms(22),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: sc(10),
    backgroundColor: colors.white,
  },

  dateNumber: {
    fontSize: ms(16),
    fontWeight: '700',
  },

  dayText: {
    fontSize: ms(10),
    marginTop: vs(2),
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: ms(20),
    paddingHorizontal: sc(18),
    paddingVertical: vs(12),
  },

  todayText: {
    fontSize: ms(12),
    fontFamily: Fonts.Black,
    fontWeight: Fonts.Regular,
    marginBottom: vs(8),
    color: colors.primary,
    textAlign: 'center',
  },

  timeColumn: {
    width: sc(42),
  },

  time: {
    fontSize: ms(11),
    color: colors.primary,
    marginBottom: vs(8),
  },

  dottedLine: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    marginBottom: vs(8),
  },

  appointment: {
    marginTop: vs(6),
  },

  appointmentContent: {
    backgroundColor: colors.secondary,
    borderRadius: ms(14),
    paddingHorizontal: sc(12),
    paddingVertical: vs(10),
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  doctor: {
    fontSize: ms(13),
    fontWeight: '700',
    color: colors.primary,
  },

  desc: {
    fontSize: ms(10),
    lineHeight: ms(14),
    marginTop: vs(2),
  },
  appointmentTime: {
    marginTop: vs(6),
    fontFamily: Fonts.Bold,
  },

  iconContainer: {
    flexDirection: 'row',
    marginLeft: sc(8),
  },

  check: {
    width: ms(18),
    height: ms(18),
    borderRadius: ms(9),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  close: {
    width: ms(18),
    height: ms(18),
    borderRadius: ms(9),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginLeft: sc(4),
  },
  icon: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: ms(12),
  },

  closeText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: ms(14),
  },
});
