import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../themes/colors';

import CrossIocn from '../../assets/svg/cross_icon.svg';
import CorrectIcon from '../../assets/svg/correct_icon.svg';

import CalenderIcon from '../../assets/svg/calendar_icon.svg';
import ClockIcon from '../../assets/svg/clock.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import StarIconFilled from '../../assets/svg/filled_star.svg';
import { ms, sc, vs } from '../../utils/responsive';
import { Fonts } from '../../themes/font';
import { useNavigation } from '@react-navigation/native';

import FavoriteHeartIcon from '../../assets/svg/favorite_heart.svg';

import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';
import {
  fetchDoctors,
  selectDoctors,
  selectDoctorsLoading,
  toggleFavoriteDoctor,
} from '../../redux/slices/doctorsSlice';
import { useDispatch, useSelector } from 'react-redux';

const DoctorName = ({ selected }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const doctors = useSelector(selectDoctors);
  const loading = useSelector(selectDoctorsLoading);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const handleAddReview = doctor => {
    navigation.navigate('Review', {
      doctor,
    });
  };
  const handleCancel = doctor => {
    navigation.navigate('CancelAppointment', {
      doctor,
    });
  };

  const handleFavoriteToggle = item => {
    dispatch(toggleFavoriteDoctor(item.id));
  };

  return (
    <>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          data={doctors}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.avatar }} style={styles.image} />

                <View style={styles.infoCard}>
                  <Text numberOfLines={1} style={styles.name}>
                    {item.name}
                  </Text>

                  <Text style={styles.specialization}>{item.speciality}</Text>

                  {selected === 'Complete' && (
                    <View style={styles.actionContainer}>
                      <TouchableOpacity style={styles.ratingBtn}>
                        <StarIconFilled width={18} height={18} />
                        <Text style={styles.ratingText}>5</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.favoriteBtn}
                        onPress={() => handleFavoriteToggle(item)}
                      >
                        {item.isFavorite ? (
                          <FavoriteHeartIcon
                            width={11}
                            height={11}
                            color={colors.primary}
                          />
                        ) : (
                          <HeartIcon
                            width={11}
                            height={11}
                            color={colors.primary}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>

              <View style={styles.rightContainer}>
                {selected === 'Complete' && (
                  <View style={styles.completeSection}>
                    <TouchableOpacity style={styles.rebookBtn1}>
                      <Text style={styles.addReviewText1}>Re-Book</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.rebookBtn}
                      onPress={() => handleAddReview(item)}
                    >
                      <Text style={styles.addReviewText}>Add Review</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {selected === 'Upcoming' && (
                  <View>
                    <View style={styles.infoRow}>
                      <View style={styles.infoCardClock}>
                        <CalenderIcon width={12} height={12} />
                        <Text style={styles.infoText}>Sunday, 12 June</Text>
                      </View>

                      <View style={styles.infoCardClock}>
                        <ClockIcon width={12} height={12} />
                        <Text style={styles.infoText}>9:30 AM - 10:00 AM</Text>
                      </View>
                    </View>
                    <View style={styles.optionContainer}>
                      <View style={styles.reviewContainer}>
                        <TouchableOpacity style={styles.detailsBtn}>
                          <Text style={styles.addReviewText}>Deatails</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.iconContainer}>
                        <View style={styles.iconCircle}>
                          <CorrectIcon width={10} height={10} />
                        </View>

                        <TouchableOpacity
                          style={styles.iconCircle}
                          onPress={() => handleCancel(item)}
                        >
                          <CrossIocn
                            width={11}
                            height={11}
                            color={colors.primary}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
                <View>
                  {selected === 'Cancelled' && (
                    <>
                      <TouchableOpacity
                        style={styles.addReviewBtn}
                        onPress={() => handleAddReview(item)}
                      >
                        <Text style={styles.addReviewText}>Add Review</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
            </View>
          )}
        />
      )}
    </>
  );
};

export default DoctorName;

const styles = StyleSheet.create({
  container: {
    marginTop: Screen_SIZES_VerticalScale.eight,
    paddingBottom: vs(150),
    gap: Screen_SIZES_VerticalScale.twelve,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Screen_SIZES_VerticalScale.four,
    gap: Screen_SIZES_ModerateScale.six,
  },

  ratingBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: Screen_SIZES_ModerateScale.four,
    paddingHorizontal: 18,
  },
  favoriteBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: ms(6),
  },

  card: {
    backgroundColor: colors.secondary,
    borderRadius: Screen_SIZES_Scale.twenty,
    paddingVertical: Screen_SIZES_VerticalScale.eight,
    paddingHorizontal: Screen_SIZES_Scale.twelve,
  },
  loader: {
    height: vs(400),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  image: {
    width: ms(90),
    height: ms(90),
    borderRadius: Screen_SIZES_ModerateScale.hundered,
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: Screen_SIZES_VerticalScale.fourteen,
  },

  infoCard: {
    borderRadius: Screen_SIZES_Scale.fourteen,
    paddingHorizontal: Screen_SIZES_Scale.twelve,
    paddingVertical: Screen_SIZES_VerticalScale.four,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Screen_SIZES_ModerateScale.two,
  },

  infoCardClock: {
    gap: Screen_SIZES_ModerateScale.six,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: vs(8),
    paddingHorizontal: sc(10),
  },

  infoText: {
    color: '#2F63FF',
    fontSize: 12,
    fontWeight: '500',
  },

  name: {
    color: colors.primary,
    fontSize: ms(14),
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
    fontSize: ms(12),
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
    borderRadius: ms(12),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsBtn: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: Screen_SIZES_VerticalScale.six,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
  },
  rebookBtn1: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: Screen_SIZES_VerticalScale.six,
    alignItems: 'center',
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
    marginHorizontal: ms(6),
  },
  rebookBtn: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: Screen_SIZES_VerticalScale.six,
    alignItems: 'center',
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
    marginHorizontal: ms(6),
  },
  addReviewBtn: {
    backgroundColor: colors.primary,
    paddingVertical: Screen_SIZES_VerticalScale.six,
    alignItems: 'center',
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
  },
  addReviewText: {
    color: colors.white,
  },
  addReviewText1: {
    color: colors.primary,
  },
});
