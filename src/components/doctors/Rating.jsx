import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { ms, sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

import Badge from '../../assets/svg/professional_badge.svg';

import {
  CalendarRangeIcon,
  CircleQuestionMark,
  Heart,
  Info,
  Star,
} from 'lucide-react-native';

import { ROUTES, ROUTE_PARAMS } from '../../constants/routes';
import { toggleFavoriteDoctor } from '../../redux/slices/doctorsSlice';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const Rating = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleInfo = () => {
    navigation.navigate(ROUTES.DOCTOR_INFO, {
      [ROUTE_PARAMS.DOCTORS]: item,
    });
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteDoctor(item.id));
  };

  const actions = [
    {
      id: 1,
      icon: <CalendarRangeIcon size={18} />,
      onPress: undefined,
    },
    {
      id: 2,
      icon: <Info size={18} />,
      onPress: handleInfo,
    },
    {
      id: 3,
      icon: <CircleQuestionMark size={18} />,
      onPress: undefined,
    },
    {
      id: 4,
      icon: (
        <Heart
          size={18}
          color={item.isFavorite ? '#FF4D67' : colors.primary}
          fill={item.isFavorite ? '#FF4D67' : 'none'}
        />
      ),
      onPress: handleToggleFavorite,
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.avatar,
        }}
        style={styles.avatar}
      />

      <View style={styles.rightContainer}>
        {/* Top */}

        <View style={styles.topRow}>
          <View style={styles.badge}>
            <View style={styles.badgeCircle}>
              <Badge
                source={require('../../assets/white_professional.png')}
                style={styles.badgeIcon}
              />
            </View>

            <Text style={styles.badgeText}>Professional Doctor</Text>
          </View>

          <View style={styles.rating}>
            <Star size={16} fill="#F6B800" color="#F6B800" />

            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>

        {/* Middle */}

        <View style={styles.infoCard}>
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.specialization}>{item.speciality}</Text>
        </View>

        {/* Bottom */}

        <View style={styles.bottomRow}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.infoButton}
            onPress={handleInfo}
          >
            <Text style={styles.infoText}>Info</Text>
          </TouchableOpacity>

          <View style={styles.actions}>
            {actions.map(action => (
              <TouchableOpacity
                key={action.id}
                activeOpacity={0.8}
                style={styles.icon}
                onPress={action.onPress}
                disabled={!action.onPress}
              >
                {action.icon}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Screen_SIZES_Scale.thirty,
    marginBottom: Screen_SIZES_VerticalScale.fourteen,
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: Screen_SIZES_Scale.twentyTwo,
    padding: Screen_SIZES_Scale.eight,
    alignItems: 'center',
  },

  avatar: {
    width: sc(72),
    height: sc(72),
    borderRadius: sc(36),
  },

  rightContainer: {
    flex: 1,
    marginLeft: Screen_SIZES_ModerateScale.twelve,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },

  badgeCircle: {
    width: Screen_SIZES_Scale.twenty,
    height: Screen_SIZES_Scale.twenty,
    borderRadius: Screen_SIZES_Scale.fourteen,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Screen_SIZES_ModerateScale.six,
  },

  badgeIcon: {
    width: Screen_SIZES_Scale.twelve,
    height: Screen_SIZES_Scale.twelve,
    resizeMode: 'contain',
  },

  badgeText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: Screen_SIZES_ModerateScale.twelve,
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: Screen_SIZES_ModerateScale.ten,
    paddingVertical: Screen_SIZES_VerticalScale.four,
    borderRadius: Screen_SIZES_Scale.twenty,
  },

  ratingText: {
    marginLeft: 4,
    color: colors.primary,
    fontWeight: '700',
  },

  infoCard: {
    marginTop: Screen_SIZES_VerticalScale.eight,
    backgroundColor: '#FFF',
    borderRadius: Screen_SIZES_Scale.sixteen,
    padding: Screen_SIZES_Scale.eight,
  },

  name: {
    color: colors.primary,
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    fontWeight: '700',
  },

  specialization: {
    marginTop: 2,
    fontSize: Screen_SIZES_ModerateScale.twelve,
  },

  qualification: {
    marginTop: 2,
    fontSize: ms(11),
    color: '#666',
  },

  bottomRow: {
    marginTop: Screen_SIZES_VerticalScale.ten,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: Screen_SIZES_ModerateScale.twenty,
    paddingVertical: Screen_SIZES_VerticalScale.four,
    borderRadius: Screen_SIZES_Scale.eighteen,
  },

  infoText: {
    color: '#FFF',
    fontWeight: '700',
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_ModerateScale.four,
  },

  icon: {
    borderRadius: sc(13),
    backgroundColor: colors.white,
    padding: Screen_SIZES_Scale.four,
  },
});
