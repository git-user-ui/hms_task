import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../themes/colors';

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/left_arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>

        <Text style={styles.topText}>New Account</Text>
      </View>

      <View>
        <Text>Welcome</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View>
        <View>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="example@example.com" />
        </View>
        <View>
          <Text style={styles.label}>PassWord</Text>
          <TextInput style={styles.input} placeholder="********" />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="example@example.com" />
        </View>
        <View>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput style={styles.input} placeholder="example@example.com" />
        </View>
        <View>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            placeholder="example@example.com"
          />
        </View>
        <View>
          <Text>
            By continuing, you agree to <Text>Terms of Use</Text> and{' '}
            <Text>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('SetPassword')}>
          <Text> Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 40 }}>
        <Text>or sign up with</Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
          }}
        >
          <View>
            <Image source={require('../../assets/google_logo.png')} />
          </View>
          <Image source={require('../../assets/facebook_logo.png')} />
        </View>
      </View>
      <View>
        <Text>already have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Log In </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },

  topHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  topText: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },

  arrow: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  label: {},
  input: {},
});
