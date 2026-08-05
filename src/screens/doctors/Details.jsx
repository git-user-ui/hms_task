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
import CorrectIcon from '../../assets/svg/white_correct_icon.svg';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const Details = () => {
  const route = useRoute();

  const item = route.params?.doctor;
  console.log();
  if (!item) {
    return null;
  }

  return (
    <>
      <ProfileHeader header={'Your Appointment'} />
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
                  <HeartIcon width={11} height={11} color={colors.primary} />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.dateContainer}>
          <View style={styles.date}>
            <Text style={styles.monthText}>Month 24, Year</Text>
          </View>

          <View style={styles.dateIconContainer}>
            <TouchableOpacity style={styles.dateIconCircle}>
              <CorrectIcon width={10} height={10} s />
            </TouchableOpacity>

            <TouchableOpacity style={styles.dateIconCircle}>
              <CrossIocn width={11} height={11} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>WED, 10:00 AM</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.details}>
          <View style={styles.nameDetails}>
            <Text style={styles.booking}>Booking For </Text>
            <Text style={styles.bookingText}>Another Person</Text>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.descContainer}>
          <Text style={styles.problemDesc}>Problem</Text>
          <Text style={styles.problemDesc}>
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
    marginHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_VerticalScale.eight,
    gap: Screen_SIZES_VerticalScale.twelve,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: Screen_SIZES_Scale.twenty,
    paddingVertical: Screen_SIZES_VerticalScale.eight,
    paddingHorizontal: Screen_SIZES_Scale.twelve,
  },

  image: {
    width: Screen_SIZES_ModerateScale.eighty,
    height: Screen_SIZES_ModerateScale.eighty,
    borderRadius: Screen_SIZES_ModerateScale.hundered,
  },

  rightContainer: {
    flex: 1,
    marginLeft: Screen_SIZES_Scale.twelve,
  },

  infoCard: {
    backgroundColor: colors.white,
    borderRadius: Screen_SIZES_Scale.fourteen,
    paddingHorizontal: Screen_SIZES_Scale.twelve,
    paddingVertical: Screen_SIZES_VerticalScale.four,
  },

  name: {
    color: colors.primary,
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    fontWeight: '500',
    fontFamily: Fonts.Medium,
  },

  specialization: {
    marginTop: Screen_SIZES_VerticalScale.two,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: '#555',
  },

  optionContainer: {
    marginTop: Screen_SIZES_VerticalScale.eight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_Scale.six,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: Screen_SIZES_Scale.twenty,
    paddingHorizontal: Screen_SIZES_Scale.eight,
    height: Screen_SIZES_VerticalScale.twentyTwo,
    width: Screen_SIZES_Scale.fifty,
  },

  badgeText: {
    marginLeft: Screen_SIZES_Scale.four,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: colors.primary,
    fontWeight: '600',
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_Scale.six,
  },

  iconCircle: {
    width: Screen_SIZES_ModerateScale.twentyTwo,
    height: Screen_SIZES_ModerateScale.twentyTwo,
    borderRadius: Screen_SIZES_ModerateScale.twelve,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    marginVertical: Screen_SIZES_VerticalScale.sixteen,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    backgroundColor: colors.primary,
    paddingVertical: Screen_SIZES_ModerateScale.four,
    paddingHorizontal: Screen_SIZES_ModerateScale.twenty,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
  },
  monthText: {
    color: colors.white,
  },

  dateIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_Scale.six,
  },

  dateIconCircle: {
    width: Screen_SIZES_ModerateScale.twentyTwo,
    height: Screen_SIZES_ModerateScale.twentyTwo,
    borderRadius: Screen_SIZES_ModerateScale.twelve,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    paddingHorizontal: Screen_SIZES_Scale.ten,
  },
  details: {
    gap: Screen_SIZES_ModerateScale.ten,
    paddingHorizontal: Screen_SIZES_Scale.ten,
  },
  nameDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  booking: {
    fontWeight: '300',
    fontFamily: Fonts.Light,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: colors.black,
  },
  bookingText: {
    fontWeight: '500',
    fontFamily: Fonts.Medium,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: colors.black,
  },
  descContainer: {
    paddingHorizontal: Screen_SIZES_Scale.ten,

    gap: Screen_SIZES_ModerateScale.ten,
  },
  problemDesc: {
    fontWeight: '300',
    fontFamily: Fonts.Light,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: colors.black,
  },
});
