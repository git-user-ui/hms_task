import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

import CalendarIcon from '../../assets/svg/calendar_icon.svg';
import QuestionIcon from '../../assets/svg/question_icon.svg';
import HeartIcon from '../../assets/svg/heart.svg';

const icons = [
  {
    id: 1,
    icon: <CalendarIcon />,
  },
  {
    id: 2,
    icon: <QuestionIcon />,
  },
  {
    id: 3,
    icon: <QuestionIcon />,
  },
  {
    id: 4,
    icon: <HeartIcon width={14} height={14} />,
  },
];

const DoctorsProfile = ({ item }) => {
  const navigation = useNavigation();

  const handleInfo = () => {
    navigation.navigate('Info', {
      doctor: item,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.avatar,
          }}
          style={styles.imageView}
        />
      </View>

      <View style={styles.nameContainer}>
        <View>
          <Text numberOfLines={1} style={styles.dName}>
            {item.name}
          </Text>

          <Text style={styles.desc}>{item.speciality}</Text>

          {!!item.qualification && (
            <Text style={styles.qualification}>{item.qualification}</Text>
          )}

          {!!item.experience && (
            <Text style={styles.experience}>
              {item.experience} Years Experience
            </Text>
          )}
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.infoName}
            onPress={handleInfo}
          >
            <Text style={styles.info}>Info</Text>
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            {icons.map(icon => (
              <TouchableOpacity
                key={icon.id}
                activeOpacity={0.8}
                style={styles.icons}
              >
                {icon.icon}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DoctorsProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    marginHorizontal: sc(30),
    marginBottom: sc(15),
    borderRadius: sc(17),
    alignItems: 'center',
    paddingHorizontal: sc(10),
    paddingVertical: sc(10),
  },

  imageContainer: {},

  imageView: {
    width: sc(100),
    height: sc(100),
    borderRadius: sc(100),
  },

  nameContainer: {
    flex: 1,
    marginLeft: sc(10),
  },

  dName: {
    fontSize: sc(15),
    color: colors.primary,
    fontWeight: '700',
    maxWidth: '90%',
  },

  desc: {
    marginTop: vs(3),
    fontSize: sc(13),
  },

  qualification: {
    marginTop: vs(2),
    fontSize: sc(12),
    color: '#666',
  },

  experience: {
    marginTop: vs(2),
    fontSize: sc(12),
    color: '#666',
  },

  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sc(12),
  },

  infoName: {
    backgroundColor: colors.primary,
    width: sc(52),
    height: sc(24),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sc(18),
  },

  info: {
    color: colors.white,
    fontWeight: '600',
  },

  iconContainer: {
    flexDirection: 'row',
    marginLeft: sc(8),
  },

  icons: {
    width: sc(22),
    height: sc(22),
    borderRadius: sc(12),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: sc(4),
  },
});
