import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { colors } from '../themes/colors';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logo}>
        <Image source={require('../assets/splash_screen.png')} />
        <Text style={styles.brandName}>{`Skin\nFirts`}</Text>
        <Text style={styles.desc}>Dermatology center</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandName: {
    fontWeight: '100',
    fontSize: 48,
    color: colors.white,
  },
  desc: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 12,
  },
});
