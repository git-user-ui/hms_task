import { StyleSheet, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import ProfileImage from '../../components/Profile/components/ProfileImage';
import EmailInput from '../../components/common/EmailInput';
import ButtonComp from '../../components/common/Button';
import { sc, vs } from '../../utils/responsive';
import {
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const UpdateProfile = () => {
  return (
    <>
      <ProfileHeader header={'Profile'} />
      <ProfileImage />
      <View style={styles.container}>
        <EmailInput placeholderName={'John Doe'} label={'Full Name'} />
        <EmailInput placeholderName={'+91 1234567890'} label={'Phone Number'} />
        <EmailInput placeholderName={'Johndoe@example.com'} label={'Email'} />
        <EmailInput placeholderName={'DD /MM /YYYY'} label={'Date of Birth'} />
        <View style={styles.btn}>
          <ButtonComp text={'Update Profile'} width={260} />
        </View>
      </View>
    </>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_VerticalScale.twentyFour,
    gap: Screen_SIZES_Scale.twelve,
  },
  btn: {
    marginTop: Screen_SIZES_VerticalScale.twentyEight,
  },
});
