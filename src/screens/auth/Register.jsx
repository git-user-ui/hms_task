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

const Register = () => {
  const navigation = useNavigation();

  return (
    <>
      <ProfileHeader header="Register" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Inputs */}
          <View style={styles.inputContainer}>
            <EmailInput label="Full Name" placeholderName="John Doe" />
            <PasswordInput label="Password" placeholder="********" />
            <EmailInput label="Email" placeholderName="example@example.com" />
            <EmailInput
              label="Mobile Number"
              placeholderName="+91 9876543210"
            />
            <EmailInput
              label="Date of Birth"
              placeholderName="DD/MM/YYYY"
              keyboardType="number-pad"
            />
          </View>

          {/* Terms */}
          <View style={styles.termsView}>
            <Text style={styles.termsText}>By continuing, you agree to</Text>

            <Text style={styles.termsOfUse}>
              Terms of Use <Text style={styles.normalText}>and </Text>
              <Text style={styles.termsOfUse}>Privacy Policy</Text>
            </Text>
          </View>

          {/* Button */}
          <View style={styles.buttonContainer}>
            <ButtonComp text="Sign Up" width={240} />
          </View>

          {/* Divider */}
          <View style={styles.socialSection}>
            <Text style={styles.orText}>or Signup with</Text>

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

          {/* Login */}
          <View style={styles.createAcc}>
            <Text style={styles.accountText}>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signupText}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sc(30),
    marginTop: vs(8),
  },

  inputContainer: {
    gap: vs(8),
  },

  termsView: {
    marginTop: vs(20),
    alignItems: 'center',
  },

  termsText: {
    fontSize: ms(12),
    color: colors.gray,
    textAlign: 'center',
  },

  termsOfUse: {
    color: colors.primary,
    fontSize: ms(12),
    textAlign: 'center',
  },

  normalText: {
    color: colors.black,
  },

  buttonContainer: {
    marginTop: vs(10),
    alignItems: 'center',
  },

  socialSection: {
    marginTop: vs(8),
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

  createAcc: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vs(12),
    marginBottom: vs(20),
  },

  accountText: {
    fontSize: ms(13),
    color: colors.black,
  },

  signupText: {
    fontSize: ms(13),
    color: colors.primary,
    fontWeight: '600',
  },
});
