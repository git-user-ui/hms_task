import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DoctorsHeading from './DoctorsHeading';

const DoctorsComponent = () => {
  return (
    <View>
      <DoctorsHeading heading={'Doctors'} />
    </View>
  );
};

export default DoctorsComponent;

const styles = StyleSheet.create({});
