import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { doctorsData } from '../../utils/doctorsdata';
import { useNavigation } from '@react-navigation/native';

import CalendarIcon from '../../assets/svg/calendar_icon.svg';
import IIcon from '../../assets/svg/calendar_icon.svg';
import QuestionIcon from '../../assets/svg/question_icon.svg';
import HeartIcon from '../../assets/svg/heart.svg';

const icons = [
  { id: 1, image: <CalendarIcon /> },
  { id: 2, image: <QuestionIcon /> },
  { id: 3, image: <QuestionIcon /> },
  { id: 4, image: <HeartIcon width={14} height={14} /> },
];

const DoctorsProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {doctorsData.map(data => (
        <View style={styles.mainContainer} key={data.id}>
          <View style={styles.imageContainer}>
            <Image source={data.image} style={styles.imageView} />
          </View>
          <View style={styles.nameContainer}>
            <View>
              <Text style={styles.dName}>{data.name}</Text>
              <Text style={styles.desc}>{data.speaciality}</Text>
            </View>
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={styles.infoName}
                onPress={() => navigation.navigate('Info')}
              >
                <Text style={styles.info}>Info</Text>
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                {icons.map(icon => (
                  <TouchableOpacity style={styles.icons} key={icon.id}>
                    {icon.image}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default DoctorsProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sc(30),
    paddingTop: sc(10),
    gap: sc(15),
    marginBottom: vs(80),
  },
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    height: sc(130),
    borderRadius: sc(17),
    alignItems: 'center',
    paddingHorizontal: sc(10),
  },
  imageContainer: {},
  imageView: {
    width: sc(108),
    height: sc(108),
    borderRadius: 100,
  },
  dName: {
    paddingLeft: sc(10),
    fontSize: sc(15),
    maxWidth: '90%',
    color: colors.primary,
  },
  desc: {
    paddingLeft: sc(10),
    fontSize: sc(13),
    maxWidth: '80%',
  },
  optionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: sc(10),
    paddingTop: sc(10),
  },
  nameContainer: {},
  infoName: {
    backgroundColor: colors.primary,
    width: sc(46),
    height: sc(22),
    justifyContent: 'center',
    borderRadius: sc(18),
  },
  info: {
    textAlign: 'center',
    color: colors.white,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: sc(1),
    paddingLeft: sc(5),
  },

  icons: {
    width: sc(21),
    height: sc(21),
    borderRadius: sc(13),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
