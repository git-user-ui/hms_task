import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Components
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import PasswordInput from '../../components/common/PasswordInput';
import ButtonComp from '../../components/common/Button';

// Themes
import { Fonts } from '../../themes/font';
import { colors } from '../../themes/colors';

// Constants
import {
  flexOne,
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';
import { AuthStrings } from '../../constants/strings';

const SetPassword = () => {
  return (
    <>
      <ProfileHeader header={'Set Password'} />
      <View style={styles.container}>
        <View>
          <Text style={styles.desc}>{AuthStrings.loginText}</Text>
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
    flex: flexOne.one,
    marginHorizontal: Screen_SIZES_ModerateScale.thirty,
    marginTop: Screen_SIZES_VerticalScale.sixteen,
  },
  desc: {
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: colors.designBlack,
  },

  inputContainer: {
    marginTop: Screen_SIZES_VerticalScale.twentyFour,
    gap: Screen_SIZES_Scale.eighteen,
  },
  btn: {
    marginTop: Screen_SIZES_VerticalScale.eighteen,
  },
});
