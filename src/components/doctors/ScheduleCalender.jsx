import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

import { colors } from '../../themes/colors';
import { ms, vs } from '../../utils/responsive';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';
import { useNavigation } from '@react-navigation/native';

const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const MONTH_NAMES = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

const startOfDay = date => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

const isSameDay = (a, b) =>
  !!a &&
  !!b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const buildMonthGrid = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // getDay() is Sun(0)-Sat(6); shift so Mon = 0 ... Sun = 6
  const firstWeekdayIndex = (firstDay.getDay() + 6) % 7;

  const cells = [];

  for (let i = 0; i < firstWeekdayIndex; i++) {
    cells.push(null);
  }

  for (let day = 1; day <= lastDay.getDate(); day++) {
    cells.push(new Date(year, month, day));
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  const weeks = [];

  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  return weeks;
};

const ScheduleCalendar = ({ selectedDate, onSelectDate, doctorsData }) => {
  console.log(doctorsData);
  const navigation = useNavigation();
  const today = useMemo(() => startOfDay(new Date()), []);

  const [visibleMonth, setVisibleMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const isCurrentMonthVisible =
    visibleMonth.getFullYear() === today.getFullYear() &&
    visibleMonth.getMonth() === today.getMonth();

  const weeks = useMemo(
    () => buildMonthGrid(visibleMonth.getFullYear(), visibleMonth.getMonth()),
    [visibleMonth],
  );

  const goToPrevMonth = () => {
    if (isCurrentMonthVisible) return;

    setVisibleMonth(
      prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const goToNextMonth = () => {
    setVisibleMonth(
      prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const handleDayPress = date => {
    if (!date) return;
    if (startOfDay(date) < today) return;

    onSelectDate(date);
    navigation.navigate('Schedule', {
      doctors: doctorsData,
    });
  };

  return (
    <View style={styles.wrapper}>
      {/* Month navigation */}
      <View style={styles.monthNav}>
        <TouchableOpacity
          onPress={goToPrevMonth}
          disabled={isCurrentMonthVisible}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <ChevronLeft
            size={20}
            color={isCurrentMonthVisible ? '#AEB9EE' : colors.primary}
          />
        </TouchableOpacity>

        <Text style={styles.monthLabel}>
          {MONTH_NAMES[visibleMonth.getMonth()]}
        </Text>

        <TouchableOpacity
          onPress={goToNextMonth}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <ChevronRight size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Weekday pills */}
      <View style={styles.weekdayRow}>
        {WEEKDAYS.map(day => (
          <View key={day} style={styles.weekdayPill}>
            <Text style={styles.weekdayText}>{day}</Text>
          </View>
        ))}
      </View>

      {/* Days grid */}
      <View style={styles.daysCard}>
        {weeks.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekRow}>
            {week.map((date, dayIndex) => {
              const disabled = !date || startOfDay(date) < today;
              const selected = isSameDay(date, selectedDate);

              return (
                <TouchableOpacity
                  key={dayIndex}
                  style={styles.dayCell}
                  disabled={disabled}
                  onPress={() => handleDayPress(date)}
                  activeOpacity={0.7}
                >
                  {date && (
                    <View
                      style={[
                        styles.dayCircle,
                        selected && styles.dayCircleSelected,
                      ]}
                    >
                      <Text
                        style={[
                          styles.dayText,
                          disabled && styles.dayTextDisabled,
                          selected && styles.dayTextSelected,
                        ]}
                      >
                        {date.getDate()}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ScheduleCalendar;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.secondary,
    borderRadius: Screen_SIZES_ModerateScale.twentyTwo,
    padding: Screen_SIZES_ModerateScale.sixteen,
  },

  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Screen_SIZES_VerticalScale.fourteen,
  },

  monthLabel: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    letterSpacing: 1,
    marginHorizontal: Screen_SIZES_Scale.fourteen,
  },

  weekdayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Screen_SIZES_VerticalScale.twelve,
  },

  weekdayPill: {
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.fourteen,
    paddingVertical: vs(5),
    paddingHorizontal: Screen_SIZES_Scale.eight,
  },

  weekdayText: {
    color: colors.white,
    fontSize: Screen_SIZES_ModerateScale.ten,
    fontWeight: '700',
  },

  daysCard: {
    backgroundColor: colors.white,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    paddingVertical: Screen_SIZES_VerticalScale.ten,
    paddingHorizontal: Screen_SIZES_Scale.four,
  },

  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dayCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Screen_SIZES_VerticalScale.eight,
  },

  dayCircle: {
    width: Screen_SIZES_ModerateScale.thirty,
    height: Screen_SIZES_ModerateScale.thirty,
    borderRadius: Screen_SIZES_ModerateScale.sixteen,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dayCircleSelected: {
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
  },

  dayText: {
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: '#222',
    fontWeight: '500',
  },

  dayTextDisabled: {
    color: '#A9BCFE',
  },

  dayTextSelected: {
    color: colors.white,
    fontWeight: '700',
  },
});
