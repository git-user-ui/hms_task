import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import ProfileImage from '../../components/Profile/components/ProfileImage';
import EmailInput from '../../components/common/EmailInput';
import ButtonComp from '../../components/common/Button';
import {
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../../constants/messages';
import { getUser, saveUser } from '../../utils/storage';
import Toast from 'react-native-toast-message';
import { showToast } from '../../utils/showToast';

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mNumber: '',
    dob: '',
  });

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const updateProfileHandler = async () => {
    const { name, email, mNumber, dob } = formData;

    if (!name || !email || !mNumber || !dob) {
      showToast({
        type: 'error',
        message: ERROR_MESSAGES.MISSING_REGISTER_FIELDS,
      });
      return;
    }

    try {
      const existingUser = await getUser();

      const updatedUser = {
        ...existingUser,
        name,
        email,
        mNumber,
        dob,
      };

      await saveUser(updatedUser);
      setFormData({
        name: '',
        email: '',
        mNumber: '',
        dob: '',
      });
      showToast({
        type: 'success',
        message: SUCCESS_MESSAGES.UPDATE_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      showToast({
        type: 'error',
        message: ERROR_MESSAGES.UNKNOWN_ERROR,
      });
    }
  };
  return (
    <>
      <ProfileHeader header={'Profile'} />
      <ProfileImage />
      <View style={styles.container}>
        <EmailInput
          placeholderName={'John Doe'}
          label={'Full Name'}
          value={formData.name}
          onChangeText={text => handleChange('name', text)}
        />
        <EmailInput
          placeholderName={'+91 1234567890'}
          label={'Phone Number'}
          value={formData.mNumber}
          onChangeText={text => handleChange('mNumber', text)}
        />
        <EmailInput
          placeholderName={'Johndoe@example.com'}
          label={'Email'}
          value={formData.email}
          onChangeText={text => handleChange('email', text)}
        />
        <EmailInput
          placeholderName={'DD /MM /YYYY'}
          label={'Date of Birth'}
          value={formData.dob}
          onChangeText={text => handleChange('dob', text)}
        />
        <View style={styles.btn}>
          <ButtonComp
            text={'Update Profile'}
            width={260}
            onPress={updateProfileHandler}
          />
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
