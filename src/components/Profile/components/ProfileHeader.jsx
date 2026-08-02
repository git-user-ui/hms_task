import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import ArrowWhite from '../../../assets/svg/arrow_left.svg';

import { colors } from '../../../themes/colors';
import { ms, vs } from '../../../utils/responsive';
import { Fonts } from '../../../themes/font';

const ProfileHeader = ({ header, whiteArrow = false }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {whiteArrow ? (
            <ArrowWhite width={20} height={18} />
          ) : (
            <Image
              source={require('../../../assets/left_arrow.png')}
              style={styles.arrow}
            />
          )}
        </TouchableOpacity>

        <Text
          style={[
            styles.topText,
            whiteArrow ? styles.whiteText : styles.topText,
          ]}
        >
          {header}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: ms(30),
    marginTop: vs(12),
  },

  topHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  arrow: {
    width: 20,
    height: 18,
    resizeMode: 'contain',
  },

  topText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    color: colors.primary,
    fontFamily: Fonts.SemiBold,
  },
  whiteText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    color: colors.white,
    fontFamily: Fonts.SemiBold,
  },
});
