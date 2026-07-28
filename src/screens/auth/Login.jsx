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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../configs/context';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setLoggedIn } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    try {
      const user = await AsyncStorage.getItem('USER');

      if (!user) {
        Alert.alert('Error', 'No registered user found');
        return;
      }

      const userData = JSON.parse(user);

      if (userData.email === email && userData.password === password) {
        await AsyncStorage.setItem('LOGIN', 'true');
        setLoggedIn(true);
        Alert.alert('Success', 'Login Successful');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        Alert.alert('Error', 'Invalid Email or Password');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Something went wrong');
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
            onPress={() => navigation.navigate('SetPassword')}
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
