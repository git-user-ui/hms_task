import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ms, sc, vs } from '../../utils/responsive';
import HomeHeader from '../../components/home/HomeHeader';
import HomeAppointment from '../../components/home/HomeAppointment';
import HomeDoctorsList from '../../components/home/HomeDoctorsList';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <HomeHeader />
      </View>
      <ScrollView>
        <HomeAppointment />
        <HomeDoctorsList />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sc(20),
    paddingTop: vs(10),
  },
});
