import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../themes/colors';
import Input from '../../components/common/Input';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import { sc, vs } from '../../utils/responsive';
import PasswordInput from '../../components/common/PasswordInput';
import ButtonComp from '../../components/common/Button';

const Login = () => {
  const navigation = useNavigation();

  return (
    <>
      <ProfileHeader header={'Log In'} />
      <View style={styles.container}>
        <View style={styles.topName}>
          <Text style={styles.topText}>Welcome</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <View style={{ marginTop: vs(50), gap: sc(20) }}>
          <Input
            label={'Email or Mobile Number'}
            placeholderName={'example@example.com'}
          />
          <PasswordInput
            label={'Password'}
            placeholderName={'example@example.com'}
          />
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('SetPassword')}>
            <Text style={styles.forgotPass}> Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <View>
          <ButtonComp text={'Log In'} />
        </View>
        <View style={{ height: 40, marginVertical: vs(8) }}>
          <Text style={{ marginVertical: vs(8), textAlign: 'center' }}>
            or sign up with
          </Text>

          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                borderRadius: sc(30),
                backgroundColor: colors.secondary,
                padding: sc(12),
              }}
            >
              <Image
                source={require('../../assets/google_logo.png')}
                style={styles.logo}
              />
            </View>
            <View
              style={{
                borderRadius: sc(30),
                backgroundColor: colors.secondary,
                padding: sc(12),
              }}
            >
              {' '}
              <Image
                source={require('../../assets/facebook_logo.png')}
                style={styles.logo}
              />
            </View>
          </View>

          <View style={styles.createAcc}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.signuptext}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },

  topHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  topName: {
    marginTop: sc(34),
  },

  topText: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '600',
  },
  desc: {
    fontSize: sc(12),
  },
  forgotPass: {
    color: colors.primary,
    fontSize: sc(12),
    textAlign: 'right',
  },
  arrow: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    fontWeight: '500',
  },
  logo: {},

  label: {},
  input: {},
  createAcc: {
    flexDirection: 'row',
    marginTop: sc(6),
    justifyContent: 'center',
  },
  signuptext: {
    color: colors.primary,
    textAlign: 'center ',
  },
});
