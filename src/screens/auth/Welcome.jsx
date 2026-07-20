import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { colors } from '../../themes/colors';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Image source={require('../../assets/welcome_screen.png')} />
        <Text>Skin</Text>
        <Text>Firts</Text>
        <Text>Dermatology center</Text>
      </View>

      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}
        >
          <Text> Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('SetPassword')}
        >
          <Text>Set Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: colors.primary,
    color: '#fff',
  },
});
