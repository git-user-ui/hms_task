import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import { ms, sc, vs } from '../../utils/responsive';
import ButtonComp from '../../components/common/Button';
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';
import { useRoute } from '@react-navigation/native';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

import HeartIcon from '../../assets/svg/heart.svg';
import StarIconFilled from '../../assets/svg/filled_star.svg';
import StarIcon from '../../assets/svg/starunfilled.svg';

const Review = () => {
  const route = useRoute();
  const [rating, setRating] = useState(4);

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

        <View style={styles.ratingContainer}>
          <View style={styles.heartContainer}>
            <HeartIcon width={20} height={20} color={colors.primary} />
          </View>

          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map(item => (
              <Pressable key={item} onPress={() => setRating(item)}>
                {item <= rating ? (
                  <StarIconFilled width={24} height={24} style={styles.star} />
                ) : (
                  <StarIcon width={24} height={24} style={styles.star} />
                )}
              </Pressable>
            ))}
          </View>
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
    marginHorizontal: Screen_SIZES_Scale.thirty,
  },

  text: {
    paddingTop: Screen_SIZES_VerticalScale.eighteen,
    fontWeight: '300',
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    fontFamily: Fonts.Light,
  },
  image: {
    width: Screen_SIZES_ModerateScale.oneThirty,
    height: Screen_SIZES_ModerateScale.oneThirty,
    borderRadius: Screen_SIZES_ModerateScale.hundered,
    resizeMode: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    paddingTop: Screen_SIZES_VerticalScale.twenty,
    alignItems: 'center',
  },
  nameContainer: {
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: Screen_SIZES_VerticalScale.twenty,
  },
  name: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: Screen_SIZES_ModerateScale.twentyFour,
    color: colors.primary,
  },
  speciality: {},
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: ms(50),
    paddingHorizontal: Screen_SIZES_Scale.ten,
    paddingVertical: Screen_SIZES_VerticalScale.eight,
  },

  heartContainer: {
    width: ms(40),
    height: ms(40),
    borderRadius: Screen_SIZES_VerticalScale.twenty,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Screen_SIZES_Scale.twelve,
  },

  starContainer: {
    borderRadius: Screen_SIZES_VerticalScale.twenty,
    paddingVertical: Screen_SIZES_VerticalScale.eight,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Screen_SIZES_Scale.twelve,
    flexDirection: 'row',
  },

  star: {
    marginHorizontal: Screen_SIZES_Scale.six,
  },
  input: {
    marginTop: Screen_SIZES_VerticalScale.twenty,
    backgroundColor: colors.lightblue,
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
    paddingVertical: Screen_SIZES_VerticalScale.twelve,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    height: Screen_SIZES_ModerateScale.oneFifty,
  },
  btnContainer: {
    marginTop: Screen_SIZES_VerticalScale.thirty,
  },
});
