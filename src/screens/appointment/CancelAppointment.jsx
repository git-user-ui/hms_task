import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { ms, sc, vs } from '../../utils/responsive';
import { Fonts } from '../../themes/font';
import { colors } from '../../themes/colors';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import ButtonComp from '../../components/common/Button';

import BigCircle from '../../assets/svg/payment/circle_big.svg';
import SmallCircle from '../../assets/svg/payment/circle_small.svg';

import { useRoute } from '@react-navigation/native';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';
const options = [
  { id: 1, name: 'Rescheduling' },
  { id: 2, name: 'Weather Conditions' },
  { id: 3, name: 'Unexpected work' },
  { id: 4, name: 'Others' },
];

const CancelAppointment = () => {
  const [selected, setSelected] = useState('');
  const route = useRoute();

  const item = route.params?.doctor;

  return (
    <View>
      <ProfileHeader header={'Cancel Appointment'} />
      <View style={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        {/*  */}

        <View style={styles.optionContainer}>
          {options.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.innerOptionContainer,
                selected === item.name
                  ? styles.selectedinnerOptionContainer
                  : styles.innerOptionContainer,
              ]}
              activeOpacity={0.8}
              onPress={() => setSelected(item.name)}
            >
              <View style={styles.iconContainer}>
                <BigCircle />
                <SmallCircle
                  style={[
                    styles.smallCircle,
                    selected === item.name
                      ? styles.selectedDebit
                      : styles.smallCircle,
                  ]}
                />
              </View>

              <Text style={styles.optionName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/*  */}
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        <TextInput
          multiline={true}
          textAlignVertical="top"
          numberOfLines={10}
          style={styles.input}
          placeholderTextColor={colors.primary}
          placeholder="Enter Your Reason Here...."
        />
        <View style={styles.btnContainer}>
          <ButtonComp text={'Cancel Appointment'} width={'90%'} />
        </View>
      </View>
    </View>
  );
};

export default CancelAppointment;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Screen_SIZES_Scale.thirty,
  },

  text: {
    paddingTop: Screen_SIZES_VerticalScale.eighteen,
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
  textContainer: {
    flexDirection: 'row',
    paddingLeft: Screen_SIZES_ModerateScale.ten,
    alignItems: 'center',
    width: '70%',
  },
  textName: {
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    fontSize: Screen_SIZES_ModerateScale.twenty,
    color: colors.lightbluetext,
    paddingLeft: Screen_SIZES_ModerateScale.ten,
  },
  optionContainer: {
    marginVertical: Screen_SIZES_VerticalScale.twenty,
  },
  innerOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Screen_SIZES_ModerateScale.five,
    paddingVertical: Screen_SIZES_ModerateScale.five,
  },
  selectedinnerOptionContainer: {
    backgroundColor: colors.secondary,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
  },
  optionName: {
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: Screen_SIZES_ModerateScale.sixteen,
  },
  iconContainer: {
    paddingRight: Screen_SIZES_ModerateScale.ten,
  },
  smallCircle: {
    position: 'absolute',
    left: sc(3.4),
    top: Screen_SIZES_VerticalScale.three,
  },
  selectedDebit: {
    backgroundColor: colors.primary,
    borderRadius: Screen_SIZES_ModerateScale.thirty,
  },
  nameContainer: {
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: Screen_SIZES_VerticalScale.twenty,
  },
  name: {
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    color: colors.primary,
  },
  speciality: {},
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
