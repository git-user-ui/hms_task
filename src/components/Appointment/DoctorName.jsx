import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';

import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';

import CrossIcon from '../../assets/svg/cross_icon.svg';
import CorrectIcon from '../../assets/svg/correct_icon.svg';
import CalenderIcon from '../../assets/svg/calendar_icon.svg';
import ClockIcon from '../../assets/svg/clock.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import FavoriteHeartIcon from '../../assets/svg/favorite_heart.svg';
import StarIconFilled from '../../assets/svg/filled_star.svg';

import { ms, vs } from '../../utils/responsive';

import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const AppointmentList = ({
  loading,
  data,
  selected,
  onReview,
  refreshing,
  onRefresh,
  onCancel,
  onFavorite,
  onRebook,
  onDetails,
}) => {
  if (loading && !refreshing) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      refreshControl={
        <RefreshControl
          progressViewOffset={60}
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[colors.primary]}
          tintColor={colors.primary}
        />
      }
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.avatar }} style={styles.image} />

            <View style={styles.infoCard}>
              <Text numberOfLines={1} style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.specialization}>{item.speciality}</Text>

              {selected === 'Complete' && (
                <View style={styles.actionContainer}>
                  <View style={styles.ratingBtn}>
                    <StarIconFilled width={18} height={18} />
                    <Text style={styles.ratingText}>5</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.favoriteBtn}
                    onPress={() => onFavorite(item)}
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

          {selected === 'Complete' && (
            <View style={styles.completeSection}>
              <TouchableOpacity
                style={styles.rebookBtn1}
                onPress={() => onRebook(item)}
              >
                <Text style={styles.addReviewText1}>Re-Book</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.rebookBtn}
                onPress={() => onReview(item)}
              >
                <Text style={styles.addReviewText}>Add Review</Text>
              </TouchableOpacity>
            </View>
          )}

          {selected === 'Upcoming' && (
            <>
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
                <TouchableOpacity
                  style={styles.detailsBtn}
                  onPress={() => onDetails(item)}
                >
                  <Text style={styles.addReviewText}>Details</Text>
                </TouchableOpacity>

                <View style={styles.iconContainer}>
                  <View style={styles.iconCircle}>
                    <CorrectIcon width={10} height={10} />
                  </View>

                  <TouchableOpacity
                    style={styles.iconCircle}
                    onPress={() => onCancel(item)}
                  >
                    <CrossIcon width={11} height={11} color={colors.primary} />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}

          {selected === 'Cancelled' && (
            <TouchableOpacity
              style={styles.addReviewBtn}
              onPress={() => onReview(item)}
            >
              <Text style={styles.addReviewText}>Add Review</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    />
  );
};

export default AppointmentList;

const styles = StyleSheet.create({
  container: {
    marginTop: Screen_SIZES_VerticalScale.eight,
    paddingBottom: Screen_SIZES_VerticalScale.oneFifty,
    gap: Screen_SIZES_VerticalScale.twelve,
  },

  loader: {
    height: vs(400),
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: colors.secondary,
    borderRadius: Screen_SIZES_Scale.twenty,
    paddingVertical: Screen_SIZES_VerticalScale.eight,
    paddingHorizontal: Screen_SIZES_Scale.twelve,
  },

  imageContainer: {
    flexDirection: 'row',
    marginBottom: Screen_SIZES_VerticalScale.fourteen,
  },

  image: {
    width: ms(80),
    height: ms(80),
    borderRadius: 100,
  },

  infoCard: {
    paddingHorizontal: Screen_SIZES_Scale.twelve,
    paddingVertical: Screen_SIZES_VerticalScale.four,
  },

  name: {
    color: colors.primary,
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    fontFamily: Fonts.Medium,
    fontWeight: '500',
  },

  specialization: {
    marginTop: 2,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: colors.black,
  },

  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_ModerateScale.six,
    marginTop: 8,
  },

  ratingBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 18,
  },

  ratingText: {
    marginLeft: 5,
    color: colors.primary,
  },

  favoriteBtn: {
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 6,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  infoCardClock: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  infoText: {
    marginLeft: 5,
    fontSize: 12,
    color: colors.primary,
  },

  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },

  completeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rebookBtn: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 8,
  },

  rebookBtn1: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 8,
  },

  addReviewBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },

  addReviewText: {
    color: colors.white,
  },

  addReviewText1: {
    color: colors.primary,
  },

  iconContainer: {
    flexDirection: 'row',
    gap: 8,
  },

  iconCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
