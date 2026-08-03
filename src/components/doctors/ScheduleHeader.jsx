import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  CalendarRange,
  ChevronLeft,
  CircleHelp,
  Heart,
  MessageCircleMore,
  Phone,
  Video,
} from 'lucide-react-native';

import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';

const ScheduleHeader = ({ isFavorite, onToggleFavorite, onHelpPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconCircle}
      >
        <ChevronLeft size={20} color={colors.primary} />
      </TouchableOpacity>

      <View style={styles.pill}>
        <CalendarRange size={14} color={colors.white} />
        <Text style={styles.pillText}>Schedule</Text>
      </View>

      <TouchableOpacity style={styles.iconCircleFilled}>
        <Phone size={15} color={colors.white} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconCircleFilled}>
        <Video size={15} color={colors.white} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconCircleFilled}>
        <MessageCircleMore size={15} color={colors.white} />
      </TouchableOpacity>

      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={onHelpPress}>
          <CircleHelp size={20} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onToggleFavorite}>
          <Heart
            size={20}
            color={isFavorite ? '#FF4D67' : colors.primary}
            fill={isFavorite ? '#FF4D67' : 'none'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScheduleHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF1FF',
    paddingHorizontal: Screen_SIZES_Scale.twenty,
    paddingVertical: Screen_SIZES_VerticalScale.fourteen,
    gap: Screen_SIZES_Scale.ten,
  },

  iconCircle: {
    width: ms(34),
    height: ms(34),
    borderRadius: ms(17),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconCircleFilled: {
    width: Screen_SIZES_ModerateScale.thirty,
    height: Screen_SIZES_ModerateScale.thirty,
    borderRadius: ms(15),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.twenty,
    paddingVertical: Screen_SIZES_VerticalScale.eight,
    paddingHorizontal: Screen_SIZES_Scale.fourteen,
    gap: Screen_SIZES_Scale.six,
  },

  pillText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: Screen_SIZES_ModerateScale.twelve,
  },

  rightIcons: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: Screen_SIZES_Scale.fourteen,
  },
});
