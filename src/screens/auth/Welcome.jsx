import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { colors } from '../../themes/colors';
import { scale, verticalScale } from 'react-native-size-matters';
import { ms } from '../../utils/responsive';
import { Fonts } from '../../themes/font';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logo}>
        <Image source={require('../../assets/welcome_screen.png')} />
        <Text style={styles.brandName}>Skin{`\n`}Firts</Text>
        <Text style={styles.subText}>Dermatology center</Text>
      </View>

      <View>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut et dolore magna aliqua.
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: scale(30),
    flex: 1,
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
    fontSize: 48,
    letterSpacing: 0,
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
    marginTop: verticalScale(40),
  },
  loginBtn: {
    marginTop: 30,
    marginVertical: 10,
    width: 200,
    backgroundColor: colors.primary,
    color: '#fff',
    borderRadius: 30,
  },
  loginText: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: Screen_SIZES_ModerateScale.twentyFour,
    color: 'white',
    textAlign: 'center',
    padding: 8,
  },
  signupText: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: Screen_SIZES_ModerateScale.twentyFour,
    color: colors.primary,
    textAlign: 'center',
    padding: 8,
  },
  signupBtn: {
    width: 200,
    backgroundColor: colors.secondary,
    borderRadius: 30,
  },
});
