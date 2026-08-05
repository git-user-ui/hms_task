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
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const ScheduleHeader = ({ isFavorite, onToggleFavorite, onHelpPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconCircle}
      >
        <ChevronLeft size={24} color={colors.primary} />
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
        <TouchableOpacity style={styles.help} onPress={onHelpPress}>
          <CircleHelp size={16} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.help} onPress={onToggleFavorite}>
          <Heart
            size={16}
            color={isFavorite ? colors.primary : colors.primary}
            fill={isFavorite ? colors.primary : 'none'}
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
    paddingHorizontal: Screen_SIZES_Scale.twenty,
    paddingVertical: Screen_SIZES_VerticalScale.ten,
    gap: Screen_SIZES_Scale.four,
  },

  iconCircle: {
    width: Screen_SIZES_ModerateScale.twentyTwo,
    height: Screen_SIZES_ModerateScale.twentyTwo,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconCircleFilled: {
    width: Screen_SIZES_ModerateScale.thirty,
    height: Screen_SIZES_ModerateScale.thirty,
    borderRadius: Screen_SIZES_ModerateScale.sixteen,
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
    gap: Screen_SIZES_Scale.six,
  },
  help: {
    backgroundColor: colors.secondary,
    padding: Screen_SIZES_ModerateScale.six,
    borderRadius: Screen_SIZES_ModerateScale.twenty,
  },
});
