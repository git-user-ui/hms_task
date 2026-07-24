import { StyleSheet, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import ProfileImage from '../../components/Profile/components/ProfileImage';
import EmailInput from '../../components/common/EmailInput';
import ButtonComp from '../../components/common/Button';
import { sc, vs } from '../../utils/responsive';

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
    marginHorizontal: sc(30),
    marginTop: vs(24),
    gap: sc(12),
  },
  btn: {
    marginTop: vs(28),
  },
});
