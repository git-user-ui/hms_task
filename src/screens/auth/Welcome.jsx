import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { colors } from '../../themes/colors';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logo}>
        <Image source={require('../../assets/welcome_screen.png')} />
        <Text style={styles.brandName}>Skin Firts</Text>
        <Text>Dermatology center</Text>
      </View>

      <View>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: 'white', textAlign: 'center', padding: 15 }}>
            {' '}
            Log In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => navigation.navigate('Register')}
        >
          <Text
            style={{ color: colors.primary, textAlign: 'center', padding: 15 }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  desc: {
    textAlign: 'center',
    marginTop: 40,
  },
  loginBtn: {
    marginTop: 30,
    marginVertical: 10,
    width: 200,
    backgroundColor: colors.primary,
    color: '#fff',
    borderRadius: 30,
  },
  signupBtn: {
    width: 200,
    backgroundColor: colors.secondary,
    borderRadius: 30,
  },
  brandName: {
    fontSize: 48,
  },
});
