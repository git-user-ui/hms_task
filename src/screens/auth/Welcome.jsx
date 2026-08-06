import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

// themes
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';

//constants
import {
  flexOne,
  Screen_SIZES_ModerateScale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';
import { AuthStrings } from '../../constants/strings';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logo}>
        <Image source={require('../../assets/welcome_screen.png')} />
        <Text style={styles.brandName}>Skin{`\n`}Firts</Text>
        <Text style={styles.subText}>{AuthStrings.Dermatology}</Text>
      </View>

      <View>
        <Text style={styles.desc}>{AuthStrings.loginText}</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>{AuthStrings.login}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.signupText}>{AuthStrings.signup}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: Screen_SIZES_ModerateScale.thirty,
    flex: flexOne.one,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandName: {
    fontFamily: Fonts.Thin,
    fontWeight: '100',
    color: colors.primary,
    fontSize: Screen_SIZES_ModerateScale.fourtyEight,
  },
  subText: {
    color: colors.primary,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    fontFamily: Fonts.SemiBold,
    fontWeight: '600',
  },
  desc: {
    textAlign: 'center',
    fontSize: Screen_SIZES_ModerateScale.twelve,
    fontFamily: Fonts.Light,
    fontWeight: '300',
    marginTop: Screen_SIZES_VerticalScale.fourty,
  },
  loginBtn: {
    marginTop: Screen_SIZES_VerticalScale.thirty,
    marginVertical: Screen_SIZES_VerticalScale.ten,
    width: 200,
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: Screen_SIZES_ModerateScale.thirty,
  },
  loginText: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: Screen_SIZES_ModerateScale.twentyFour,
    color: 'white',
    textAlign: 'center',
    padding: Screen_SIZES_ModerateScale.eight,
  },
  signupText: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: Screen_SIZES_ModerateScale.twentyFour,
    color: colors.primary,
    textAlign: 'center',
    padding: Screen_SIZES_ModerateScale.eight,
  },
  signupBtn: {
    width: 200,
    backgroundColor: colors.secondary,
    borderRadius: Screen_SIZES_ModerateScale.thirty,
  },
});
