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

const filters = [
  {
    key: 'A-Z',
    label: 'A-Z',
  },
  {
    key: 'Rating',
    icon: <StarIcon />,
  },
  {
    key: 'Favorite',
    icon: <HeartIcon width={12} height={12} />,
  },
  {
    key: 'Female',
    icon: <Female />,
  },
  {
    key: 'Male',
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
    paddingHorizontal: sc(30),
    paddingVertical: vs(10),
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: sc(12),
    height: sc(22),
    justifyContent: 'center',
  },

  backIcon: {
    width: sc(8),
    height: sc(14),
    resizeMode: 'contain',
  },

  headingText: {
    flex: 1,
    textAlign: 'center',
    fontSize: ms(22),
    color: colors.primary,
    fontFamily: Fonts.SemiBold,
    marginHorizontal: sc(10),
  },

  filters: {
    flexDirection: 'row',
    gap: sc(8),
  },

  iconButton: {
    width: sc(22),
    height: sc(22),
    borderRadius: sc(17),
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vs(20),
    gap: sc(5),
  },

  sortByText: {
    fontSize: ms(13),
  },

  charFilter: {
    minWidth: sc(47),
    height: vs(21),
    borderRadius: sc(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sc(12),
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
    width: sc(22),
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
