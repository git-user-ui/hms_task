import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { ms, sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

import StarIcon from '../../assets/svg/star_icon.svg';
import ChatIcon from '../../assets/svg/chat_home_icon.svg';
import QuestionIcon from '../../assets/svg/question_icon.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import FavoriteHeartIcon from '../../assets/svg/favorite_heart.svg';
import { Fonts } from '../../themes/font';
import { ROUTES, ROUTE_PARAMS } from '../../constants/routes';
import { toggleFavoriteDoctor } from '../../redux/slices/doctorsSlice';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';
import HomeAppointment from './HomeAppointment';

const HomeDoctorsList = ({ doctors }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleToggleFavorite = item => {
    dispatch(toggleFavoriteDoctor(item.id));
  };

  const handleInfo = item => {
    navigation.navigate(ROUTES.DOCTOR_INFO, {
      [ROUTE_PARAMS.DOCTORS]: item,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={HomeAppointment}
        contentContainerStyle={styles.container}
        data={doctors}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.card}
            onPress={() => handleInfo(item)}
          >
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

                  <TouchableOpacity
                    style={styles.iconCircle}
                    activeOpacity={0.8}
                    onPress={() => handleToggleFavorite(item)}
                  >
                    {item.isFavorite ? (
                      <FavoriteHeartIcon width={11} height={11} />
                    ) : (
                      <HeartIcon width={11} height={11} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeDoctorsList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Screen_SIZES_Scale.fourteen,
    marginTop: Screen_SIZES_VerticalScale.eight,
    paddingBottom: vs(130),
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
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
