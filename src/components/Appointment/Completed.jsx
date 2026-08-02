import { View } from 'react-native';
import React from 'react';
import DoctorName from './DoctorName';

const Completed = () => {
  return (
    <View>
      <DoctorName selected={'Complete'} />
    </View>
  );
};

export default Completed;
