import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DoctorsHeading from './DoctorsHeading';
import DoctorsProfile from './DoctorsProfile';

const DoctorsComponent = () => {
  return (
    <ScrollView>
      <DoctorsHeading heading={'Doctors'} />
      <DoctorsProfile />
    </ScrollView>
  );
};

export default DoctorsComponent;

const styles = StyleSheet.create({});
