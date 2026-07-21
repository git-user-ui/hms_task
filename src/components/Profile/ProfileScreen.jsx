import { StyleSheet, View } from 'react-native';
import React from 'react';
import ProfileImage from './components/ProfileImage';
import ProfileHeader from './components/ProfileHeader';
import { colors } from '../../themes/colors';
import ProfileOptions from './components/ProfileOptions';

let heading = 'My Profile';

const ProfileScreen = () => {
  return (
    <View>
      <ProfileHeader header={heading} color={colors.primary} />
      <ProfileImage />
      <ProfileOptions />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
