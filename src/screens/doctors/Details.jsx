import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { useRoute } from '@react-navigation/native';

import StarIcon from '../../assets/svg/star_icon.svg';
import ChatIcon from '../../assets/svg/chat_home_icon.svg';
import QuestionIcon from '../../assets/svg/question_icon.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import { ms, sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';

import CrossIocn from '../../assets/svg/cross_icon.svg';
import CorrectIcon from '../../assets/svg/correct_icon.svg';

const Details = () => {
  const route = useRoute();

  const item = route.params?.doctors;
  return (
    <>
      <ProfileHeader header={'All Appointment'} />
      <View style={styles.container}>
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.avatar }} style={styles.image} />

          <View style={styles.rightContainer}>
            <View style={styles.infoCard}>
              <Text numberOfLines={1} style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.specialization}>{item.speciality}</Text>
            </View>

            <View style={styles.optionContainer}>
              <View style={styles.reviewContainer}>
                <View style={styles.badge}>
                  <StarIcon width={11} height={11} />

                  <Text style={styles.badgeText}>{item.rating}</Text>
                </View>

                <View style={styles.badge}>
                  <ChatIcon width={11} height={11} />

                  <Text style={styles.badgeText}>{item.reviews}</Text>
                </View>
              </View>

              <View style={styles.iconContainer}>
                <View style={styles.iconCircle}>
                  <QuestionIcon width={10} height={10} />
                </View>

                <View style={styles.iconCircle}>
                  <HeartIcon width={11} height={11} />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.dateContainer}>
          <View style={styles.date}>
            <Text>Month 24, Year</Text>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconCircle}>
              <CorrectIcon width={10} height={10} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconCircle}>
              <CrossIocn width={11} height={11} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>WED, 10:00 AM</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.details}>
          <View style={styles.nameDetails}>
            <Text>Booking For </Text>
            <Text>Another Person</Text>
          </View>
          <View style={styles.nameDetails}>
            <Text>Booking For </Text>
            <Text>Another Person</Text>
          </View>
          <View style={styles.nameDetails}>
            <Text>Booking For </Text>
            <Text>Another Person</Text>
          </View>
          <View style={styles.nameDetails}>
            <Text>Booking For </Text>
            <Text>Another Person</Text>
          </View>
        </View>

        <View style={styles.line} />

        <View>
          <Text>Problem</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
      </View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sc(30),
    marginTop: vs(8),
    paddingBottom: vs(330),
    gap: vs(12),
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: sc(20),
    paddingVertical: vs(8),
    paddingHorizontal: sc(12),
  },

  image: {
    width: ms(80),
    height: ms(80),
    borderRadius: ms(100),
  },

  rightContainer: {
    flex: 1,
    marginLeft: sc(12),
  },

  infoCard: {
    backgroundColor: colors.white,
    borderRadius: sc(14),
    paddingHorizontal: sc(12),
    paddingVertical: vs(4),
  },

  name: {
    color: colors.primary,
    fontSize: ms(15),
    fontWeight: '500',
    fontFamily: Fonts.Medium,
  },

  specialization: {
    marginTop: 2,
    fontSize: ms(12),
    color: '#555',
  },

  optionContainer: {
    marginTop: vs(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sc(6),
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: sc(20),
    paddingHorizontal: sc(8),
    height: vs(22),
    width: sc(50),
  },

  badgeText: {
    marginLeft: sc(4),
    fontSize: ms(11),
    color: colors.primary,
    fontWeight: '600',
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sc(6),
  },

  iconCircle: {
    width: ms(22),
    height: ms(22),
    borderRadius: ms(11),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderWidth: 1,
    backgroundColor: colors.primary,
    borderRadius: ms(18),
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    backgroundColor: colors.primary,
    paddingVertical: ms(4),
    paddingHorizontal: ms(14),
    borderRadius: ms(18),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sc(6),
  },

  iconCircle: {
    width: ms(22),
    height: ms(22),
    borderRadius: ms(11),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    gap: ms(10),
  },
  nameDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
