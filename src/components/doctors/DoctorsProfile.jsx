import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { sc } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { doctorsData } from '../../utils/doctorsdata';

const icons = [
  { id: 1, icon: require('../../assets/blue_calender.png') },
  { id: 2, icon: require('../../assets/blue_calender.png') },
  { id: 3, icon: require('../../assets/blue_calender.png') },
  { id: 4, icon: require('../../assets/blue_calender.png') },
];

const DoctorsProfile = () => {
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
              <TouchableOpacity style={styles.infoName}>
                <Text style={styles.info}>Info</Text>
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                {icons.map(icon => (
                  <TouchableOpacity style={styles.icons} key={icon.id}>
                    <Image source={icon.icon} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
  ('');
};

export default DoctorsProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sc(30),
    paddingTop: sc(10),
    gap: sc(15),
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
