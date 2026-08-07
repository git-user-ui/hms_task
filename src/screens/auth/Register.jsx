//React PAckages
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

// Components
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import EmailInput from '../../components/common/EmailInput';
import PasswordInput from '../../components/common/PasswordInput';
import ButtonComp from '../../components/common/Button';

//Themes
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';

// Constants
import { getUser, saveUser } from '../../utils/storage';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '../../constants/messages';
import { ROUTES } from '../../constants/routes';
import {
  flexOne,
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';
import { AuthStrings } from '../../constants/strings';
import { showToast } from '../../utils/showToast';

const Register = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    mNumber: '',
    dob: '',
  });

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleRegister = async () => {
    const { name, email, password, mNumber, dob } = formData;

    if (!name || !email || !password || !mNumber || !dob) {
      showToast({
        type: 'error',
        message: ERROR_MESSAGES.MISSING_REGISTER_FIELDS,
      });
      return;
    }

    const existingUser = await getUser();

    if (existingUser) {
      showToast({
        type: 'error',
        message: ERROR_MESSAGES.REGISTERED_USER,
      });
      navigation.navigate('Login');
      return;
    }

    try {
      const user = {
        name,
        email,
        password,
        mNumber,
        dob,
      };

      await saveUser(user);

      showToast({
        type: 'success',
        message: SUCCESS_MESSAGES.REGISTER_SUCCESS,
      });

      navigation.navigate(ROUTES.LOGIN);
    } catch (error) {
      console.log(error);
      showToast({
        type: 'error',
        message: ERROR_MESSAGES.UNKNOWN_ERROR,
      });
    }
  };

  return (
    <>
      <ProfileHeader header="Register" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Inputs */}
          <View style={styles.inputContainer}>
            <EmailInput
              label="Full Name"
              placeholderName="John Doe"
              value={formData.name}
              onChangeText={text => handleChange('name', text)}
            />
            <PasswordInput
              label="Password"
              placeholder="********"
              value={formData.password}
              onChangeText={text => handleChange('password', text)}
            />
            <EmailInput
              label="Email"
              placeholderName="example@example.com"
              value={formData.email}
              onChangeText={text => handleChange('email', text)}
            />
            <EmailInput
              label="Mobile Number"
              placeholderName="+91 9876543210"
              value={formData.mNumber}
              onChangeText={text => handleChange('mNumber', text)}
            />
            <EmailInput
              label="Date of Birth"
              placeholderName="DD/MM/YYYY"
              keyboardType="number-pad"
              value={formData.dob}
              onChangeText={text => handleChange('dob', text)}
            />
          </View>

          {/* Terms */}
          <View style={styles.termsView}>
            <Text style={styles.termsText}>{AuthStrings.agreeTo}</Text>

            <Text style={styles.termsOfUse}>
              {AuthStrings.terms}
              <Text style={styles.normalText}>{AuthStrings.and} </Text>
              <Text style={styles.termsOfUse}>{AuthStrings.privacy}</Text>
            </Text>
          </View>

          {/* Button */}
          <View style={styles.buttonContainer}>
            <ButtonComp text="Sign Up" width={240} onPress={handleRegister} />
          </View>

          {/* Divider */}
          <View style={styles.socialSection}>
            <Text style={styles.orText}>{AuthStrings.signupWith}</Text>

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
            <Text style={styles.accountText}>
              {AuthStrings.dontHaveAccount}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
              <Text style={styles.signupText}>{AuthStrings.login}</Text>
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
    flex: flexOne.one,
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_VerticalScale.eight,
  },

  inputContainer: {
    gap: Screen_SIZES_VerticalScale.eight,
  },

  termsView: {
    marginTop: Screen_SIZES_VerticalScale.twenty,
    alignItems: 'center',
  },

  termsText: {
    fontFamily: Fonts.Thin,
    fontWeight: '300',
    fontSize: Screen_SIZES_ModerateScale.twelve,
    textAlign: 'center',
    color: colors.designBlack,
  },

  termsOfUse: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    color: colors.primary,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    textAlign: 'center',
  },

  normalText: {
    color: colors.designBlack,
    fontFamily: Fonts.Light,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    fontWeight: '300',
  },

  buttonContainer: {
    marginTop: Screen_SIZES_VerticalScale.ten,
    alignItems: 'center',
  },

  socialSection: {
    marginTop: Screen_SIZES_VerticalScale.eight,
    alignItems: 'center',
  },

  orText: {
    fontFamily: Fonts.Thin,
    fontWeight: '300',
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: colors.designBlack,
    marginBottom: Screen_SIZES_VerticalScale.eight,
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Screen_SIZES_Scale.sixteen,
  },

  socialButton: {
    width: Screen_SIZES_Scale.fourty,
    height: Screen_SIZES_Scale.fourty,
    borderRadius: Screen_SIZES_ModerateScale.twentySix,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: Screen_SIZES_Scale.eighteen,
    height: Screen_SIZES_Scale.eighteen,
    resizeMode: 'contain',
  },

  createAcc: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Screen_SIZES_VerticalScale.twelve,
    marginBottom: Screen_SIZES_VerticalScale.twenty,
  },

  accountText: {
    fontFamily: Fonts.Thin,
    fontWeight: '300',
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: colors.designBlack,
  },

  signupText: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: colors.primary,
  },
});
