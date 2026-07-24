import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import EmailInput from '../../components/common/EmailInput';
import PasswordInput from '../../components/common/PasswordInput';
import ButtonComp from '../../components/common/Button';

import { colors } from '../../themes/colors';
import { ms, sc, vs } from '../../utils/responsive';

const Login = () => {
  const navigation = useNavigation();

  return (
    <>
      <ProfileHeader header="Log In" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.topSection}>
            <Text style={styles.title}>Welcome</Text>

            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.inputContainer}>
            <EmailInput
              label="Email or Mobile Number"
              placeholderName="example@example.com"
            />

            <PasswordInput label="Password" placeholder="********" />
          </View>

          {/* Forgot Password */}
          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={() => navigation.navigate('SetPassword')}
          >
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <View style={styles.buttonContainer}>
            <ButtonComp text="Log In" width={230} />
          </View>

          {/* Social Login */}
          <View style={styles.socialSection}>
            <Text style={styles.orText}>or sign up with</Text>

            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Image
                  source={require('../../assets/google_logo.png')}
                  style={styles.logo}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <Image
                  source={require('../../assets/facebook_logo.png')}
                  style={styles.logo}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.signupText}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sc(24),
  },

  topSection: {
    marginTop: vs(20),
  },

  title: {
    fontSize: ms(24),
    fontWeight: '700',
    color: colors.primary,
  },

  description: {
    marginTop: vs(8),
    fontSize: ms(12),
  },

  inputContainer: {
    marginTop: vs(30),
    gap: vs(18),
  },

  forgotContainer: {
    marginTop: vs(8),
    alignItems: 'flex-end',
  },

  forgotPass: {
    fontSize: ms(12),
    color: colors.primary,
    fontWeight: '500',
  },

  buttonContainer: {
    marginTop: vs(24),
    alignItems: 'center',
  },

  socialSection: {
    marginTop: vs(12),
    alignItems: 'center',
  },

  orText: {
    fontSize: ms(12),
    color: colors.black,
    marginBottom: vs(8),
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: sc(16),
  },

  socialButton: {
    width: sc(40),
    height: sc(40),
    borderRadius: sc(25),
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: sc(18),
    height: sc(18),
    resizeMode: 'contain',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vs(24),
    marginBottom: vs(20),
  },

  footerText: {
    fontSize: ms(12),
    color: colors.black,
  },

  signupText: {
    fontSize: ms(12),
    color: colors.primary,
    fontWeight: '500',
  },
});
