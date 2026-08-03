import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

import CalendarIcon from '../../assets/svg/calendar_icon.svg';
import QuestionIcon from '../../assets/svg/question_icon.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import FavoriteHeartIcon from '../../assets/svg/favorite_heart.svg';

import { ROUTES, ROUTE_PARAMS } from '../../constants/routes';
import { toggleFavoriteDoctor } from '../../redux/slices/doctorsSlice';

const DoctorsProfile = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleInfo = () => {
    navigation.navigate(ROUTES.DOCTOR_INFO, {
      [ROUTE_PARAMS.DOCTORS]: item,
    });
  };
  const handleDetails = () => {
    navigation.navigate(ROUTES.DETAILS, {
      [ROUTE_PARAMS.DOCTORS]: item,
    });
  };
  const handleSchedule = () => {
    navigation.navigate(ROUTES.SCHEDULE);
  };
  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteDoctor(item.id));
  };

  const icons = [
    {
      id: 1,
      icon: <CalendarIcon />,
      onPress: handleSchedule,
    },
    {
      id: 2,
      icon: <QuestionIcon />,
      onPress: undefined,
    },
    {
      id: 3,
      icon: <QuestionIcon />,
      onPress: undefined,
    },
    {
      id: 4,

      icon: item.isFavorite ? (
        <FavoriteHeartIcon width={14} height={14} />
      ) : (
        <HeartIcon width={14} height={14} />
      ),
      onPress: handleToggleFavorite,
    },
  ];

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
                onPress={icon.onPress}
                disabled={!icon.onPress}
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
    marginHorizontal: Screen_SIZES_Scale.thirty,
    marginBottom: sc(15),
    borderRadius: sc(17),
    alignItems: 'center',
    paddingHorizontal: Screen_SIZES_Scale.ten,
    paddingVertical: Screen_SIZES_Scale.ten,
  },

  imageContainer: {},

  imageView: {
    width: sc(100),
    height: sc(100),
    borderRadius: sc(100),
  },

  nameContainer: {
    flex: 1,
    marginLeft: Screen_SIZES_Scale.ten,
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
    marginTop: Screen_SIZES_VerticalScale.two,
    fontSize: Screen_SIZES_Scale.twelve,
    color: '#666',
  },

  experience: {
    marginTop: Screen_SIZES_VerticalScale.two,
    fontSize: Screen_SIZES_Scale.twelve,
    color: '#666',
  },

  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Screen_SIZES_Scale.twelve,
  },

  infoName: {
    backgroundColor: colors.primary,
    width: sc(52),
    height: Screen_SIZES_Scale.twentyFour,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Screen_SIZES_Scale.eighteen,
  },

  info: {
    color: colors.white,
    fontWeight: '600',
  },

  iconContainer: {
    flexDirection: 'row',
    marginLeft: Screen_SIZES_Scale.eight,
  },

  icons: {
    width: Screen_SIZES_Scale.twentyTwo,
    height: Screen_SIZES_Scale.twentyTwo,
    borderRadius: Screen_SIZES_Scale.twelve,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Screen_SIZES_Scale.four,
  },
});
