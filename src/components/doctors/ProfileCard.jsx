import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {
  AlarmClock,
  CalendarRange,
  Heart,
  MessageCircleMore,
  Star,
  CircleHelp,
} from 'lucide-react-native';

import Professional from '../../assets/professional.svg';

import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      {/* Top */}

      <View style={styles.top}>
        <Image
          source={require('../../assets/Images/doctor_1.png')}
          style={styles.image}
        />

        <View style={styles.right}>
          <View style={styles.badge}>
            <Professional width={16} height={16} style={styles.pImage} />

            <Text style={styles.badgeText}>15 Years{'\n'}Experience</Text>
          </View>

          <View style={styles.focusCard}>
            <Text style={styles.focusText}>
              <Text style={{ fontWeight: '700' }}>Focus:</Text> Hormonal
              imbalances on skin conditions, acne, hirsutism and other skin
              disorders.
            </Text>
          </View>
        </View>
      </View>

      {/* Name */}

      <View style={styles.nameCard}>
        <Text style={styles.name}>Dr. Alexander Bennett, Ph.D.</Text>

        <Text style={styles.speciality}>Dermato-Genetics</Text>
      </View>

      {/* Stats */}

      <View style={styles.stats}>
        <View style={styles.smallChip}>
          <Star size={11} color="#F4B400" fill="#F4B400" />
          <Text>5</Text>
        </View>

        <View style={styles.smallChip}>
          <MessageCircleMore size={11} />
          <Text>40</Text>
        </View>

        <View style={styles.timeChip}>
          <AlarmClock size={11} />
          <Text style={{ fontSize: 11 }}>Mon-Sat / 9:00AM - 5:00PM</Text>
        </View>
      </View>

      {/* Bottom */}

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <CalendarRange color="white" size={15} />

          <Text style={styles.buttonText}>Schedule</Text>
        </TouchableOpacity>

        <View style={styles.icons}>
          <CircleHelp size={18} color={colors.primary} />

          <CircleHelp size={18} color={colors.primary} />

          <Star size={18} color={colors.primary} />

          <Heart size={18} color={colors.primary} />
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DCE4FF',
    borderRadius: 20,
    padding: sc(16),
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    width: ms(140),
    height: ms(140),
    borderRadius: 100,
  },

  right: {
    flex: 1,
    marginLeft: sc(12),
    justifyContent: 'space-between',
  },

  badge: {
    backgroundColor: colors.primary,
    borderRadius: sc(18),
    padding: sc(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pImage: {
    backgroundColor: colors.secondary,
    borderRadius: 13,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },

  focusCard: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: sc(10),
    marginTop: sc(10),
  },

  focusText: {
    color: 'white',
    fontSize: 11,
    lineHeight: 16,
  },

  nameCard: {
    backgroundColor: 'white',
    marginTop: sc(15),
    borderRadius: 15,
    paddingVertical: sc(10),
    alignItems: 'center',
  },

  name: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '700',
  },

  speciality: {
    color: '#555',
    fontSize: 13,
  },

  stats: {
    flexDirection: 'row',
    marginTop: sc(12),
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  smallChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 5,
  },

  timeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 5,
  },

  bottom: {
    marginTop: sc(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
  },

  icons: {
    flexDirection: 'row',
    gap: 12,
  },
});
