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
  textContainer: {
    flexDirection: 'row',
    paddingLeft: ms(10),
    alignItems: 'center',
    width: '70%',
  },
  textName: {
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    fontSize: ms(20),
    color: colors.lightbluetext,
    paddingLeft: ms(10),
  },
  optionContainer: {
    marginVertical: vs(20),
  },
  innerOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: ms(5),
    paddingVertical: vs(5),
  },
  selectedinnerOptionContainer: {
    backgroundColor: colors.secondary,
    borderRadius: ms(18),
  },
  optionName: {
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: ms(16),
  },
  iconContainer: {
    paddingRight: ms(10),
  },
  smallCircle: {
    position: 'absolute',
    left: sc(3.4),
    top: vs(3),
  },
  selectedDebit: {
    backgroundColor: colors.primary,
    borderRadius: ms(30),
  },
  nameContainer: {
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: vs(20),
  },
  name: {
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: ms(14),
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
