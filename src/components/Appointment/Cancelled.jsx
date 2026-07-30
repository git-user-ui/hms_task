import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DoctorName from './DoctorName';

const Cancelled = () => {
  return (
    <View>
      <DoctorName selected={'Cancelled'} />
    </View>
  );
};

export default Cancelled;

const styles = StyleSheet.create({});
