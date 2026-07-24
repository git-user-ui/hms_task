import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ms, sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import {
  CalendarRangeIcon,
  CircleQuestionMark,
  Heart,
  Info,
  Star,
} from 'lucide-react-native';
import { doctorsData } from '../../utils/doctorsdata';

const options = [
  {
    id: 1,
    icons: <CalendarRangeIcon size={18} />,
  },
  {
    id: 2,
    icons: <Info size={18} />,
  },
  {
    id: 3,
    icons: <CircleQuestionMark size={18} />,
  },
  {
    id: 4,
    icons: <Heart size={18} />,
  },
];

const Rating = () => {
  return (
    <ScrollView style={styles.top}>
      {doctorsData.map(doctor => (
        <View style={styles.container} key={doctor.id}>
          <Image source={doctor.image} style={styles.avatar} />

          <View style={styles.rightContainer}>
            {/* Top */}

            <View style={styles.topRow}>
              <View style={styles.badge}>
                <View style={styles.badgeCircle}>
                  <Image
                    source={require('../../assets/white_professional.png')}
                    style={styles.badgeIcon}
                  />
                </View>

                <Text style={styles.badgeText}>Professional Doctor</Text>
              </View>

              <View style={styles.rating}>
                <Star style={styles.star} size={16} />
                <Text style={styles.ratingText}>{doctor.rating}</Text>
              </View>
            </View>

            {/* Card */}

            <View style={styles.infoCard}>
              <Text numberOfLines={1} style={styles.name}>
                {doctor.name}
              </Text>

              <Text style={styles.specialization}>{doctor.specialization}</Text>
            </View>

            {/* Bottom */}

            <View style={styles.bottomRow}>
              <TouchableOpacity style={styles.infoButton}>
                <Text style={styles.infoText}>Info</Text>
              </TouchableOpacity>

              <View style={styles.actions}>
                {options.map(option => (
                  <TouchableOpacity key={option.id} style={styles.icon}>
                    {option.icons}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Rating;

const styles = StyleSheet.create({
  top: { marginBottom: vs(80) },
  container: {
    marginTop: vs(10),
    marginHorizontal: sc(30),
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    borderRadius: sc(22),
    padding: sc(10),
    alignItems: 'center',
    marginBottom: vs(14),
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
    width: sc(28),
    height: sc(28),
    borderRadius: sc(14),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ms(6),
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
    padding: sc(10),
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

  bottomRow: {
    marginTop: vs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: ms(20),
    paddingVertical: vs(8),
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
