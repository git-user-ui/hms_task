import React, { memo, useCallback } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../themes/colors';

const sortIcons = [
  { id: 1, icon: require('../../assets/star_icon.png') },
  { id: 2, icon: require('../../assets/heart_icon.png') },
  { id: 3, icon: require('../../assets/female_icon.png') },
  { id: 4, icon: require('../../assets/male_icon.png') },
];

const IconButton = ({ icon, onPress }) => (
  <Pressable
    onPress={onPress}
    hitSlop={1}
    style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
  >
    <Image source={icon} style={styles.icon} />
  </Pressable>
);

const SortButton = ({ icon }) => (
  <Pressable
    hitSlop={1}
    style={({ pressed }) => [styles.sortIconButton, pressed && styles.pressed]}
  >
    <Image source={icon} style={styles.sortImage} />
  </Pressable>
);

const DoctorsHeading = ({ heading }) => {
  const navigation = useNavigation();

  const handleBackButton = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.topContainer}>
        <Pressable
          onPress={handleBackButton}
          hitSlop={4}
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

        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.headingText}>
          {heading}
        </Text>

        <View style={styles.filters}>
          <IconButton icon={require('../../assets/search_icon.png')} />

          <IconButton icon={require('../../assets/blue_filter_icon.png')} />
        </View>
      </View>

      {/* Sort Section */}
      <View style={styles.sortContainer}>
        <Text style={styles.sortByText}>Sort By</Text>

        <Pressable
          style={({ pressed }) => [
            styles.charFilter,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.char}>A-Z</Text>
        </Pressable>

        {sortIcons.map(({ id, icon }) => (
          <SortButton key={id} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default memo(DoctorsHeading);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(20),
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    width: scale(12),
    height: scale(22),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backIcon: {
    width: scale(8),
    height: scale(14),
    resizeMode: 'contain',
  },

  headingText: {
    flex: 1,
    textAlign: 'center',
    fontSize: moderateScale(22),
    fontWeight: '600',
    color: colors.primary,
    marginHorizontal: scale(10),
  },

  filters: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },

  iconButton: {
    width: scale(22),
    height: scale(22),
    borderRadius: scale(17),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },

  icon: {
    width: scale(12),
    height: scale(10),
    resizeMode: 'contain',
  },

  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: verticalScale(20),
    gap: scale(4),
  },

  sortByText: {
    fontSize: moderateScale(13),
    fontWeight: '300',
  },

  charFilter: {
    minWidth: scale(47),
    height: verticalScale(21),
    paddingHorizontal: scale(12),
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },

  char: {
    fontSize: moderateScale(11),
    color: colors.white,
    fontWeight: '600',
  },

  sortIconButton: {
    width: scale(22),
    height: scale(21),
    borderRadius: scale(17),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },

  sortImage: {
    width: scale(12),
    height: scale(10),
    resizeMode: 'contain',
  },

  pressed: {
    opacity: 0.7,
  },
});
