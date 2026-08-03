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
import { ms, sc } from '../../utils/responsive';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
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
            <Professional width={16} height={16} />

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
    borderRadius: 22,
    padding: Screen_SIZES_ModerateScale.sixteen,
  },

  top: {
    flexDirection: 'row',
  },

  image: {
    width: ms(140),
    height: ms(140),
    borderRadius: 100,
  },

  right: {
    flex: 1,
    marginLeft: Screen_SIZES_Scale.twelve,
  },

  badge: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  badgeText: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 6,
  },

  focusCard: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    padding: 10,
    marginTop: 10,
  },

  focusText: {
    color: colors.white,
    fontSize: 11,
    lineHeight: 16,
  },

  nameCard: {
    backgroundColor: colors.white,
    marginTop: 14,
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 8,
  },

  name: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },

  speciality: {
    color: '#666',
    fontSize: 12,
    marginTop: 2,
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    alignItems: 'center',
  },

  smallChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 4,
  },

  timeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 4,
  },

  bottom: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 8,
  },

  buttonText: {
    color: colors.white,
    fontWeight: '600',
    marginHorizontal: 6,
  },

  icons: {
    flexDirection: 'row',
    gap: 12,
  },
});
