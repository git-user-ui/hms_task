import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  AlarmClock,
  CalendarRange,
  CircleHelp,
  Heart,
  MessageCircleMore,
  Star,
} from 'lucide-react-native';

import Professional from '../../assets/professional.svg';

import { colors } from '../../themes/colors';
import { ms } from '../../utils/responsive';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';
import { toggleFavoriteDoctor } from '../../redux/slices/doctorsSlice';

const ProfileCard = ({ doctorsData, onSchedulePress, showActions = true }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteDoctor(doctorsData.id));
  };

  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <Image source={{ uri: doctorsData.avatar }} style={styles.image} />

        <View style={styles.right}>
          <View style={styles.badge}>
            <View style={styles.badgeImage}>
              <Professional width={16} height={16} />
            </View>

            <Text style={styles.badgeText}>
              {doctorsData.experience} Years{'\n'}Experience
            </Text>
          </View>

          <View style={styles.focusCard}>
            <Text style={styles.focusText}>
              <Text style={{ fontWeight: '700' }}>Focus:</Text>{' '}
              {doctorsData.speciality_info}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.nameCard}>
        <Text style={styles.name}>{doctorsData.name}</Text>

        <Text style={styles.speciality}>{doctorsData.speciality}</Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.smallChip}>
          <Star size={11} color="#F4B400" fill="#F4B400" />

          <Text>{doctorsData.rating}</Text>
        </View>

        <View style={styles.smallChip}>
          <MessageCircleMore size={11} />

          <Text>{doctorsData.reviews}</Text>
        </View>

        <View style={styles.timeChip}>
          <AlarmClock size={11} />

          <Text style={{ fontSize: 11 }}>Mon - Sat / 9 AM - 4 PM</Text>
        </View>
      </View>

      {showActions && (
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button} onPress={onSchedulePress}>
            <CalendarRange color="white" size={15} />

            <Text style={styles.buttonText}>Schedule</Text>
          </TouchableOpacity>

          <View style={styles.icons}>
            <CircleHelp size={18} color={colors.primary} />

            <CircleHelp size={18} color={colors.primary} />

            <Star size={18} color={colors.primary} />

            <TouchableOpacity onPress={handleToggleFavorite}>
              <Heart
                size={18}
                color={doctorsData.isFavorite ? colors.primary : colors.primary}
                fill={doctorsData.isFavorite ? colors.primary : 'none'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DCE4FF',
    borderRadius: Screen_SIZES_ModerateScale.twentyTwo,
    padding: Screen_SIZES_ModerateScale.sixteen,
    marginBottom: Screen_SIZES_VerticalScale.ten,
  },

  top: {
    flexDirection: 'row',
  },

  image: {
    width: Screen_SIZES_ModerateScale.oneFifty,
    height: Screen_SIZES_ModerateScale.oneFifty,
    borderRadius: Screen_SIZES_ModerateScale.hundered,
  },

  right: {
    flex: 1,
    marginLeft: Screen_SIZES_Scale.twelve,
  },

  badge: {
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.twenty,
    padding: Screen_SIZES_ModerateScale.eight,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeImage: {
    backgroundColor: colors.secondary,
    padding: Screen_SIZES_ModerateScale.four,
    borderRadius: Screen_SIZES_ModerateScale.twenty,
  },

  badgeText: {
    color: colors.white,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    marginLeft: Screen_SIZES_ModerateScale.six,
  },

  focusCard: {
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    padding: Screen_SIZES_ModerateScale.ten,
    marginTop: Screen_SIZES_ModerateScale.ten,
  },

  focusText: {
    color: colors.white,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    lineHeight: 16,
  },

  nameCard: {
    backgroundColor: colors.white,
    marginTop: Screen_SIZES_VerticalScale.fourteen,
    borderRadius: Screen_SIZES_ModerateScale.sixteen,
    alignItems: 'center',
    paddingVertical: Screen_SIZES_VerticalScale.eight,
  },

  name: {
    color: colors.primary,
    fontSize: Screen_SIZES_ModerateScale.sixteen,
    fontWeight: '700',
  },

  speciality: {
    color: '#666',
    fontSize: Screen_SIZES_ModerateScale.twelve,
    marginTop: Screen_SIZES_VerticalScale.two,
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Screen_SIZES_ModerateScale.twelve,
    alignItems: 'center',
  },

  smallChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: Screen_SIZES_ModerateScale.twenty,
    paddingHorizontal: Screen_SIZES_ModerateScale.ten,
    paddingVertical: Screen_SIZES_ModerateScale.five,
    gap: Screen_SIZES_ModerateScale.four,
  },

  timeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: Screen_SIZES_ModerateScale.twenty,
    paddingHorizontal: Screen_SIZES_ModerateScale.ten,
    paddingVertical: Screen_SIZES_ModerateScale.six,
    gap: Screen_SIZES_ModerateScale.four,
  },

  bottom: {
    marginTop: Screen_SIZES_ModerateScale.fourteen,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.twenty,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
    paddingVertical: Screen_SIZES_ModerateScale.eight,
  },

  buttonText: {
    color: colors.white,
    fontWeight: '600',
    marginHorizontal: Screen_SIZES_ModerateScale.six,
  },

  icons: {
    flexDirection: 'row',
    gap: Screen_SIZES_ModerateScale.twelve,
  },
});
