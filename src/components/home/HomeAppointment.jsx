import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';
import { Fonts } from '../../themes/font';
import RightIcon from '../../assets/svg/right_icon.svg';
import WrongIcon from '../../assets/svg/wrong_icon.svg';

const HomeAppointment = () => {
  // Function For Dates
  const getWeekDates = () => {
    const today = new Date();
    const start = new Date(today);

    const day = today.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    start.setDate(today.getDate() + diff);

    return Array.from({ length: 6 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);

      return {
        id: index.toString(),
        day: date.getDate().toString(),
        week: date
          .toLocaleDateString('en-US', { weekday: 'short' })
          .toUpperCase(),
        active: date.toDateString() === today.toDateString(),
      };
    });
  };

  const dates = getWeekDates();
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
    paddingVertical: vs(12),
  },

  wrapper: {
    paddingHorizontal: sc(24),
  },

  dateList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: vs(12),
  },
  dateCard: {
    width: ms(42),
    height: vs(60),
    borderRadius: ms(22),
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
    paddingHorizontal: sc(14),
    paddingVertical: vs(12),
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

  check: {
    width: ms(20),
    height: ms(20),
    borderRadius: ms(10),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  close: {
    width: ms(20),
    height: ms(20),
    borderRadius: ms(10),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
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
