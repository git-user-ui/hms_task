import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import DoctorsHeading from '../../components/doctors/DoctorsHeading';
import ProfileCard from '../../components/doctors/ProfileCard';
import InfoSection from '../../components/doctors/InfoSection';

import { sc, vs } from '../../utils/responsive';
import { ROUTE_PARAMS } from '../../constants/routes';

const DoctorsInfo = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const doctor = route.params?.[ROUTE_PARAMS.DOCTORS];

  const handleSchedulePress = () => {
    navigation.navigate('ScheduleScreen', { [ROUTE_PARAMS.DOCTORS]: doctor });
  };

  return (
    <>
      <DoctorsHeading heading="Doctor Info" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <ProfileCard
          doctorsData={doctor}
          onSchedulePress={handleSchedulePress}
        />

        <InfoSection
          title="Profile"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <InfoSection
          title="Career Path"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <InfoSection
          title="Highlights"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </ScrollView>
    </>
  );
};

export default DoctorsInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    paddingVertical: Screen_SIZES_VerticalScale.ten,
    paddingBottom: vs(50),
  },
});
