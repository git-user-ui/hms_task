import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';

import StarIcon from '../../assets/svg/blue_star.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import Female from '../../assets/svg/female_icon.svg';
import Male from '../../assets/svg/male_icon.svg';

import SearchIcon from '../../assets/svg/search_icon.svg';
import FilterIcon from '../../assets/svg/filter_icon.svg';
import { ms, sc, vs } from '../../utils/responsive';
import { DOCTOR_FILTERS } from '../../constants/filters';

const filters = [
  {
    key: DOCTOR_FILTERS.AZ,
    label: DOCTOR_FILTERS.AZ,
  },
  {
    key: DOCTOR_FILTERS.RATING,
    icon: <StarIcon />,
  },
  {
    key: DOCTOR_FILTERS.FAVORITE,
    icon: <HeartIcon width={12} height={12} />,
  },
  {
    key: DOCTOR_FILTERS.FEMALE,
    icon: <Female />,
  },
  {
    key: DOCTOR_FILTERS.MALE,
    icon: <Male />,
  },
];

const IconButton = ({ icon, onPress }) => (
  <Pressable
    onPress={onPress}
    hitSlop={5}
    style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
  >
    {icon}
  </Pressable>
);

const DoctorsHeading = ({ heading, selectedFilter, onFilterChange }) => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.topContainer}>
        <Pressable
          onPress={handleBackButton}
          hitSlop={5}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.pressed,
          ]}
        >
          <Image
            source={require('../../assets/left_arrow.png')}
            style={styles.backIcon}
          />
        </Pressable>

        <Text style={styles.headingText}>{heading}</Text>

        <View style={styles.filters}>
          <IconButton icon={<SearchIcon />} />
          <IconButton icon={<FilterIcon />} />
        </View>
      </View>

      {/* Sort */}

      <View style={styles.sortContainer}>
        <Text style={styles.sortByText}>Sort By</Text>

        {filters.map(filter => {
          const active = selectedFilter === filter.key;

          return (
            <Pressable
              key={filter.key}
              onPress={() => onFilterChange(filter.key)}
              style={[
                filter.key === 'A-Z'
                  ? styles.charFilter
                  : styles.sortIconButton,

                active && styles.activeButton,
              ]}
            >
              {filter.label ? (
                <Text style={[styles.char, !active && styles.inactiveText]}>
                  {filter.label}
                </Text>
              ) : (
                filter.icon
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default DoctorsHeading;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    paddingVertical: Screen_SIZES_VerticalScale.ten,
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: Screen_SIZES_Scale.twelve,
    height: Screen_SIZES_Scale.twentyTwo,
    justifyContent: 'center',
  },

  backIcon: {
    width: Screen_SIZES_Scale.eight,
    height: Screen_SIZES_Scale.fourteen,
    resizeMode: 'contain',
  },

  headingText: {
    flex: 1,
    textAlign: 'center',
    fontSize: Screen_SIZES_ModerateScale.twentyTwo,
    color: colors.primary,
    fontFamily: Fonts.SemiBold,
    marginHorizontal: Screen_SIZES_Scale.ten,
  },

  filters: {
    flexDirection: 'row',
    gap: Screen_SIZES_Scale.eight,
  },

  iconButton: {
    width: Screen_SIZES_Scale.twentyTwo,
    height: Screen_SIZES_Scale.twentyTwo,
    borderRadius: sc(17),
    backgroundColor: colors.secondary,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Screen_SIZES_VerticalScale.twenty,
    gap: sc(5),
  },

  sortByText: {
    fontSize: ms(13),
  },

  charFilter: {
    minWidth: sc(47),
    height: vs(21),
    borderRadius: Screen_SIZES_Scale.twenty,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Screen_SIZES_Scale.twelve,
    backgroundColor: colors.secondary,
  },

  char: {
    color: colors.white,
    fontSize: ms(11),
    fontFamily: Fonts.SemiBold,
  },

  inactiveText: {
    color: colors.primary,
  },

  sortIconButton: {
    width: Screen_SIZES_Scale.twentyTwo,
    height: sc(21),
    borderRadius: sc(17),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },

  activeButton: {
    backgroundColor: colors.primary,
  },

  pressed: {
    opacity: 0.7,
  },
});
