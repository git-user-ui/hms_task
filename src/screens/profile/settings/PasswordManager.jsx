import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';
import PasswordInput from '../../../components/common/PasswordInput';
import { ms, sc, vs } from '../../../utils/responsive';
import { colors } from '../../../themes/colors';
import ButtonComp from '../../../components/common/Button';

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
    marginHorizontal: sc(30),
    marginTop: vs(30),
  },
  text: {
    textAlign: 'right',
    paddingVertical: vs(6),
    color: colors.primary,
    fontWeight: '500',
    fontSize: ms(12),
  },
  newPass: {
    gap: sc(20),
  },
  btn: {
    marginTop: 'auto',
    marginBottom: vs(30),
  },
});
