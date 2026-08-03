import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';
import PasswordInput from '../../../components/common/PasswordInput';
import { ms, sc, vs } from '../../../utils/responsive';
import { colors } from '../../../themes/colors';
import ButtonComp from '../../../components/common/Button';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../../constants/screen';

const PasswordManager = () => {
  return (
    <>
      <ProfileHeader header={'Password Manager'} />
      <View style={styles.container}>
        <PasswordInput label={'Current Password'} />
        <TouchableOpacity>
          <Text style={styles.text}>Forgot Password ?</Text>
        </TouchableOpacity>
        <View style={styles.newPass}>
          <PasswordInput label={'New  Password'} />
          <PasswordInput label={'Confirm New Password'} />
        </View>
        <View style={styles.btn}>
          <ButtonComp
            text={'Change Password'}
            width={'100%'}
            style={styles.btn}
          />
        </View>
      </View>
    </>
  );
};

export default PasswordManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_VerticalScale.thirty,
  },
  text: {
    textAlign: 'right',
    paddingVertical: Screen_SIZES_VerticalScale.six,
    color: colors.primary,
    fontWeight: '500',
    fontSize: Screen_SIZES_ModerateScale.twelve,
  },
  newPass: {
    gap: Screen_SIZES_Scale.twenty,
  },
  btn: {
    marginTop: 'auto',
    marginBottom: Screen_SIZES_VerticalScale.thirty,
  },
});
