import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import { ms, sc, vs } from '../../utils/responsive';
import PasswordInput from '../../components/common/PasswordInput';
import ButtonComp from '../../components/common/Button';
import { Fonts } from '../../themes/font';

const SetPassword = () => {
  return (
    <>
      <ProfileHeader header={'Set Password'} />
      <View style={styles.container}>
        <View>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View>
            <PasswordInput label={'Password'} />
          </View>
          <View>
            <PasswordInput label={'Confirm Password'} />
          </View>
          <View style={styles.btn}>
            <ButtonComp text={'Create New Password'} width={'90%'} />
          </View>
        </View>
      </View>
    </>
  );
};

export default SetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: vs(16),
  },
  desc: {
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: ms(12),
  },
  input: {
    backgroundColor: '#ECF1FF',
  },
  inputContainer: {
    marginTop: vs(24),
    gap: sc(18),
  },
  btn: {
    marginTop: vs(18),
  },
});
