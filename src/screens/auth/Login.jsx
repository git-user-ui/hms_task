import React, { useState } from 'react';
import {
  Alert,
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
import { Fonts } from '../../themes/font';

import { useAuth } from '../../configs/context';
import { getUser, loginUser } from '../../utils/storage';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../../constants/messages';
import { ROUTES } from '../../constants/routes';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setLoggedIn } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', ERROR_MESSAGES.MISSING_FIELDS);
      return;
    }

    try {
      const userData = await getUser();

      if (!userData) {
        Alert.alert('Error', ERROR_MESSAGES.NO_REGISTERED_USER);
        return;
      }

      if (userData.email === email && userData.password === password) {
        await loginUser();
        setLoggedIn(true);
        Alert.alert('Success', SUCCESS_MESSAGES.LOGIN_SUCCESS);
      } else {
        Alert.alert('Error', ERROR_MESSAGES.INVALID_CREDENTIALS);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', ERROR_MESSAGES.UNKNOWN_ERROR);
    }
  };

  return (
    <>
      <ProfileHeader header="Log In" />
      <ScrollView showsVerticalScrollIndicator={false}>
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
              value={email}
              onChangeText={text => setEmail(text)}
            />

            <PasswordInput
              label="Password"
              placeholder="********"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>

          {/* Forgot Password */}
          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={() => navigation.navigate(ROUTES.SET_PASSWORD)}
          >
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <View style={styles.buttonContainer}>
            <ButtonComp text="Log In" width={230} onPress={handleLogin} />
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

            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
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
    fontFamily: Fonts.SemiBold,
    fontWeight: '600',
    color: colors.primary,
  },

  description: {
    color: colors.designBlack,
    fontFamily: Fonts.Light,
    fontWeight: '300',
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
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: ms(12),
    color: colors.primary,
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
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: ms(12),
    color: colors.designBlack,
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
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: ms(12),
    color: colors.designBlack,
  },

  signupText: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: ms(12),
    color: colors.primary,
  },
});
