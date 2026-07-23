import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';
import ProfileCard from './ProfileCard';

const DoctorsInfoComponent = () => {
  return (
    <View style={styles.container}>
      {/* // Profile Card */}
      <View style={styles.cardProfile}>
        <ProfileCard />
      </View>

      {/* Profile Information */}
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.infoHeadings}>Profile</Text>
          <Text style={styles.infoDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
        <View>
          <Text style={styles.infoHeadings}>Career Path</Text>
          <Text style={styles.infoDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
        <View>
          <Text style={styles.infoHeadings}>Highlights</Text>
          <Text style={styles.infoDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorsInfoComponent;

const styles = StyleSheet.create({
  cardProfile: {
    backgroundColor: colors.secondary,
    borderRadius: sc(17),
  },
  infoContainer: {
    gap: sc(15),
  },
  infoHeadings: {
    fontSize: sc(14),
    fontWeight: '500',
    color: colors.primary,
  },
  infoDesc: {
    fontSize: sc(12),
  },
});
