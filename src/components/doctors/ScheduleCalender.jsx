import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';

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

const ScheduleCalendar = ({ selectedDate, onSelectDate }) => {
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
    backgroundColor: '#DCE4FF',
    borderRadius: ms(22),
    padding: ms(16),
  },

  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vs(14),
  },

  monthLabel: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: ms(14),
    letterSpacing: 1,
    marginHorizontal: sc(14),
  },

  weekdayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vs(12),
  },

  weekdayPill: {
    backgroundColor: colors.primary,
    borderRadius: ms(14),
    paddingVertical: vs(5),
    paddingHorizontal: sc(8),
  },

  weekdayText: {
    color: colors.white,
    fontSize: ms(10),
    fontWeight: '700',
  },

  daysCard: {
    backgroundColor: colors.white,
    borderRadius: ms(18),
    paddingVertical: vs(10),
    paddingHorizontal: sc(4),
  },

  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dayCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vs(8),
  },

  dayCircle: {
    width: ms(30),
    height: ms(30),
    borderRadius: ms(15),
    alignItems: 'center',
    justifyContent: 'center',
  },

  dayCircleSelected: {
    backgroundColor: colors.primary,
  },

  dayText: {
    fontSize: ms(13),
    color: '#222',
    fontWeight: '500',
  },

  dayTextDisabled: {
    color: '#C2CAF0',
  },

  dayTextSelected: {
    color: colors.white,
    fontWeight: '700',
  },
});
