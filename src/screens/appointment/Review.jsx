import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import { ms, sc, vs } from '../../utils/responsive';
import ButtonComp from '../../components/common/Button';
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';
import { useRoute } from '@react-navigation/native';

const Review = () => {
  const route = useRoute();

  const item = route.params?.doctor;

  return (
    <View>
      <ProfileHeader header={'Review'} />
      <View style={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.avatar }} style={styles.image} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.speciality}>{item.speciality}</Text>
        </View>
        <TextInput
          multiline={true}
          textAlignVertical="top"
          numberOfLines={10}
          style={styles.input}
          placeholderTextColor={colors.primary}
          placeholder="Enter Your Comment Here...."
        />
        <View style={styles.btnContainer}>
          <ButtonComp text={'Add Review'} width={'90%'} />
        </View>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sc(30),
  },

  text: {
    paddingTop: vs(18),
  },
  image: {
    width: ms(130),
    height: ms(130),
    borderRadius: ms(100),
    resizeMode: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    paddingTop: vs(20),
    alignItems: 'center',
  },
  nameContainer: {
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: vs(20),
  },
  name: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: ms(24),
    color: colors.primary,
  },
  speciality: {},
  input: {
    marginTop: vs(20),
    backgroundColor: colors.lightblue,
    paddingHorizontal: ms(18),
    paddingVertical: vs(12),
    borderRadius: ms(18),
    height: ms(150),
  },
  btnContainer: {
    marginTop: vs(30),
  },
});
