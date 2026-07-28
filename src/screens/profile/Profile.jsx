import { View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import ProfileImage from '../../components/Profile/components/ProfileImage';
import ProfileOptions from '../../components/Profile/components/ProfileOptions';
import { colors } from '../../themes/colors';

const Profile = () => {
  let heading = 'My Profile';
  return (
    <View>
      <ProfileHeader header={heading} color={colors.primary} />
      <ProfileImage />
      <ProfileOptions />
    </View>
  );
};

export default Profile;
