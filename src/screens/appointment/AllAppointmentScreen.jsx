import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React, { useState } from 'react';
import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import { ms, sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';
import Completed from '../../components/Appointment/Completed';
import Upcoming from '../../components/Appointment/Upcoming';
import Cancelled from '../../components/Appointment/Cancelled';

const options = [
  { id: 1, name: 'Complete' },
  { id: 2, name: 'Upcoming' },
  { id: 3, name: 'Cancelled' },
];

const AllAppointmentScreen = () => {
  const [selected, setSelected] = useState('Complete');

  return (
    <View style={styles.mainContainer}>
      <ProfileHeader header={'All Appointment'} />
      <View style={styles.container}>
        <View style={styles.optionsContainer}>
          {options.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.btn,
                selected === item.name ? styles.selectedBtn : styles.btn,
              ]}
              onPress={() => setSelected(item.name)}
            >
              <Text
                style={[
                  styles.btnName,
                  selected === item.name
                    ? styles.selectedBtnName
                    : styles.btnName,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.selectedComp}>
          {selected === 'Complete' && <Completed />}
          {selected === 'Upcoming' && <Upcoming />}
          {selected === 'Cancelled' && <Cancelled />}
        </View>
      </View>
    </View>
  );
};

export default AllAppointmentScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    marginHorizontal: sc(30),
    marginTop: vs(16),
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: colors.secondary,
    paddingVertical: ms(8),
    paddingHorizontal: ms(14),
    borderRadius: ms(30),
    marginBottom: vs(8),
  },
  selectedBtn: {
    backgroundColor: colors.primary,
  },
  btnName: {
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    fontSize: ms(16),
    color: colors.primary,
  },
  selectedBtnName: {
    color: colors.white,
  },
});
