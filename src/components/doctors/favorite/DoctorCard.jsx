import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import Heart from '../../../assets/svg/favorite_heart.svg';
import Badge from '../../../assets/svg/professional_badge.svg';

import { colors } from '../../../themes/colors';
import { ms, sc } from '../../../utils/responsive';
import { toggleFavoriteDoctor } from '../../../redux/slices/doctorsSlice';

const DoctorCard = ({ item, onAppointment }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteDoctor(item.id));
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: item.avatar }} style={styles.image} />

        <View style={styles.info}>
          <View style={styles.badgeRow}>
            <Badge width={13} height={13} />

            <Text style={styles.badge}>Professional Doctor</Text>
          </View>

          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.speciality}>{item.speciality}</Text>

          {!!item.qualification && (
            <Text style={styles.qualification}>{item.qualification}</Text>
          )}

          {!!item.experience && (
            <Text style={styles.experience}>
              {item.experience} Years Experience
            </Text>
          )}
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={handleToggleFavorite}>
          <Heart width={22} height={22} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={() => onAppointment?.(item)}
      >
        <Text style={styles.buttonText}>Make Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#CFDAFF',
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    padding: Screen_SIZES_ModerateScale.twelve,
    marginHorizontal: Screen_SIZES_Scale.thirty,
    marginBottom: 18,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  badge: {
    color: colors.primary,
    fontSize: 11,
    marginLeft: 4,
  },

  name: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 15,
  },

  speciality: {
    color: '#555',
    fontSize: 12,
    marginTop: 3,
  },

  qualification: {
    color: '#666',
    fontSize: 11,
    marginTop: 2,
  },

  experience: {
    color: '#666',
    fontSize: 11,
    marginTop: 2,
  },

  button: {
    marginTop: 12,
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
