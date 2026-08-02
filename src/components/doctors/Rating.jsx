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
    marginHorizontal: sc(30),
    marginBottom: vs(14),
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: sc(22),
    padding: sc(8),
    alignItems: 'center',
  },

  avatar: {
    width: sc(72),
    height: sc(72),
    borderRadius: sc(36),
  },

  rightContainer: {
    flex: 1,
    marginLeft: ms(12),
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
    width: sc(20),
    height: sc(20),
    borderRadius: sc(14),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ms(6),
  },

  badgeIcon: {
    width: sc(12),
    height: sc(12),
    resizeMode: 'contain',
  },

  badgeText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: ms(12),
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: ms(10),
    paddingVertical: vs(4),
    borderRadius: sc(20),
  },

  ratingText: {
    marginLeft: 4,
    color: colors.primary,
    fontWeight: '700',
  },

  infoCard: {
    marginTop: vs(8),
    backgroundColor: '#FFF',
    borderRadius: sc(16),
    padding: sc(8),
  },

  name: {
    color: colors.primary,
    fontSize: ms(14),
    fontWeight: '700',
  },

  specialization: {
    marginTop: 2,
    fontSize: ms(12),
  },

  qualification: {
    marginTop: 2,
    fontSize: ms(11),
    color: '#666',
  },

  bottomRow: {
    marginTop: vs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: ms(20),
    paddingVertical: vs(4),
    borderRadius: sc(18),
  },

  infoText: {
    color: '#FFF',
    fontWeight: '700',
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(4),
  },

  icon: {
    borderRadius: sc(13),
    backgroundColor: colors.white,
    padding: sc(4),
  },
});
