import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { sc } from '../../utils/responsive';
import DoctorsHeading from '../../components/doctors/DoctorsHeading';
import ProfileCard from '../../components/doctors/ProfileCard';
import InfoSection from '../../components/doctors/InfoSection';

const DoctorsInfo = () => {
  return (
    <>
      <DoctorsHeading heading="Doctor Info" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <ProfileCard />

        <InfoSection
          title="Profile"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <InfoSection
          title="Career Path"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <InfoSection
          title="Highlights"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </ScrollView>
    </>
  );
};

export default DoctorsInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sc(30),
    paddingVertical: sc(10),
    gap: sc(18),
  },
});
