import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { colors } from '../../../themes/colors';

const ProfileHeader = ({ header }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/left_arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>

        <Text style={styles.topText}>{header}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 35,
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
    color: colors.primary,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
});
