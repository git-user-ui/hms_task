// React
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

// Themes
import { colors } from '../themes/colors';

// Constants
import { AuthStrings } from '../constants/strings';
import { flexOne, Screen_SIZES_ModerateScale } from '../constants/screen';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logo}>
        <Image source={require('../assets/splash_screen.png')} />
        <Text style={styles.brandName}>{`Skin\nFirts`}</Text>
        <Text style={styles.desc}>{AuthStrings.Dermatology}</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: flexOne.one,
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
    fontSize: Screen_SIZES_ModerateScale.fourtyEight,
    color: colors.white,
  },
  desc: {
    color: colors.white,
    fontWeight: '600',
    fontSize: Screen_SIZES_ModerateScale.twelve,
  },
});
