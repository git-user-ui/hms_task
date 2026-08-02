import { View } from 'react-native';
import React from 'react';
import DoctorName from './DoctorName';

const Upcoming = () => {
  return (
    <View>
      <DoctorName selected={'Upcoming'} />
    </View>
  );
};

export default Upcoming;
