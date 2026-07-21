import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { colors } from '../../themes/colors';

const sortIcons = [
  { id: 1, icon: require('../../assets/star_icon.png') },
  { id: 2, icon: require('../../assets/heart_icon.png') },
  { id: 3, icon: require('../../assets/female_icon.png') },
  { id: 4, icon: require('../../assets/male_icon.png') },
];

const DoctorsHeading = ({ heading }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../../assets/left_arrow.png')} />
        </TouchableOpacity>
        <Text>{heading}</Text>
        <View style={styles.filterIcons}>
          <TouchableOpacity style={styles.search}>
            <Image source={require('./../../assets/search_icon.png')} />
          </TouchableOpacity>
          <Image source={require('./../../assets/filter_icon.png')} />
        </View>
      </View>

      {/* Sort Functionality */}

      <View style={styles.sortContainer}>
        <Text>Sort by</Text>
        <TouchableOpacity styles={styles.charFilter}>
          <Text>A-Z</Text>
        </TouchableOpacity>
        {sortIcons.map(icons => (
          <TouchableOpacity style={styles.sortIcons} key={icons.id}>
            <Image source={icons.icon} style={styles.sortImages} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DoctorsHeading;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  search: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: colors.secondary,
  },
  charFilter: {
    width: 48,
    backgroundColor: colors.primary,
    color: colors.secondary,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  sortIcons: {
    width: 22,
    height: 22,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortImages: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
