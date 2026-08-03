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
import { ROUTE_PARAMS } from '../../constants/routes';

const Details = () => {
  const route = useRoute();

  const item = route.params?.[ROUTE_PARAMS.DOCTORS];

  if (!item) {
    return null;
  }

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

          <View style={styles.dateIconContainer}>
            <TouchableOpacity style={styles.dateIconCircle}>
              <CorrectIcon width={10} height={10} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.dateIconCircle}>
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
    marginHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_VerticalScale.eight,
    paddingBottom: vs(330),
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
    width: ms(80),
    height: ms(80),
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
    fontSize: ms(15),
    fontWeight: '500',
    fontFamily: Fonts.Medium,
  },

  specialization: {
    marginTop: 2,
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
    width: sc(50),
  },

  badgeText: {
    marginLeft: Screen_SIZES_Scale.four,
    fontSize: ms(11),
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
    borderRadius: ms(11),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderWidth: 1,
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    backgroundColor: colors.primary,
    paddingVertical: Screen_SIZES_ModerateScale.four,
    paddingHorizontal: Screen_SIZES_ModerateScale.fourteen,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
  },
  // Bug fix: this used to reuse the `iconContainer`/`iconCircle` keys above,
  // which silently overwrote them (JS object literals keep only the last
  // key) — so both the badges above *and* these date-row buttons ended up
  // sharing whichever style was defined last instead of their own look.
  dateIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_Scale.six,
  },

  dateIconCircle: {
    width: Screen_SIZES_ModerateScale.twentyTwo,
    height: Screen_SIZES_ModerateScale.twentyTwo,
    borderRadius: ms(11),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    gap: Screen_SIZES_ModerateScale.ten,
  },
  nameDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
